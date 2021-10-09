const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewsController');

router.use('/t', newController.show);
router.use('/', newController.index);

module.exports = router;
