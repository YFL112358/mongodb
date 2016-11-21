var express = require('express');
var mongoose = require('mongoose');
var app = express();
var v1ApiRouter = express.Router();
app.set('view engine','pug')
app.set('views', './views');
v1ApiRouter.get('/', function (req, res) {
var page = req.query.page
var nperpage = req.query.nperpage
res.render('index', { page: page, nperpage: nperpage,name:name,description:description })
})

app.use('/v1',v1ApiRouter);

app.listen(3000,function(){

console.log('port 3000')
})

