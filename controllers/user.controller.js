const User = require("../schemas/users.schema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next)=>{
    User.findOne({ Email: req.body.Email }).then((user) =>{
        if(user){
            return res.status(200).json({message : "email existante"})
        }
     bcrypt.hash(req.body.Password, 10)
    .then(hash => {
      const user = new User({
        ...req.body,
        Password: hash
      });
      user.save()
      .then((user) => res.status(201).json({ user}))
        .catch(error =>
            {
                console.log(error)
                 res.status(400).json({ error })});
    })
    .catch(error => res.status(500).json({ error }));
    })
};

exports.login = (req, res, next) => {
    User.findOne({ Email: req.body.Email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.Password, user.Password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        user: user,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };

 exports.logout = (req, res, next) =>{
   try{const token = req.headers.authorization;
    // console.log(token);
    res.status(200).json({message:"Déconnexion réussie"});
}
    catch(error){
        res.status(400).json({error});
    }
 }