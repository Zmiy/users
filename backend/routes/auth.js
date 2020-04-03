var express = require('express');
var router = express.Router();
const { login, forgotPassword } = require('../controllers/authController');


router.get('/token/:id', function(req, res, next) {
  console.log((req.params));
  res.send({
    "val": req.params.id + "_" + Math.random()
  });
});

router.post('/login', (req, res) => login(req, res));

router.post('/forgot_password/:id', (req, res) => forgotPassword(req, res));
  
module.exports = router;
