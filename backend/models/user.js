const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hash: String,
    salt: String

}, {timestamps: true})

const User = mongoose.model('User', userSchema, 'users')
module.exports = User