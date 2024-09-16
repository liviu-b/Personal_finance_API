const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find(req.query);
        res.status(200).json(transactions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
