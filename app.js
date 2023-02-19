const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact-us');
const successRouter = require('./routes/success');

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page Not Found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(4000);