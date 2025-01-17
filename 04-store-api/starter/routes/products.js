
const express = require('express');
const router = express.Router();

const { getAllProducts, getProduct  } = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/:productId').get(getProduct);


module.exports = router;