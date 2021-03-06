const router = require('express').Router();

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /call status');
  res.sendStatus(200);
});

module.exports = router;
