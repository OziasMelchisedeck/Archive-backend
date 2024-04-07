const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // console.log(token);
          const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
          const userId = decodedToken.userId;
          res.locals.userId = userId; // Ajouter l'ID utilisateur à l'objet res.locals pour le rendre accessible aux routes suivantes
          next();
      } catch (error) {
        res.status(401).json({ error: 'Authentification requise' });
      }
};