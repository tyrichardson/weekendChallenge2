console.log('js');

$(document).ready(readyNow);

//let clickedText = '';

function readyNow() {
    console.log('entered readyNow function');
    $('#addButton').on('click', submitProblem);
    //$('#addButton').on('click', function () {
      //  console.log('clicked add button');
       // clickedText = this.textContent;
    //});
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
    $('outputToDom').empty();
    for (let problem of mathProblems){
        console.log('problem:', problem );
        let tr = $('<tr></tr>');
        tr.append('<td>' + problem.valueOneName + '</td>');
        tr.append('<td>' + problem.operatorName + '</td>');
        tr.append('<td>' + problem.valueTwoName + '</td>');
        tr.append('<td>' + "=" + '</td>');
        tr.append('<td>' + "answer" + '</td>');
        $('#outputToDom').append(tr);
    }

}

function submitProblem(){
    console.log('entered submitProblem function in client.js');
    let operator = this.textContent;
    let value1 = $('#value1').val();
    let value2 = $('#value2').val();
    let problemsObject = {valueOneName: value1, operatorName: operator, valueTwoName: value2};
    $.ajax({
        type: 'post',
        data: problemsObject,
        url: '/problemsObject'
    }).done(function(response){
        console.log('Successful response for post to server');
        getProblemsArray();
    }).fail(function(response){
        alert('Something went horribly wrong.');
    })
}
