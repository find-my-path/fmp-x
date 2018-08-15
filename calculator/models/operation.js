const mongoose = require('mongoose')

const operationSchema = new mongoose.Schema({
    parameter1: Number,
    parameter2: Number,
    operation: String,
    result: Number
})

module.exports = mongoose.model('Operation', operationSchema)