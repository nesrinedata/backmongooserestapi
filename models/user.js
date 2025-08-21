const mongoose=require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema({
 name: String,
 lastName: String,
 age: Number,
 email:{type:String, unique:true},
 isAdmin: {type:Boolean, default:false},
 img:String,
 
});
const User = mongoose.model('User', userSchema);
module.exports = User