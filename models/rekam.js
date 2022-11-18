const mongoose = require('mongoose');
const { Schema } = mongoose

const rekamSchema = new Schema({
    id_konsultasi:
    {
        type: mongoose.ObjectId,
        ref: "konsultasi",
    },
    anamnesis: String,
    diagnosis: String,
    obat: String,
})

const Rekam = mongoose.model("rekam", rekamSchema)

module.exports = Rekam