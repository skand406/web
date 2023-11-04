var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); //데이터 전송 send
});
// 로그인 페이지로 이동하는 라우터
router.get('/login',function(req,res){
  res.render('index',{title:'로그인',pageName:'users/login.ejs'}); //페이지 렌더 render
})
//회원가입 페이지로 이동하는 라우터
router.get('/join',function(req,res){
  res.render('index',{title:'회원가입',pageName:'users/join.ejs'}); //페이지 렌더 render
})
//마이페이지로 이동하는 라우터
router.get('/mypage',function(req,res){
  res.render('index',{title:'마이페이지',pageName:'users/mypage.ejs'}); //페이지 렌더 render
})
module.exports = router;
