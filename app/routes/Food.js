const express = require("express");
const router = express.Router();
const foodController = require('../controllers/FoodController');

router.post('/add-food', foodController.addFoodHandle);
router.get('/', foodController.getAllFoodHandle);
router.get('/:id', foodController.getDetailFoodHandle);

module.exports = router;