const express = require('express');
const { setBudget, getBudgets } = require('../controllers/budgetController');

const router = express.Router();

router.post('/budgets', setBudget);
router.get('/budgets', getBudgets);

module.exports = router;
