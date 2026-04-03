const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize');

/**
 * @swagger
 * /test/admin:
 *   get:
 *     summary: Admin access test
 */
router.get('/admin', auth, authorize('ADMIN'), (req, res) => {
  res.json({ message: "Admin access granted" });
});

/**
 * @swagger
 * /test/analyst:
 *   get:
 *     summary: Analyst access test
 */
router.get('/analyst', auth, authorize('ADMIN', 'ANALYST'), (req, res) => {
  res.json({ message: "Analyst access granted" });
});

/**
 * @swagger
 * /test/user:
 *   get:
 *     summary: User access test
 */
router.get('/user', auth, (req, res) => {
  res.json({ message: "User access granted" });
});

module.exports = router;