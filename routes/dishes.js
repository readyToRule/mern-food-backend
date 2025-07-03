const express = require('express');
const router = express.Router();
const { getDishes } = require('../controllers/dishController');

// GET /api/dishes?cuisine=north&meal=breakfast
router.get('/dishes', getDishes);

module.exports = router;
