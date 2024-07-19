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

exports.getAllRules = async (req, res) => {
    try {
        // Extract sort field and order from query parameters
        const sortField = req.query.sortField || "createdAt"; // Default sort field
        const sortOrder = req.query.sortOrder === "asc" ? 1 : -1; // Default sort order (descending if not specified)
        console.log("Get all rules")
        // Fetch and sort rules from the database
        const rules = await Rule.find({}).sort({ [sortField]: sortOrder });
        res.status(200).json(rules); // Changed status code to 200 for successful response
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while getting the rules."
        });
    }
}

// get rule by id
exports.getRuleById = async (req, res) => {
    try {
        const rule = await Rule.findById(req.params.id)
        res.status(201).json(rule);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while getting the rule."
        });
    }
}