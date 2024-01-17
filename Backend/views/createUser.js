const User = require("../models/user.model.js");

const createUser = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    createdAt: new Date(),
  });
  let userCreated = false;
  newUser
    .save()
    .then((user) => {
      userCreated = true;
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

module.exports = createUser;