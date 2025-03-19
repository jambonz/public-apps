const router = require('express').Router();
const {WebhookResponse} = require('@jambonz/node-client');


router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /hello-world');
  try {
    const app = new WebhookResponse();
    app
      .pause({length: 1.5})
      .play({url: `https://${req.headers.host}/static/welcome.mp3`})
      .pause({length: 1})
      .say({
        text: `This is an example of text to speech, is is using the ${req.body.defaults.synthesizer.voice} voice from ${req.body.defaults.synthesizer.vendor}, and the language code is set to ${req.body.defaults.synthesizer.language}`
      });
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
