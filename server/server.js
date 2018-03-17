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

app.post('/problemsObject',(req, res) => {
    console.log('req.body:', req.body);
    let problemToAdd = req.body;
    mathProblems.push(problemToAdd);
    console.log('mathProblems array:', mathProblems);
    res.sendStatus(200);
    calculate();
});

function calculate(){
    console.log('calculate function entered');
    let answerToArray = 0;
    for (problem of mathProblems) {
        if (problem.operatorName === 'Addition') {
        problem.answer = parseFloat(problem.valueOneName) + parseFloat(problem.valueTwoName);
        console.log('mathProblems array after the for loop:', mathProblems);
        }
    }
}



//spin up the server
app.listen(PORT, () => {
    console.log('app is running on port 5000');
});