const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('middleware')
    res.send('<h1>Hello World</h1>');
})

module.exports = router;