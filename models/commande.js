const mongoose=require("mongoose");
const schema = mongoose.Schema;


const commandeSchema = new schema({
 nameuser: String,
 productname: String,
 qte: Number,
price: Number,
 date:String
});
const Commande = mongoose.model('Commande', commandeSchema);
module.exports = Commande;