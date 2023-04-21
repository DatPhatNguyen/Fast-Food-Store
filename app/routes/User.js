const express = require("express");
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/', userController.registerHandle);
router.get('/', userController.getUserHandle);
router.get('/:id', userController.getDetailUserHandle);

module.exports = router;