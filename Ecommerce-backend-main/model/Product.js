const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
       unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    stock: {
        type: String,
        required: true,
        unique: true,
    },
    tel: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("Product", ProductSchema);