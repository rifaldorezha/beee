const mongoose = require('mongoose');
const { Schema } = mongoose

const konsultasiSchema = new Schema({
    poli: String,
    tgl_konsultasi: {
        type: String,
        format: Date,
        required: true
    },
});

const Konsultasi = mongoose.model("konsultasi", konsultasiSchema)

module.exports = Konsultasi;