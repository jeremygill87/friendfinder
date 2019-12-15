var friends = require("../data/friends.js");

module.exports = function(app){

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
    var userScores = userData.scores;

    var x = userScores.map(function(item){
        return parseInt(item, 10);
    });
    userData = {
        "name": req.body.name,
        "photo": req.body.photo,
        "scores": x
    };

    console.log("Name: " + userName);
    console.log("User Score: " + userScores);

    var scoreSum = x.reduce((a,b) => a + b, 0);
    console.log("Sum of user's score " + scoreSum);
    console.log("Best match friend difference " + topMatch.friendDifference);

    console.log("**********************************************");

    for (var i = 0; i < friends.length; i++){
        totalDiff = 0;
        console.log(friends[i].name);
        console.log("Best match friend difference " + topMatch.friendDifference);

        var beffieScore = friends[i].scores.reduce((a,b) => a + b, 0);
        console.log("Total friend score " + beffieScore);
        totalDiff += Math.abs(scoreSum - beffieScore);
        console.log(" ------------------------> " + totalDiff);

        if (totalDiff <= topMatch.friendDifference){
            topMatch.name = friends[i].name;
            topMatch.photo = friends[i].photo;
            topMatch.friendDifference = friends[i].friendDifference;
        }
        console.log("Total Difference: " + totalDiff);
    }
    console.log(topMatch);

    friends.push(userData);
    console.log("New User added");
    console.log(userData);
    res.json(topMatch);
})
};