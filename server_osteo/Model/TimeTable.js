const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TimeTableSchema = new Schema({
    monday: { day: String, openingTime: String, closingTime: String },
    tuesday: { day: String, openingTime: String, closingTime: String },
    wednesday: { day: String, openingTime: String, closingTime: String },
    thursday: { day: String, openingTime: String, closingTime: String },
    friday: { day: String, openingTime: String, closingTime: String },
    saturday: { day: String, openingTime: String, closingTime: String },
    sunday: { day: String, openingTime: String, closingTime: String },
})

const TimeTableModel = mongoose.model("TimeTable", TimeTableSchema)

module.exports = TimeTableModel