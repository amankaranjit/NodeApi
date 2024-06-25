const express = require('express');
const router = express.Router();
const { getAllProducts, getFilteredProducts } = require("../controllers/products");

// Define the routes

// get all products
router.route("/").get(getAllProducts);
// get filtered products
router.route("/filtered").get(getFilteredProducts);

module.exports = router;
