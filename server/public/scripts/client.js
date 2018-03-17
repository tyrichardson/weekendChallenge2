console.log('js is loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery is ready; entered readyNow function');
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
    console.log('GET sent; entered appendToDom function in client.js');
    $('#outputCurrentToDom').empty();
    $('#outputToDom').empty();
 for (let problem of mathProblems){
        console.log('at appendToDom for_loop problem of mathProblems, show problem:', problem );
        let tr = $('<tr></tr>');
        tr.append('<td>' + problem.valueOneName + '</td>');
        tr.append('<td>' + problem.operatorName + '</td>');
        tr.append('<td>' + problem.valueTwoName + '</td>');
        tr.append('<td>' + "=" + '</td>');
        tr.append('<td>' + problem.answer + '</td>');
        $('#outputCurrentToDom').empty();
        $('#outputCurrentToDom').append(tr);   
    }
    for (let problem2 of mathProblems) {
        console.log('at appendToDom for_loop problem of mathProblems, show problem:', problem2);
        let tr2 = $('<tr></tr>');
        tr2.append('<td>' + problem2.valueOneName + '</td>');
        tr2.append('<td>' + problem2.operatorName + '</td>');
        tr2.append('<td>' + problem2.valueTwoName + '</td>');
        tr2.append('<td>' + "=" + '</td>');
        tr2.append('<td>' + problem2.answer + '</td>');
        $('#outputToDom').append(tr2);
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
