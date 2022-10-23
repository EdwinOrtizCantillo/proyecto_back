const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallosSchema = new Schema({
    placa:{type: String, required: true, max:30},
    pluma:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:45},
    nombre_p:{type: String, required: true, max:60},
    nombre_m:{type: String, required: true, max:60},
    edad:{type: String, required: false, max:70},
    peso:{type: String, required: false, max:50}
});

module.exports = mongoose.model("gallos", GallosSchema)