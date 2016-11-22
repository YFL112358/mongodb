//加载mongodb驱动
var mongodb = require('mongodb');
//建立连接
var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db('mypractice',server,{safe:true});
var express = require('express');
var app = express();

var v1ApiRouter = express.Router();
app.set('view engine','pug')
app.set('views', './views');
v1ApiRouter.get('/', function (req, res) {
		//进行数据库操作
		db.open(function(err, db){
				if(!err){
				console.log('connect db');
				// 连接Collection（可以认为是mysql的table）
				db.collection('item',{safe:true}, function(err, collection){
						if(err){
						console.log(err);
						}else{
						var page = Number(req.query.page);
						var nperpage = Number(req.query.nperpage);

						console.log(page);
						//分页功能，nperpage 是一页里面的记录数
						//page 是第几页
						//skip()跳了几条记录，limit(一页的记录数)		  
						collection.find()
						.skip((page-1)*nperpage) 
						.limit(nperpage).toArray(function(err,results){
								console.log(results);

								});

						res.render('index', { page: page, nperpage: nperpage })

						db.close();
						}
				});
			}

		});
})

app.use('/v1',v1ApiRouter);

app.listen(3000,function(){

		console.log('port 3000')
})

