const express = require('express');
const app = express();

app.use((req, res, next) => {
    if(req.url==='/'){console.log('I am a middleware');
    next();}
})

app.use((req, res, next) => {
    if(req.url==='/'){console.log('I am an another middleware ');
    res.send({key1:'shiva'});
    res.end();
}
})

app.listen(4000);