const express = require("express");
const router = express.Router();
const siteController = require('../controllers/SiteController');

router.get('/:id', siteController.show);
router.get('/', siteController.index);

module.exports = router;
