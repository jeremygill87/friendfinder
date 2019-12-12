var path = require("path");

//route to survey html
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

//Default send to home/index
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/../public/home.html"));
});