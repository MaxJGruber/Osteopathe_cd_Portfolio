const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeTableSchema = new Schema({
    name: String,
    day: { type: String, enum: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"] },
    start: String,
    end: String,
    type: { type: String, enum: ["Cabinet", "Domicile", "Secretariat", "Autre"] },
});

const TimeTableModel = mongoose.model("TimeTable", TimeTableSchema);

module.exports = TimeTableModel;