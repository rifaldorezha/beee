const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    role: String,
    password: String,
    username: String,
    jenis_kelamin: String,
})

const User = mongoose.model("User", userSchema)

module.exports = User