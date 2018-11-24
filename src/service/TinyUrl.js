const TinyUrl = require('../db/index').TinyUrl;

function add(str,cb){
    TinyUrl.create({tinyUrl: str},function(err,result){
        if(err)
            cb(err);
        else
            cb(null,result);
    });
}

function get(str,cb){
    TinyUrl.find({tinyUrl: str},function(err,url){
        if(err)
            cb(err);
        else
            cb(null,url);
    });
}

module.exports = {
    add: add,
    get: get
}


