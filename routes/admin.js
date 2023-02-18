const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="book"><input type="Number" name="size"><button type="submit">Submit</button></form>');
})

router.post('/add-product', (req, res, next) => {
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/shop')
})

module.exports = router;