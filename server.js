//require the just installed express app
var express = require('express');
//then we call express
var app = express();
//takes us to the root(/) URL
app.get('/', function(req, res) {
    //when we visit the root URL express will respond with 'Hello World'
    res.send('Hello World!');
});
//the server is listening on port 3000 for connections
var PORT = 3000 || process.env.PORT;
app.listen(PORT, function() {
    console.log('Todo app listening on port 3000!')
});