const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize');

const controller = require('../controllers/transaction.controller');

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     responses:
 *       200:
 *         description: List of transactions
 */
router.get('/', auth, authorize('ADMIN', 'ANALYST'), controller.getTransactions);

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create transaction
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', auth, authorize('ADMIN'), controller.createTransaction);

/**
 * @swagger
 * /transactions/{id}:
 *   patch:
 *     summary: Update transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.patch('/:id', auth, authorize('ADMIN'), controller.updateTransaction);

/**
 * @swagger
 * /transactions/{id}:
 *   delete:
 *     summary: Delete transaction
 */
router.delete('/:id', auth, authorize('ADMIN'), controller.deleteTransaction);

module.exports = router;