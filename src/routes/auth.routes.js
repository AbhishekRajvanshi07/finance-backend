const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user
 *     responses:
 *       201:
 *         description: User created
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     responses:
 *       200:
 *         description: JWT token
 */
router.post('/login', authController.login);

module.exports = router;