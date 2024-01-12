const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: Number,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    });


const Product = mongoose.model('Product', productSchema);

module.exports = Product;