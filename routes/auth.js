const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// POST /api/register
router.post('/register', register);

// POST /api/login
router.post('/login', login);

router.get('/test', (req, res) => res.json({ msg: "API Test Works" }));

module.exports = router;
