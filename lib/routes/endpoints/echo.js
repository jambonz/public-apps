const router = require('express').Router();
const {WebhookResponse} = require('@jambonz/node-client');

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /echo');
  try {
    const app = new WebhookResponse();
    app
      .say({text: 'silence_stream://1000'})
      .gather({
        say: {text: 'Please say something and we will echo it back to you.'},
        input: ['speech'],
        actionHook: '/echo/transcript',
        timeout: 15,
      })
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

router.post('/transcript', (req, res) => {
  const {logger} = req.app.locals;
  const {reason, speech} = req.body;
  logger.debug({payload: req.body}, 'POST /echo/transcript');
  try {
    const app = new WebhookResponse();
    if (reason === 'speechDetected') {
      const {transcript, confidence} = speech.alternatives[0];
      app
        .say({text: `You said: ${transcript}.  The confident score was ${confidence.toFixed(2)}. `});
      if (speech.vendor?.name) {
        app.say({text: `The speech service was provided by ${speech.vendor.name}`});
      }
      app
        .gather({
          say: {text: 'Say something else.'},
          input: ['speech'],
          actionHook: '/echo/transcript',
        });
    }
    else {
      app
      .gather({
        say: {text: 'Are you still there?  I didn\'t hear anything.'},
        input: ['speech'],
        actionHook: '/echo/transcript',
      });
    }
    res.status(200).json(app);
  } catch (err) {
    logger.info({err}, 'Error handling /echo/transcript');
    res.sendStatus(503);
  }
});

module.exports = router;
