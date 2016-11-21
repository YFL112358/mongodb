var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.set('view engine','pug')
app.set('views', './views');
app.get('/v1', function (req, res) {
	var page = req.query.page
	var nperpage = req.query.nperpage
 res.render('index', { page: page, nperpage: nperpage,name:'#{user.name}',description:'#{user.description' })
})
app.listen(3000,function(){

console.log('port 3000')
})

