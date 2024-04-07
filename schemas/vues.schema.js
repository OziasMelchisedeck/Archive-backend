const mongoose = require("mongoose");

const vueSchema = mongoose.Schema({
    User : {type:String, required:true},
    Fichier : {type :String, required:true},
    Date :{type : Date, required :true}
})

module.exports = mongoose.model("Vue", vueSchema);