var express = require('express');
var api = express.Router();
var mysql = require('mysql');

var db = mysql.createPool({
  host: '192.168.0.70',
  port: 3306,
  user: 'test',
  password: '123456',
  database: 'test'
});

api.use('/',function timelog(req,res,next) {
  // console.log('Time : '+Date.now());
  next();
})
//
// api.get('/',function(req,res) {
//   res.send('api first route.');
// })

api.get("/getUsername", function(req, res, next){
  console.log(req.get('user-agent'));
  res.send({ username: req.get('user-agent') });
});
api.get("/getData",function(req,res) {
  db.query(`select * from noise`,(err,rows) => {
    if(!err) {
      res.send(rows);
    }
    else {
      console.log("query error : "+err);
      res.send(err);
    }
  });
})
module.exports = api;
