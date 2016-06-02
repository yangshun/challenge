var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(3000, function(){
  console.log(`server started on ${port}`);
})

app.set('view engine', 'ejs');

//Routes

//home
app.get('/', function(req, res){
  res.render('index');
});
