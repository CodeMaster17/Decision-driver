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

exports.getAllProperty = async (req, res) => {
    try {
        const allProperty = await PropertyData.find();
        res.send(allProperty);
        return allProperty;
    } catch (err) {
        console.log(err);
    }
}

