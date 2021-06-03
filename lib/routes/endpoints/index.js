const router = require('express').Router();

router.use('/call-status', require('./call-status'));
router.use('/hello-world', require('./hello-world'));
router.use('/dial-time', require('./dial-time'));
router.use('/dial', require('./dial'));
router.use('/sms-ack', require('./sms-ack'));

module.exports = router;
