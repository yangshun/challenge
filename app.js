var express = require('express');
var app = express();
var request = require('request');

//set our port
var port = process.env.PORT || 3000;

app.listen(3000, function(){
  console.log(`server started on ${port}`);
})
app.use(express.static('./js'))
app.set('view engine', 'ejs');

//home
app.get('/', function(req, res){
  res.render('index', {
    title: "Hotels in Singapore"
  });
});


app.get('/api', function(req,res,done) {
  request.get("https://api.myjson.com/bins/1c80k", function (err, response, body) {
    if (err) throw err
    res.json(JSON.parse(body))
  })
})

app.get('/api1', function(req,res,done) {
  request.get("https://api.myjson.com/bins/2tlb8", function (err, response, body) {
    if (err) throw err
    res.json(JSON.parse(body))
  })
})

app.get('/api2', function(req,res,done) {
  request.get("https://api.myjson.com/bins/42lok", function (err, response, body) {
    if (err) throw err
    res.json(JSON.parse(body))
  })
})

app.get('/api3', function(req,res,done) {
  request.get("https://api.myjson.com/bins/15ktg", function (err, response, body) {
    if (err) throw err
    res.json(JSON.parse(body))
  })
})
