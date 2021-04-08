const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    location: String,
    content: String,
    contentShort: String
});

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;