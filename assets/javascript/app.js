//question and answer variables
var questionAnswerBank;
var arrWrongAnswers;
var arrRandomizedChoices;

var correctCount;
var incorrectCount;

var answerChoice

var falseIndex = Math.floor(Math.random() * 3); //change 3 if arrWrongAnswers length changes

var buttonDiv = '<div class="btn-group" role="group" aria-label="..."></div>'


//function declarations
function startUp() {
	//list of questions;
	questionAnswerBank = {
		'What is 1?' : 'a1',
		'What is 2?' : 'a2',
		'What is 3?' : 'a3',
		'What is 4?' : 'a4',
		'What is 5?' : 'a5',
		'What is 6?' : 'a6',
		'What is 7?' : 'a7',
		'What is 8?' : 'a8',
		'What is 9?' : 'a9',
		'What is 10?' : 'a10',
	}
	
	arrWrongAnswers = {
		false1 : ['false 1.1', 'false 1.2', 'false 1.3'],
		false2 : ['false 2.1', 'false 2.2', 'false 2.3'],
		false3 : ['false 3.1', 'false 3.2', 'false 3.3'],
		false4 : ['false 4.1', 'false 4.2', 'false 4.3'],
		false5 : ['false 5.1', 'false 5.2', 'false 5.3'],
		false6 : ['false 6.1', 'false 6.2', 'false 6.3'],
		false7 : ['false 7.1', 'false 7.2', 'false 7.3'],
		false8 : ['false 8.1', 'false 8.2', 'false 8.3'],
		false9 : ['false 9.1', 'false 9.2', 'false 9.3'],
		false10 : ['false 10.1', 'false 10.2', 'false 10.3'],
	}

	answerChoice = '<div class="col-md-12 text-center display-text" id="start">' + 'tester' + '</div>';

	correctCount = 0;
	incorrectCount = 0;

}

function questionGenerator() {
	$('div#start').html(answerChoice); //puts in the answerchoice here
	

	//might rework below so buttons are vertically stacked
	for (var i = 0; i < 3; i++) { //iterates through falses and creates div for buttons
		$(answerChoice).appendTo('div#question-options');
		console.log('testing this working')
	}
	
}

$('#start h3').click(function() {
	questionGenerator();
});

//FUNCTION CALLS
startUp();
//questionGenerator();

//console.log('keys', Object.keys(questionAnswerBank));
//console.log('key1', Object.keys(questionAnswerBank)[6]);



//MAKE BELOW OCCUR AT END OF QUESTIONS' PAGE
//$('button#start').text('<button type="button" class="btn btn-default" id="reset">RESTART</button>');
