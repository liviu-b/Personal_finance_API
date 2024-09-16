const express = require('express');
const { addTransaction, getTransactions } = require('../controllers/transactionController');

const router = express.Router();

router.post('/transactions', addTransaction);
router.get('/transactions', getTransactions);

module.exports = router;