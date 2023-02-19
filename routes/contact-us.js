const express = require('express');
const router = express.Router();
// const path = require('path');
// const rootDir = require('../util/path');
const contactontroller = require('../controllers/contactUs');

router.get('/contact-us', contactontroller.getContact)

router.post('/contact-us', contactontroller.postContact)

module.exports = router;