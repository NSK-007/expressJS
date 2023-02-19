const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const errorController = require('./controllers/Error404');


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

app.use(errorController.error);

app.listen(4000);