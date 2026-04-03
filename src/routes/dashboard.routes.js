const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize');

const controller = require('../controllers/dashboard.controller');

// Summary → ANALYST + ADMIN
router.get('/summary', auth, authorize('ADMIN', 'ANALYST'), controller.getSummary);

// Trends → ANALYST + ADMIN
router.get('/trends', auth, authorize('ADMIN', 'ANALYST'), controller.getTrends);

module.exports = router;