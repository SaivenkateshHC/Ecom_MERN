const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    createdAt: new Date(),
    // get the user id from jwt token
    user: req.user._id,
    username: req.user.username, // Associate the product with the currently logged-in user's username


  });
  let productCreated = false;
  await newProduct
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
