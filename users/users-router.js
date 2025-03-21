const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, checkRole(["student", "admin"]), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function checkRole(role){
  return function(req,res,next){
    if (role.includes(req.decodedJwt.role)){
      next();
    } else {
      res.status(403).json({message: `Invalid role, forbidden`});
    }
  };
};

module.exports = router;
