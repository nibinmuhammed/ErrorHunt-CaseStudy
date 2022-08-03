const express = require('express'); 
const loginRouter = express.Router();
 const user = require('../data/user');
const userdata = require('../model/UserModel');


loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})



loginRouter.post("/check",function(req,res){//part #2 point #10
    var checkuser = {
        uid:req.body.uid,//part #2 point #10
        pwd:req.body.pwd//part #2 point #10
    };

    userdata.findOne(req.body.uid,req.body.pwd,{ new: true, useFindAndModify: false }, function (err, user) {//part#2 point #9

        if(checkuser.uid==user.uid && checkuser.pwd==user.pwd) {
            res.redirect("/home")
        }
        else {
            res.redirect("/signup")
        }

    })  
   
    console.log(checkuser);
   
});




module.exports = loginRouter;