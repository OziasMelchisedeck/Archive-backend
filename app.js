const express = require('express');
const mongoose  = require('mongoose');
const livreData = require("../backend/livres.json");
const Fichier = require("../backend/schemas/livres.schema");
const router = require("../backend/routes/livres.router");
const userRouter = require("../backend/routes/user.router");

const app = express();
app.use(express.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  //connexion a la base de données en locale
const dbURI = 'mongodb://127.0.0.1:27017/Archivex?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

mongoose
  .connect(dbURI, {
  })
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
    // Fichier.insertMany(livreData).then(() => {
    //       console.log('Données insérées avec succès');
    //     })
    //     .catch((error) => {
    //       console.error('Erreur lors de l\'insertion des données', error);
    //       mongoose.connection.close();
    //     });
        //  Fichier.deleteMany().then().catch()
    })
  .catch((error) => console.log(error));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/livres", router);
app.get("/livres/:id", router);
app.put("/livres/:id", router);

app.use("/livres/auth", userRouter);
// app.post("/livres/login", userRouter);

module.exports = app;