
const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
const app = express();

app.use(express.static('images'));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/mainpage/index-main.html");
});

app.get("/studentSignin.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/studentSignin.html");
});

app.get("/studentSignin.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/studentSignin.html");
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});