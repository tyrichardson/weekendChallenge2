console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('entered readyNow function');
    $('#addButton').on('click', submitProblem);
    $('#subtractButton').on('click', submitProblem);
    $('#multiplyButton').on('click', submitProblem);
    $('#divideButton').on('click', submitProblem);
    getProblemsArray();
}

function getProblemsArray(){
    $.ajax({
        type: 'GET',
        url: '/getProblems'
    }).done(function (response){
        appendToDom(response); //the response is the mathProblems array
    });
}

function appendToDom(mathProblems){
    console.log('entered appendToDom function in client.js');

}

function submitProblem(){
    console.log('entered submitProblem function in client.js');
}
