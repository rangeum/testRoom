const express = require('express');
const path = require('path');
const os = require("os");
const api = require('./api');
const app = express();
const PORT = process.env.PORT || 4000;
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));
app.use('/api',api)
// if you need api routes add them here
app.get('/',function(req,res) {
  res.render("index",{
    test:0
  });
})

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});


app.get('/show',function(req,res) {
  var time = parseInt(_getTime().time.date);
  var time_range = _getWeek();
  //   timeR: [
  //   time.time.date-5,
  //   time.time.date-4,
  //   time.time.date-3,
  //   time.time.date-2,
  //   time.time.date-1,
  //   time.time.date
  // ]
  // }
  console.log(time_range);
  res.render("test",time_range);
})


function _getTime() {
  var time_ = new Date();
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
    "raw" : time_
  }
  return result;
}
function _getWeek() {
  var now = parseInt(Date.now());
  var day = 86400000;
  var week_range = {
    week:[
      now-day*6,
      now-day*5,
      now-day*4,
      now-day*3,
      now-day*2,
      now-day*1,
      now,
    ]
  }
  return week_range;
}
