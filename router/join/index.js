var express = require('express')
var app = express()
var router = express.Router();
// 상대경로
var path = require('path')
// var mysql = require('../../db.template');
var mysql = require('../../secret');


// 제출을 눌렀을 때.
//get - read
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "../../public/join.html"))
})

router.post('/', function(req,res){
    var body = req.body;

    var email = body.email;
    var name = body.name;
    var passwd = body.password;

    var sql = {email: email, name:name, pw:passwd};
    var query = mysql.query('insert into user set ?', sql, function(err, rows){
        if(err) {throw err;}
        //ejs파일 경로로 json 형태 데이터를 보내줌.
        else {res.render('welcome.ejs', {'name': name, 'id':rows.insertId})}
    })    
})

module.exports = router;
