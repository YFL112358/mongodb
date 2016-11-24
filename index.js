var express = require('express');
var mongodb = require('mongodb');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var db;

var v1ApiRouter = express.Router();
v1ApiRouter.get('/', function (req, res) {
//进行数据库操作
	var page = Number(req.query.page);//page 是第几页
  var nperpage = Number(req.query.nperpage);//分页功能，nperpage 是一页里面的记录数
  console.log("page : " + page);
  var collection = db.collection('item');
  collection.find()
  .skip((page - 1) * nperpage)//skip()跳了几条记录，limit(一页的记录数) 
  .limit(nperpage)
  .toArray()
  .then(function(results) {
    console.log(results);
    res.send({results:results})
  })  
  .catch (function(err){
    console.log(err);
  })
  console.log("before results") 
});
app.use('/v1',v1ApiRouter);

MongoClient.connect("mongodb://localhost:27017/mypractice")
.then (function(database){
  db = database;
  app.listen(3000,function(){
    console.log('port 3000')
  })
})
.catch (function(err){
  console.log(err);
})
