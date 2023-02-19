const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.post('/success', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="book"><input type="Number" name="size"><button type="submit">Submit</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})



module.exports = router;