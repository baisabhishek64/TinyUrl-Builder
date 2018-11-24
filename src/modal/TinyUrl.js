const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TinyUrlSchema = new Schema({
    tinyUrl: {type: String, required: true}
});

const TinyUrl = mongoose.model('TinyUrl',TinyUrlSchema);

module.exports = TinyUrl;