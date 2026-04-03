const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize');

const controller = require('../controllers/dashboard.controller');

/**
 * @swagger
 * /dashboard/summary:
 *   get:
 *     summary: Get financial summary
 */
router.get('/summary', auth, authorize('ADMIN', 'ANALYST'), controller.getSummary);

/**
 * @swagger
 * /dashboard/trends:
 *   get:
 *     summary: Get trends
 */
router.get('/trends', auth, authorize('ADMIN', 'ANALYST'), controller.getTrends);

module.exports = router;