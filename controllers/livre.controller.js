const Fichier = require("../../backend/schemas/livres.schema");

exports.getAllLivres = (req, res, next)=>{
    Fichier.find()
    .then((livres)=>{
        livreCount = livres.lenght;
        res.status(200).json({count : livreCount, Livres : livres})})
    .catch(error => res.status(400).json({ error:error}))
}

exports.getOneLivre = (req, res, next) =>{
    Fichier.findOne({_id:req.params.id})
    .then((livre) =>{
        res.status(200).json(livre)})
    .catch(error => res.status(400).json({error}))
}

exports.updateLivre = (req, res, next) =>{
    Fichier.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(res.status(200).json({message : "objet modifié avec success"}))
    .catch(res.status(400).json({message :"erreur lors de la modification"}))
}