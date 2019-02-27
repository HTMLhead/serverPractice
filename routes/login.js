var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.json({ title: '로그인됐다네~', name:'head' }); 
});

module.exports = router;
