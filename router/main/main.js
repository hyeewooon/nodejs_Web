var express = require('express')
var app = express()
var router = express.Router();
// 상대경로
var path = require('path')

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../public/main.html'))
});

module.exports = router; 