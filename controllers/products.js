const path = require('path');
const rootDir = require('../util/path');
exports.getAddProducts = (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="book"><input type="Number" name="size"><button type="submit">Submit</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProducts = (req, res, next) => {
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/')
};

exports.getProducts =  (req, res, next) => {
    console.log('middleware')
    // res.send('<h1>Hello World</h1>');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};