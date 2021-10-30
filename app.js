const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')
const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('images'));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/mainpage/index-main.html");
});

app.get("/SigninOrUp.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/SigninOrUp.html");
});


app.get("/signin.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/signin.html");
    });

app.post("/signin.html", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);

    const connectToMongoDB = async () => {
        await mongo().then(async (mongoose) => {
    try{
        const result = await userSchema.findOne({
            username: username,
          })
        if(result.password == password){
            res.sendFile(__dirname + "/mainpage/studentHome.html");
        }
        else{
            res.sendFile(__dirname + "/mainpage/failure.html");
        }
     
    }
    finally {
        mongoose.connection.close()
      }
    })
  }
  
  connectToMongoDB()
});

app.get("/signup.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/signup.html");
    });

app.post("/signup.html", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    const connectToMongoDB = async () => {
        await mongo().then(async (mongoose) => {
          try {
            console.log('Connected to mongodb!')
      
             //Inserting values
             const user = {
              //email: 'test@email.com',
                username: username,
               password: password,
             }
      
             await new userSchema(user).save()
      
          } finally {
            mongoose.connection.close()
          }
        })
      }
      
      connectToMongoDB()
     res.sendFile(__dirname + "/mainpage/studentHome.html");
    });

app.get("/studentHome.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/studentHome.html");
});

// Club code starts here

app.get("/SigninOrUp-Club.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/SigninOrUp-Club.html");
});


app.get("/signin-Club.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/signin-Club.html");
    });

app.post("/signin-Club.html", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);

    const connectToMongoDB = async () => {
        await mongo().then(async (mongoose) => {
    try{
        const result = await userSchema.findOne({
            username: username,
          })
        if(result.password == password){
            res.sendFile(__dirname + "/mainpage/ClubHome.html");
        }
        else{
            res.sendFile(__dirname + "/mainpage/failure.html");
        }
     
    }
    finally {
        mongoose.connection.close()
      }
    })
  }
  
  connectToMongoDB()
});

app.get("/signup-Club.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/signup-Club.html");
    });

app.post("/signup-Club.html", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    const connectToMongoDB = async () => {
        await mongo().then(async (mongoose) => {
          try {
            console.log('Connected to mongodb!')
      
             //Inserting values
             const user = {
              //email: 'test@email.com',
                username: username,
               password: password,
             }
      
             await new userSchema(user).save()
      
          } finally {
            mongoose.connection.close()
          }
        })
      }
      
      connectToMongoDB()
     res.sendFile(__dirname + "/mainpage/ClubHome.html");
    });

app.get("/ClubHome.html", function(req, res){
    res.sendFile(__dirname + "/mainpage/ClubHome.html");
});






// Club code ends here




// app.get("/clubSignin.html", function(req, res){
//     res.sendFile(__dirname + "/mainpage/clubSignin.html");
// });

// app.post("/clubSignin.html", function(req, res){
//     var username = req.body.username;
//     var password = req.body.password;
//     console.log(username, password);
//     res.sendFile(__dirname + "/mainpage/clubHome.html");
// });


// // app.get("/clubSignin.html", function(req, res){
// //     res.sendFile(__dirname + "/mainpage/clubSignin.html");
// // });

// app.get("/clubHome.html", function(req, res){
//     res.sendFile(__dirname + "/mainpage/clubHome.html");
// });

app.listen(3000, function() {
    console.log('Server started on port 3000');
});