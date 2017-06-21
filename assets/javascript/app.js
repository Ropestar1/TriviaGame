//question and answer variables
var arrQandA;
var arrWrongAnswers;
var arrRandomizedChoices;

var correctCount;
var incorrectCount;

var wrongAnswer1;
var wrongAnswer2;
var wrongAnswer3;

var falseIndex = Math.floor(Math.random() * 3); //change 3 if arrWrongAnswers length changes


function startUp() {
	//list of questions;
	arrQandA = [
		['question 1', 'answer 1'],
		['question 2', 'answer 2'],
		['question 3', 'answer 3'],
		['question 4', 'answer 4'],
		['question 5', 'answer 5'],
		['question 6', 'answer 6'],
		['question 7', 'answer 7'],
		['question 8', 'answer 8'],
		['question 9', 'answer 9'],
		['question 10', 'answer 10'],
	]

	arrWrongAnswers = [
		['false 1.1', 'false 1.2', 'false 1.3'], //for question question 1
		['false 2.1', 'false 2.2', 'false 2.3'], //for question question 2
		['false 3.1', 'false 3.2', 'false 3.3'], //for question question 3
		['false 4.1', 'false 4.2', 'false 4.3'], //for question question 4
		['false 5.1', 'false 5.2', 'false 5.3'], //for question question 5
		['false 6.1', 'false 6.2', 'false 6.3'], //for question question 6
		['false 7.1', 'false 7.2', 'false 7.3'], //for question question 7
		['false 8.1', 'false 8.2', 'false 8.3'], //for question question 8
		['false 9.1', 'false 9.2', 'false 9.3'], //for question question 9
		['false 10.1', 'false 10.2', 'false 10.3'], //for question question 10

	]

	wrongAnswer1 = '<button type="button" class="btn btn-default" id="answer1">'+ arrWrongAnswers[falseIndex]+'</button>';
	wrongAnswer2 = '<button type="button" class="btn btn-default" id="answer1">'+ arrWrongAnswers[falseIndex]+'</button>';
	wrongAnswer3 = '<button type="button" class="btn btn-default" id="answer1">'+ arrWrongAnswers[falseIndex]+'</button>';


	correctCount = 0;
	incorrectCount = 0;
}

function qGenerator() {
	
}

$('button#start').click(function() {
	$('div button#start').html('<button type="button" class="btn btn-default" id="answer1">'+ +'</button>');
	$('div button#start').html('<button type="button" class="btn btn-default" id="answer2">'+ +'</button>');
	$('div button#start').html('<button type="button" class="btn btn-default" id="answer3">'+ +'</button>');
	$('div button#start').html('<button type="button" class="btn btn-default" id="answer4">'+ +'</button>');
	});


//console.log('arrQandA-blank', arrQandA);
//console.log('correctCount-blank', correctCount);
startUp();
//console.log('arrQandA-initial-set', arrQandA);
//console.log('correctCount-blank', correctCount);



//MAKE BELOW OCCUR AT END OF QUESTIONS' PAGE
//$('button#start').text('<button type="button" class="btn btn-default" id="reset">RESTART</button>');
