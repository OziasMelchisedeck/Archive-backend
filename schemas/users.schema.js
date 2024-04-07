const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Nom :{type :String, required:true},
    Prenom :{type : String, required:true},
    Login :{type :String, required:true},
    Password :{type :String, required:true},
    Email :{type : String, required:true},
    Auteurs :{type :[String]},
    Genres : {type :[String]},
    Pays :{type :[String]},
    Continents :{type :[String]},
    Annees :{type :[String]}
});

module.exports = mongoose.model("User", userSchema);