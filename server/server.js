//required modules and varibles
let express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
const mathProblems = [];

//configure bodyParser to be used by jQuery
app.use(bodyParser.urlencoded({extended:true}));

//static files to be served up
app.use(express.static('server/public'));

//GETS, POSTS, etc.
app.get('/getProblems', (req, res) => {
    res.send(mathProblems);
});







//spin up the server
app.listen(PORT, () => {
    console.log('app is running on port 5000');
});