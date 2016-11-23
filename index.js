var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/mypractice", function(err, database) {
  if (err) throw err;
  db = database;
});

var v1ApiRouter = express.Router();
app.set('view engine','pug')
app.set('views', './views');
v1ApiRouter.get('/', function (req, res) {
	//进行数据库操作
	db.collection('item',{safe:true}, function(err, collection){
		if (err) {
			console.log(err);
		} else {
			var page = Number(req.query.page);//page 是第几页
			var nperpage = Number(req.query.nperpage);//分页功能，nperpage 是一页里面的记录数

			console.log("page : " + page);

			collection.find()
			.skip((page-1)*nperpage)//skip()跳了几条记录，limit(一页的记录数) 
			.limit(nperpage)
			.toArray(function(err,results){
					console.log(results);
					res.send({results:results })
			});
		}
	});
});

app.use('/v1',v1ApiRouter);

app.listen(3000,function(){
		console.log('port 3000')
})

