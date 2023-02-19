const express = require('express');
const router = express.Router();
// const path = require('path');
// const rootDir = require('../util/path');
const successController = require('../controllers/success');

router.post('/success', successController.postSuccess);



module.exports = router;