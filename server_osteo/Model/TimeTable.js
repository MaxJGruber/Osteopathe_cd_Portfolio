const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TimeTableSchema = new Schema({
    monday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
    tuesday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
    wednesday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
    thursday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
    friday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
    saturday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
    sunday: { day: String, secretaryTimes: String, morningOfficeTimes: String, afternoonOfficeTimes: String, morningHomeTimes: String, afternoonHomeTimes: String },
})

const TimeTableModel = mongoose.model("TimeTable", TimeTableSchema)

module.exports = TimeTableModel