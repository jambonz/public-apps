const router = require('express').Router();

router.use('/call-status', require('./call-status'));
router.use('/hello-world', require('./hello-world'));
router.use('/dial-time', require('./dial-time'));
router.use('/dial-ivr', require('./dial-ivr'));
router.use('/dial', require('./dial'));
router.use('/echo', require('./echo'));
router.use('/sms-ack', require('./sms-ack'));

module.exports = router;
