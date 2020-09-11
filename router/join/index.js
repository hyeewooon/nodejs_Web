var express = require('express')
var app = express()
var router = express.Router();
// 상대경로
var path = require('path')
var mysql = require('../../secret');


// 제출을 눌렀을 때.
//get - read
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "../../public/join.html"))
})

module.exports = router;