const SupportTypes = {
    TypeError: 'type is mismatched',
    FieldIsRequired: 'field is required',
    InValidField: 'field of such type is not allowed'
}

const util = require('util');

function CustomError(type,message){
    Error.call(this);
    this.type = type;
    this.message = message;
}

CustomError.prototype = Object.create(Error);

function handler (err,req,res,next){
    switch(err.type){
        case SupportTypes.TypeError || SupportTypes.InValidField:{
            res.status(400).end(err.message);
            break;
        }
        case SupportTypes.FieldIsRequired:{
            res.status(404).end(err.message);
            break;
        }
        default:
            res.status(500).end(err.message);
    }
}

module.exports = {
    ErrorHandler: handler,
    CustomError: CustomError,
    SupportTypes: SupportTypes
}