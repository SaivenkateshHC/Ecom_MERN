const express = require("express");
const createUser = require("../views/createUser");
const User = require("../models/user.model");
const authenticateToken = require("../utils/authenticateToken");
const router = express.Router();

router.post('/create-user', (req, res) => {
    
   if(!req.body.username || !req.body.email || !req.body.password){
        console.log(req)
       return res.status(400).send({
           message: "Username can not be empty"
       })
    } else{
       createUser(req, res);
    }

  });


  router.get('/get-users',authenticateToken, async (req, res) => {
   try {
     const users = await User.find({});
     res.status(200).send(users);
   } catch (error) {
     res.status(500).send({ message: 'Error fetching user' });
   }
 });

module.exports = router;
