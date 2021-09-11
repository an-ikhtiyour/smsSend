const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const SmsSchema = new Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return uuidv4();
        }
    },
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requred:true
    },
    description:{
        type:String
    }
});

module.exports = mongoose.model("Sms", SmsSchema);