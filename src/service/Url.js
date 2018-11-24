const Url = require('../db/index').Url;
const TinyUrl = require('./TinyUrl');
const {encodeToBase62,decodeInputFromBase62} = require('../utils/Encoder');
const {SupportTypes,CustomError} = require('../utils/ErrorHandler');

function add(url,cb){
    Url.find({},function(err,res){
        if(err)
            cb(err);
        else{
            const expectedIndex = res.length+1;
            Url.create({baseUrl:url, index: expectedIndex},function(err,count){
                if(err)
                    cb(err);
                else{
                    const str = encodeToBase62(expectedIndex);
                    TinyUrl.add(str,function(err,result){
                        if(err)
                            cb(err);
                        else
                            cb(null,result);
                    });
                }
            });
        }
    })
}

function get(str,cb){
    TinyUrl.get(str,function(err,data){
        if(err)
            cb(err);
        else{
            if(data.length > 0){
                const index = decodeInputFromBase62(str);
                Url.find({index: index},function(err,urlData){
                    if(err)
                        cb(err);
                    else{
                        cb(null,urlData);
                    }
                })
            }else
                cb(new CustomError(SupportTypes.InValidField,str+' is not valid'));
        }
    })
}

module.exports = {
    add: add,
    get: get
}