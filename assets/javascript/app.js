//question and answer variables
var questionAnswerBank;
var arrWrongAnswers;
var arrRandomizedChoices;

var correctCount;
var incorrectCount;
var outOfTimeCount;

var possibleChoices;

var choice2;
var choice3;
var choice4;

var userChoice;

//var falseIndex = Math.floor(Math.random() * 3); //change 3 if arrWrongAnswers length changes

//var buttonDiv = '<div class="btn-group" role="group" aria-label="..."></div>'


//function declarations
function startUp() {
	//list of questions;
	questionAnswerBank = {
		'Which of the following is an alien race bent on enslaving humankind?' : 
			['Hollows', 'Goa\'uld', 'Death Eaters', 'Androids'],
		'What is the name of the shield used to block the Stargate?' : 
			['Iris', 'Anubis', 'Osiris', 'Block'],
		'How many members are typically in a recon team to other worlds?' : 
			['3', '4', '5', '6'],
		'What state is the Stargate located in?' : 
			['California', 'New Mexico', 'Colorado', 'Arizona'],
		'Who is the doctor on the team?' : 
			['Dr. Carter', 'Dr. Jackson', 'Dr. O\'Neill', 'Dr. Osborne'],
		// 'What is 6?' : 'a6',
		// 'What is 7?' : 'a7',
		// 'What is 8?' : 'a8',
		// 'What is 9?' : 'a9',
		// 'What is 10?' : 'a10',
	}

	correctCount = 0;
	incorrectCount = 0;
	outOfTimeCount = 0;
}

function questionGenerator() {
	var i = 0;
	var iterator;
	console.log('i - initialized',i);

	while (i < 5) {
		console.log('i - in while',i);
		choice2 = Object.values(questionAnswerBank)[i][1];
		choice3 = Object.values(questionAnswerBank)[i][2];
		choice4 = Object.values(questionAnswerBank)[i][3];

		possibleChoices = {
			possibility2 : '<h3>' + choice2 + '</h3>',
			possibility3 : '<h3>' + choice3 + '</h3>',
			possibility4 : '<h3>' + choice4 + '</h3>',
		}

		console.log('i - before jQuery', i);
		$('h2').html(Object.keys(questionAnswerBank)[i]);
		$('div#start').html('<h3>' + Object.values(questionAnswerBank)[i][0] + '</h3>');
		$(possibleChoices.possibility2).appendTo('div#start');
		$(possibleChoices.possibility3).appendTo('div#start');
		$(possibleChoices.possibility4).appendTo('div#start');

		console.log('i - after jQuery', i);
		
		// if (i = 0 && userChoice === "Goal") {
		// 	correctCount++;
		// }

		// else if (i = 1 && userChoice === "--") {
		// 	correctCount++;
		// }

		// else if (i = 2 && userChoice === "--") {
		// 	correctCount++;
		// }

		// else if (i = 3 && userChoice === "--") {
		// 	correctCount++;
		// }

		// else if (i = 4 && userChoice === "--") {
		// 	correctCount++
		// }

		// //add else if for time running out here;

		// else {
		// 	incorrectCount++;
		// }

		console.log('i - after functions', i);
		console.log("counter");
		//makes the iteration wait to move on.
		
		i++;
		//function iterator() {
		//	i++;
		//};

		// setTimeout(iterator, 5000);
		// clearTimeout(iterator);

		console.log('i - at end', i);
	}	
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
