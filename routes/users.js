var express = require('express');
var router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('749960049f5e4137917c84e0a74b7045');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/getnews',function(req,res,next){
  console.log(req.body);
//  var aa=req.body.sources.toString();
//  aa= "'"+aa+"'";
//  console.log(aa)
//  var newaa=aa;


  newsapi.v2.topHeadlines({
    sources: req.body.sources.toString(),
    q: req.body.query,
    // category: 'business',
    language: 'en',
    // country: 'us'
  }).then(response => {
    res.send(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  }).catch(err=>{
    return res.send(err)
  });



})

module.exports = router;
