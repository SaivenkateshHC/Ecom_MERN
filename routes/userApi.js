const express = require("express");
const createUser = require("../views/createUser");
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

module.exports = router;
