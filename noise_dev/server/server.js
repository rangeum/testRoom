const express = require('express');
const path = require('path');
const os = require("os");
const api = require('./api');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use('/api',api)
// if you need api routes add them here
app.get('/',function(req,res) {
  res.send('?');
})

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
