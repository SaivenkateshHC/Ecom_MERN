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
    user: { // Add this field
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: { // Add this field
        type: String,
        ref: 'User'
    }
    });


const Product = mongoose.model('Product', productSchema);

module.exports = Product;