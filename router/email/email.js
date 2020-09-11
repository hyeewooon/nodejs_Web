var express = require('express')
var app = express()
var router = express.Router();
// 상대경로
var path = require('path')
var mysql = require('../../secret');

// 제출을 눌렀을 때.
router.post('/form', function(req,res){
	console.log(req.body.email)
	// res.send("post response")
	// res.send("<h1>welcome ! " + req.body.email + "</h1>" )
	res.render('email.ejs', {'email' : req.body.email})
})

// ajax 통신을 해서 데이터베이스에서 불러올때.
router.post('/ajax', function(req, res){
	
	var email = req.body.email;
	//초기화
	var responseData = {};

	// mysql.query('SELECT * from user', (error, rows) => {
	// 	if (error) throw error;
	// 	console.log('User info is: ', rows);
	// });

	var query = mysql.query('select name from user where email = "' + email + '"', function(err, rows){
		if(err) throw err;
		if(rows[0]) {
			responseData.result = "ok";
			responseData.name = rows[0].name;
		}else{
			responseData.result = "none";
			responseData.name= "";
		}
		/////비동기로 실행되기 때문에 꼭꼭!! 이 블록 안에서 줘야 한다.!!!!!
		res.json(responseData)
	})
	
});

module.exports = router;