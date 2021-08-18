const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const model = {}
model.postSchema = require('./post')
model.userSchema = require('./user')
module.exports = model