var friends = require("../data/friends.js");

app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("/api/friends", function(req, res){
    var totalDiff = 0;
    var topMatch = {
        name: "",
        photo: "",
        friendDifference: 500
    };

    var userData = req.body;
    var userName = userData.name;
})