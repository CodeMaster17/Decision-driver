const Rule = require('../models/ruleSchema');

exports.createRule = async (req, res) => {
    try {
        // Check if a rule with the same name already exists
        console.log(req.body)
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