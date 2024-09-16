const Budget = require('../models/Budget');

exports.setBudget = async (req, res) => {
    try {
        const budget = new Budget(req.body);
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.status(200).json(budgets);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
