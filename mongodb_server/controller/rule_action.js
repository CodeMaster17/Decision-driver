const Rule = require('../models/ruleSchema');

exports.createRule = async (req, res) => {
    try {
        // Check if a rule with the same name already exists
        const existingRule = await Rule.exists({ name: req.body.name });
        if (existingRule) {
            return res.status(400).send({
                message: "A rule with this name already exists."
            });
        }

        // Create a new instance of the Rule model
        const newRule = new Rule(req.body);

        // Save the rule in the database
        const savedRule = await newRule.save();

        res.status(201).send(savedRule);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the rule."
        });
    }
};

// to count the number of rules
exports.countRules = async (req, res) => {
    try {
        const number = await Rule.countDocuments({})
        res.status(201).json(number);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while counting the rules."
        });
    }
}

// get all rules
exports.getAllRules = async (req, res) => {
    try {
        const rules = await Rule.find({})
        res.status(201).json(rules);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while getting the rules."
        });
    }
}