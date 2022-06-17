const express = require('express');
const router = express.Router();
router.use('/', require('./swagger'));
router.use('/b-lists', require('./b-lists'));
router.use('/', require('./home'))

module.exports = router;