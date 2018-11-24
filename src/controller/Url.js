const Router = require('express').Router;
const router = Router();
const UrlService = require('../service/Url');
const {SupportTypes,CustomError} = require('../utils/ErrorHandler');

router.post('/add',addUrl);
router.get('/:url',getUrl);

function addUrl(req,res,next){
    const {url} = req.body;
    if(url)
        UrlService.add(url,function(err,response){
            if(err)
                next(err);
            else
                res.json({url: response.tinyUrl});
        });
    else
        next(new CustomError(SupportTypes.FieldIsRequired,'please pass url'));
}

function getUrl(req,res,next){
    const shortUrl = req.params.url;
    if(shortUrl)
        UrlService.get(shortUrl,function(err,response){
            if(err)
                next(err);
            else{
                if(response.length > 0)
                    res.json({url:response[0].baseUrl});
                else
                    next(new CustomError(SupportTypes.InValidField,shortUrl+' is not valid'));
            }
        });
    else
        next(new CustomError(SupportTypes.FieldIsRequired,'please pass url'))
}

module.exports = router;