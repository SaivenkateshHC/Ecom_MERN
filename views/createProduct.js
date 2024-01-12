const Product = require("../models/product.model");

const createProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    createdAt: new Date(),
  });
  let productCreated = false;
  newProduct
    .save()
    .then((product) => {
      productCreated = true;
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

module.exports = createProduct;
