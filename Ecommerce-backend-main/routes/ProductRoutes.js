const express = require("express");
const product = require("../controllers/ProductController");
const product_router = express.Router();
const upload = require("../middlewares/multerConfig");
const auth = require('../middlewares/auth');

product_router.post("/products",upload.single('image'), product.post_product);

product_router.get("/products",auth.auth, product.get_product);

product_router.get("/", product.get_allproduct);

product_router.get("/products/:id", product.each_product);

product_router.get('/products/images/:filename',auth.auth, product.product_image);

product_router.use(auth.auth);


module.exports = product_router;