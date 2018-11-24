const express = require('express');
const bodyParser = require('body-parser');

const UrlRouter = require('./src/controller/Url');
const {ErrorHandler} = require('./src/utils/ErrorHandler');

const app = express();

// setting env variables
app.set('port',process.env.PORT || 3000);

// injecting middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/url',UrlRouter);
app.use(ErrorHandler);

// placing a callback to handle server start event
app.listen(app.get('port'),function(){
    console.log('server started at : ',app.get('port'));
});