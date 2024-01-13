const jwt = require("jsonwebtoken");
const router = require("express").Router();

const User = require("../models/user.model");

function generateTokens(user) {
    const parsedUser = {
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
    }
  const accessToken = jwt.sign(parsedUser, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
  const refreshToken = jwt.sign(parsedUser, process.env.REFRESH_TOKEN_SECRET);
  return { accessToken, refreshToken };
}

router.post("/login", async (req, res) => {

    try{
        if(!req.body.username || !req.body.password){
            return res.status(400).send({
                message: "Username and password can not be empty"
            })
        }else if(req.body.username && req.body.password){
            const user = await User.findOne({username: req.body.username, password: req.body.password});
            if(!user){
                return res.status(400).send({
                    message: "Username or password is incorrect"
                })
            }
            const tokens = generateTokens(user);
            res.send(tokens);
        }
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User.",
          });
    }
});

module.exports = router;
