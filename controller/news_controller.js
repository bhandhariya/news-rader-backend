const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('749960049f5e4137917c84e0a74b7045');
var News=require('../model/news_model');

exports.getNews=function(req,res,next){
    console.log(req.body);
  
  if(req.body.query){
      console.log('query came')
    newsapi.v2.topHeadlines({
        sources: req.body.sources.toString(),
        q: req.body.query,
        language: 'en',
      }).then(response => {

if(response){
    var news=new News({
        query:req.body.query,
        article:response.articles
    });
    news.save(function(err,result){
        if(result && !err){
            res.send(response)
        }
    })

}
        // return res.send(response);
      }).catch(err=>{
        return res.send(err)
      });
  }else{
    newsapi.v2.topHeadlines({
        sources: req.body.sources.toString(),
        q: req.body.query,
        language: 'en',
      }).then(response => {

        return res.send(response);
      }).catch(err=>{
        return res.send(err)
      });
  }
    
  
  
  
  }