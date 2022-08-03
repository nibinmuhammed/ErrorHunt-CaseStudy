const express = require('express'); 
const signupRouter = express.Router();
// const user = require('../data/user');
const userdata = require('../model/UserModel');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
});

signupRouter.post("/adduser",function(req,res){//part #2 point #10
   
    var newuser = {
        fname:req.body.fname,
        lname:req.body.lname,
        uid:req.body.uid,//part #2 point #10
        pwd:req.body.pwd//part #2 point #10
    };
    console.log(newuser);
    const user = new userdata(newuser);    
    // user.push(newuser);
    user.save();
    // console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;