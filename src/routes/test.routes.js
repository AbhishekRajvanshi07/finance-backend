const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize');

// Only ADMIN
router.get('/admin', auth, authorize('ADMIN'), (req, res) => {
  res.json({ message: "Admin access granted" });
});

// ADMIN + ANALYST
router.get('/analyst', auth, authorize('ADMIN', 'ANALYST'), (req, res) => {
  res.json({ message: "Analyst access granted" });
});

// All authenticated users
router.get('/user', auth, (req, res) => {
  res.json({ message: "User access granted" });
});

module.exports = router;