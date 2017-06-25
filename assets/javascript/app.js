//question and answer variables
var questions = {
	q1 : {
		question : 'Which of the following is an alien race bent on enslaving humankind?',
		correct : 'Goa\'uld',
	},
	q2 : {
		question : 'What is the name of the shield used to block the Stargate?',
		correct : 'Iris',
	},
	q3 : {
		question : 'How many members are on the SG-1 recon team to other worlds?',
		correct: '4',
	},
	q4 : {
		question : 'What state is the Stargate located in?',
		correct : 'California',
	},
	q5 : {
		question : 'Who is the doctor on the team?',
		correct : 'Dr. Jackson',
	},
}

var choices = {
	a1 : ['Hollows', questions.q1.correct, 'Death Eaters', 'Androids'],
	a2 : [questions.q2.correct, 'Anubis', 'Osiris', 'Block'],
	a3 : ['3', questions.q3.correct, '5', '6'],
	a4 : [questions.q4.correct, 'New Mexico', 'Colorado', 'Arizona'],
	a5 : ['Dr. Carter', 'Dr. Osbourne', 'Dr. O\'Neill', questions.q4.correct],
}

var correctCount;
var incorrectCount;
var outOfTimeCount;

var choice2;
var choice3;
var choice4;

//function declarations
function startUp() {
	correctCount = 0;
	incorrectCount = 0;
	outOfTimeCount = 0;
	console.log('correctCount', correctCount);
	console.log('incorrectCount', incorrectCount);
	
	$(document).ready(function(){
		$('#start').one("click", function(){
			questionGenerator();
		});
	});
}

function questionGenerator() {

	var delay = 1000 * 5;//change to allow for more time!
	var userChoice;
	var i = 0;

	displayLoop();

	function displayLoop() {
		if (i < Object.keys(questions).length) {
			setTimeout(iterator, delay);

        	function iterator() {
        		i++;
            	console.log(i);
            	displayLoop();
        	}

			console.log('counter');
			$('h2').text(Object.values(questions)[i].question);
			$('#start').html('<h3 data-name="choice-a">' + Object.values(choices)[i][0]);
			$('#start').append('<h3 data-name="choice-b">' + Object.values(choices)[i][1]);
			$('#start').append('<h3 data-name="choice-c">' + Object.values(choices)[i][2]);
			$('#start').append('<h3 data-name="choice-d">' + Object.values(choices)[i][3]);

			$(document).on('click', 'h3', function() {
				clearTimeout(setTimeout(iterator, delay));
				userChoice = $(this).text();
				console.log('userChoice', userChoice);

				if (userChoice === Object.values(questions)[i].correct) {
					correctCount++;
					console.log('correctCount', correctCount);
					//i++;
					//displayLoop();
				}

				else if (userChoice != Object.values(questions)[i].correct && userChoice != 'START GAME') {
					incorrectCount++;
					console.log('incorrectCount', incorrectCount);
					//i++;
					//displayLoop();
				}
			});
		}

		else if (i === Object.keys(questions).length) {
			$('h2').text('Game Summary');
			$('#start').html('<h3 id="correct-count">Correct Answer Total: ' + correctCount);
			$('#start').append('<h3 id="incorrect-count">Incorrect Answer Total: ' + incorrectCount);
			$('#start').append('<h3 id="correct-count">Unsanswered Total: ' + outOfTimeCount);
			clearTimeout(iterator);
			///TURN OFF CLICKS HERE?!
		}
    }
}

//FUNCTION CALLS
startUp();

//console.log('keys', Object.keys(questionAnswerBank));
//console.log('key1', Object.keys(questionAnswerBank)[6]);



//MAKE BELOW OCCUR AT END OF QUESTIONS' PAGE
//$('button#start').text('<button type="button" class="btn btn-default" id="reset">RESTART</button>');
