const mongoose =require('mongoose');

const fichierSchema = mongoose.Schema({
    Title :{type:String, required:true},
    Creator :{type:String, required:true},
    Date :{type:Date, required:true},
    Extrait :{type :String},
    Autres :{type:[String], required:true},
    Vues : {type:Number, required:true}
});

module.exports = mongoose.model("Fichier", fichierSchema);