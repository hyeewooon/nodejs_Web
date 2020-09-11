var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var template = require('./db.template');

var router = require('./router/index')

// 서버띄우기
app.listen(3000, function() {
	console.log("start! express server on port 3000");
});

// 사용할 모듈(미들웨어) 정의
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(router);
 