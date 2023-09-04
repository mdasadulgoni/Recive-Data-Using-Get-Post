// console.log("ok");

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(300).json({'msg':'hi'})
})
app.get('/user', function (req, res) {
  console.log(req.query.name);
  console.log(req.query.sername);
  res.status(300).json({
    'fname':'asad',
    "lname":"goni",
    'data' : req.query
  })
})

app.listen(3000)