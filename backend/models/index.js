const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const db = {}
db.schema = require('./model')
module.exports = db