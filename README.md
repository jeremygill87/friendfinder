# Friend FInder - Node and Express Servers

### Compatibility Friend App 

* This app will accept results from a survey that all users will take.  These results will then be compared with the results of all other users.  The app will find whichever user has the closest overall friend score and display their information for you to do whatever creepy perverted nonsense you desire.

* Survey has 10 questions, but can be equipped with more.

### Tech

* Uses Express to handle routing and api calls

* server.js uses npm packages: express and path.

* Friend Compatibility is simple.  Each question has been ID'd as q1, q2, q3, etc.  User's answers for each are then compared with answers from other users.  The difference between answers will be stored, then added on to a totalDiff variable.  When all users have been calculated, the app will display whichever user has the lowest totalDiff score, in relation to you.

* This isn't scientific in the least bit.  Love is a human construct, devoid of reality or logic.