const express = require("express");
var router = express.Router();

router.get("/",function(req,res){
  console.log(process.env.VAR_NAME)
  res.send("<h3>Welcome !</h3>")
})

module.exports = router;
