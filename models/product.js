const mongoose=require("mongoose");
const schema = mongoose.Schema;


const productSchema = new schema({
 name: String,
 price: Number,
 qte: Number,
 img: String,
 images:Array
 
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product