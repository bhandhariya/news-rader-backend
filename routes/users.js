var express = require('express');
var router = express.Router();
var NewsController=require('../controller/news_controller');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/getnews',NewsController.getNews)

module.exports = router;
