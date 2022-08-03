const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/Library', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    fname: String,
    lname: String,
    uid: String,
    pwd: String
  
});

const userdata = mongoose.model('userdatas',UserSchema);

module.exports = userdata;