var express = require('express');
app = express();

app.get('/', function(req, res){
    res.send('Hello World!\n')
});

app.listen (8080, function(){
    console.log('example listening on port 8080!')
});