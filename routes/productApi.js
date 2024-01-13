const express = require('express');
const router = express.Router();
const createProduct = require('../views/createProduct');
const authenticateToken = require('../utils/authenticateToken');
const Product = require('../models/product.model');

router.post('/create-product', authenticateToken, async(req, res) => {
    if(!req.body.name || !req.body.price || !req.body.description){
        console.log(req)
       return res.status(400).send({
           message: "Product can not be empty"
       })
    } else{
       await createProduct(req, res);
    }
  });


 router.get('/get-products',authenticateToken, async (req, res) => {
    try {
        const products = await Product.find({
            username: req.user.username,
        });
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching product' });
    }
    });
  module.exports = router;