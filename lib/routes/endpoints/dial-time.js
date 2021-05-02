const router = require('express').Router();
const {WebhookResponse} = require('@jambonz/node-client');
const greeting = `Hi there.  Please hold while we connect you to the talking clock, 
which is graciously provided by the National Research Council Time Signal of Canada.`;

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /dial-time');
  try {
    const app = new WebhookResponse();
    app
      .say({
        text: greeting
      })
      .dial({
        target: [
          {
            type: 'phone',
            number: process.env.NRC_TIME_SERVICE_DID
          }
        ]
      });
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
