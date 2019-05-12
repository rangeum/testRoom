var express = require('express');
var api = express.Router();
var mysql = require('mysql');
// var bodyParser = require('body-parser');



var db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'test',
  password: '123456',
  database: 'test'
});

api.use('/',function timelog(req,res,next) {
  // console.log('Time : '+Date.now());
  next();
});
// api.use(bodyParser().json());
api.use(express.json());
//
// api.get('/',function(req,res) {
//   res.send('api first route.');
// })

api.get("/getUsername", function(req, res){
  console.log(req.get('user-agent'));
  res.send({ username: req.get('user-agent') });
});

//현재시각 또는 특정시간대 알아내는 api
api.get("/getTime",function(req,res) {
  var time = Date.now()
  //쿼리값이 포함되어있는 경우 현재시각 대신 쿼리값에 포함된 시간값을 넣음.
  if(req.query.raw)
    time = parseInt(req.query.raw);
  var time_ = new Date(time);
  time_ = time_.toString();
  var result = {
    "time": {
      "day":time_.split(' ')[0],
      "month":time_.split(' ')[1],
      "date":time_.split(' ')[2],
      "year":time_.split(' ')[3],
      "hour":time_.split(' ')[4].split(':')[0],
      "minute":time_.split(' ')[4].split(':')[1],
      "second":time_.split(' ')[4].split(':')[2],
    },
    "raw" : time
  }
  res.send(result);
})

//데이터 보여주기
api.get("/noiseData/:hid",function(req,res) {
  if(req.query.pulse) {
    db.query(`select * from test where hid=${req.params.hid} and pulse=${req.query.pulse}`,(err,rows) => {
      if(!err) {
        res.send(rows);
      }
      else {
        console.log("query error : "+err);
        res.send(err);
      }
    });
  }
  else {
    db.query(`select * from test where hid=${req.params.hid}`,(err,rows) => {
      if(!err) {
        res.send(rows);
      }
      else {
        console.log("query error : "+err);
        res.send(err);
      }
    });
  }
})


//데이터 받기
api.post("/noiseData",function(req,res) {
  if(req.body.level) {
    var body = req.body;
    db.query(`insert into test (hid,pulse,level,time) values ('${body.hid}','${body.pulse ? body.pulse:0}','${body.level}','${Date.now()}');`,(err,rows) => {
      if(!err) {
        res.send(200);
      }
      else {
        console.log(err);
        res.send(err);
      }
    })
  }
  else
    res.send('500');
})
module.exports = api;
