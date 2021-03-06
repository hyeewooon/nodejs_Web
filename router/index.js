var express = require('express')
var app = express()
var router = express.Router();
// 상대경로
var path = require('path')
// routers
var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/index')

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "../public/main.html"))
}) 

router.use('/main', main);
router.use('/email', email);
router.use('/join', join)

module.exports = router;