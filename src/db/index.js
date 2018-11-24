const dbSettings = require('./db.json');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+dbSettings.hostname+':'+dbSettings.port+path.sep+dbSettings.dbName,{
    useNewUrlParser: true
});

module.exports = {
    Url: require('../modal/Url'),
    TinyUrl: require('../modal/TinyUrl')
};


