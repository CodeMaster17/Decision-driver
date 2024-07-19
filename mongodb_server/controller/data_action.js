const actionDataSchema = require('../models/actionDataSchema');
const PropertyData = require('../models/property_data_Schema');

exports.createProperty = async (req, res) => {
    try {
        const propertyExists = await PropertyData.exists({ name: req.body.name });
        if (propertyExists) {
            return res.status(400).send({
                message: "Property already exists"
            })
        }
        const newProperty = new PropertyData(req.body);
        const savedProperty = await newProperty.save();
        res.status(201).send(savedProperty);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the property."
        });
    }
}

exports.createAction = async (req, res) => {
    try {
        const actionExists = await actionDataSchema.exists({ name: req.body.name });
        if (actionExists) {
            return res.status(400).send({
                message: "Action already exists"
            })
        }
        const newAction = new actionDataSchema(req.body);
        const savedAction = await newAction.save();
        res.status(201).send(savedAction);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the property."
        });
    }
}

exports.getAllProperty = async (req, res) => {
    try {
        const allProperty = await PropertyData.find();
        res.send(allProperty);
        return allProperty;
    } catch (err) {
        console.log(err);
    }
}


exports.getAllActions = async (req, res) => {
    try {
        const allActions = await actionDataSchema.find();
        res.send(allActions)
    } catch (err) {
        console.log(err)
    }
}
