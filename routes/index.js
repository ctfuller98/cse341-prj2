const express = require('express');
const router = express.Router();
const {authSchema} = require('../validation')

router.use('/', require('./swagger'));
router.use('/b-lists', require('./b-lists'));
router.use('/', require('./home'))

module.exports = router;