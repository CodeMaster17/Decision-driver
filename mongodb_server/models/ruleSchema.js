const mongoose = require('mongoose')

const conditionSchema = new mongoose.Schema({
    property: {
        type: String,
        required: true,
    },
    operator: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    connectedBy: {
        type: String,
        required: false,
    },
    conditionSchema: [this]
})

const actionSchema = new mongoose.Schema({
    property: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
    connectedBy: {
        type: String,
        required: false,
    },
    actionSchema: [this]
})

const ruleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tested: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    conditionSchema: [conditionSchema],
    actionSchema: [actionSchema]
})

module.exports = mongoose.model('Rule', ruleSchema)

