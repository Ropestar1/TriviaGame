//question and answer variables
var questionAnswerBank;
var arrWrongAnswers;
var arrRandomizedChoices;

var correctCount;
var incorrectCount;

var arrFalseChoice;

var falseIndex = Math.floor(Math.random() * 3); //change 3 if arrWrongAnswers length changes

var buttonDiv = '<div class="btn-group" role="group" aria-label="..."></div>'


//function declarations
function startUp() {
	//list of questions;
	questionAnswerBank = {
		'Which of the following are an alien race bent on enslaving humankind?' : 
			['Hollows', 'Goa\'uld', 'Death Eaters', 'Androids'],
		'What is the name of the shield used to block the Stargate?' : 
			['Iris', 'Anubis', 'Osiris', 'Block'],
		'How many members are typically in a recon team to other worlds?' : 
			['3', '4', '5', '6'],
		'What state is the Stargate located in?' : 
			['a4',],
		'What is 5?' : 'a5',
		// 'What is 6?' : 'a6',
		// 'What is 7?' : 'a7',
		// 'What is 8?' : 'a8',
		// 'What is 9?' : 'a9',
		// 'What is 10?' : 'a10',
	}

	falseChoice = {
		f1 : '<div class="col-md-12 text-center display-text" id="start">' + 'tester' + '</div>',
		f2 : '<div class="col-md-12 text-center display-text" id="start">' + 'tester2' + '</div>',
		f3 : '<div class="col-md-12 text-center display-text" id="start">' + 'tester3' + '</div>',
	}

	correctCount = 0;
	incorrectCount = 0;

}

function questionGenerator() {
	//for (var i = 0; i < Object.keys(questionAnswerBank).length; i++) {
		$('h2').html(Object.keys(questionAnswerBank)[0]);//change to i
		//console.log('count 1');

		$('div#start').html(falseChoice); //puts in the arrFalseChoice here
		//might rework below so buttons are vertically stacked
		for (var j = 0; j < 3; j++) { //iterates through falses and creates div for buttons
			$(falseChoice.f1).appendTo('div#question-options');
			//console.log('testing this working')
		}		
	//}
}

$('#start h3').click(function() {
	questionGenerator();
});

//FUNCTION CALLS
startUp();

//console.log('keys', Object.keys(questionAnswerBank));
//console.log('key1', Object.keys(questionAnswerBank)[6]);



//MAKE BELOW OCCUR AT END OF QUESTIONS' PAGE
//$('button#start').text('<button type="button" class="btn btn-default" id="reset">RESTART</button>');
