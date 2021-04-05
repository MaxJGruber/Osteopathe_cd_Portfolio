const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TimeTableSchema = new Schema({
    name: String, start: String, end: String, type: { type: String, enum: ["cabinet", "home", "secretary"] },
})

const TimeTableModel = mongoose.model("TimeTable", TimeTableSchema)

module.exports = TimeTableModel