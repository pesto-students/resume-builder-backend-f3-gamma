var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user/:username', function(req, res, next) {
  const getUserName = function(res) {
    return res.params.username;
  }
  res.render('index', { title: getUserName(res) });
});

module.exports = router;
