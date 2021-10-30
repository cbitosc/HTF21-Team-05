
const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('images'));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/mainpage/index-main.html");
});

app.get("/studentSignin", function(req, res){
    res.sendFile(__dirname + "/mainpage/studentSignin.html");
});

app.post("/studentSignin.html", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
});

app.get("/studentHome.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/studentHome.html");
});

app.get("/clubSignin.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/clubSignin.html");
});

app.post("/clubSignin.html", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
});


app.get("/clubSignin.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/clubSignin.html");
});

app.get("/clubHome.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/clubHome.html");
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});