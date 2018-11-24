const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    index: {type: Number, required: true},
    baseUrl: {type: String, required: true}
});

const Url = mongoose.model('Url',UrlSchema);

module.exports = Url;