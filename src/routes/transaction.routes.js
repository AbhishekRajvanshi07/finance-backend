const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize');

const controller = require('../controllers/transaction.controller');

// Create → ADMIN
router.post('/', auth, authorize('ADMIN'), controller.createTransaction);

// Read → ADMIN + ANALYST
router.get('/', auth, authorize('ADMIN', 'ANALYST'), controller.getTransactions);

// Update → ADMIN
router.patch('/:id', auth, authorize('ADMIN'), controller.updateTransaction);

// Delete → ADMIN
router.delete('/:id', auth, authorize('ADMIN'), controller.deleteTransaction);

module.exports = router;