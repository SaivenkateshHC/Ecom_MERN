const express = require('express');
const router = express.Router();
const createProduct = require('../views/createProduct');

router.post('/create-product', (req, res) => {
    if(!req.body.name || !req.body.price || !req.body.description){
        console.log(req)
       return res.status(400).send({
           message: "Product can not be empty"
       })
    } else{
       createProduct(req, res);
    }
  });

  module.exports = router;