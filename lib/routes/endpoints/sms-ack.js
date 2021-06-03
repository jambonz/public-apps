const router = require('express').Router();
const WebhookResponse = require('@jambonz/node-client').WebhookResponse;

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /sms-ack');
  try {
    const idx = Math.floor(Math.random() * (acknowledgements.length - 1));
    logger.debug(`selecting ackknowledgement #${idx}`);
    const app = new WebhookResponse();
    app
      .message({
        from: req.body.to,
        to: req.body.from,
        text: acknowledgements[idx]
      });
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

const acknowledgements = [
  'got it.',
  'yowsa!',
  'cool beans.',
  'sounds good.',
  'with you on that!',
  'haha.',
  'yup',
  'you can say that again!',
  'couldna said it better myself!',
  'you da man!',
  'that\'s what she said!',
  'stay gold, ponyboy,',
  '👍',
  '😊',
  'whoop, whoop!'
];

module.exports = router;
