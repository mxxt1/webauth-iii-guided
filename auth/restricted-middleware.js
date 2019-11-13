// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  // const { username, password } = req.headers;
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';
  if (token) {
    //check that the token is valid
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err){
        res.status(401).json({error: err});
      } else {
        req.decodedJwt = decodedToken;
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
