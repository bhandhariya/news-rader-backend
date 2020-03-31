var express = require('express');
var router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('749960049f5e4137917c84e0a74b7045');

/* GET home page. */
router.get('/', function(req, res, next) {
// var sour=['business-insider']
//   newsapi.v2.sources({
//     sources: sour,
//     category: 'technology',
//   language: 'en',
//   country: 'us'
//   }).then(response=>{
//     console.log(response)
//   }).catch(err=>{
//     console.log(err)
//   })


});

module.exports = router;
