const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    pictureUrl:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', userSchema)
