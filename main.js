//This function evaluates user input and checks to see if the answers are written/picked correctly.
//After selections the program will display the results and an image.

function check_answers(){
	var correct = 0;
	let questions = document.getElementsByClassName('questionInput');
	let radioQuestions = document.getElementsByClassName('questionRadio');

//Array with all the correct answers choices for the fill in the blank questions
	let answers = [["luka doncic","luka","doncic","george kittle","george","kittle","bryce harper","harper","bryce"]
	,["kyrie irving","kyrie","irving","nick chubb","nick","chubb","gerrit cole","gerrit","cole"],
	["brian scalabrine","brian","scalabrine","clay matthews","clay","matthews","francisco lindor","lindor","francisco"]]

//Array with all the correct answers for the multiple choice questions
	let radioAnswers = [["dean wade","fletcher cox","ken griffey jr."],
	["alexey shved","jedrick wills jr.","clint frazier"]];

//For loops to see if the selected answer is correct and incremenets score by 1
	for (let i = 0; i < questions.length; i++){
		let find = answers[i].find(x => x === questions[i].value.toLowerCase());
		if(find){
			correct++;
		}
	}
	for (let i = 0; i < radioQuestions.length; i++){
		if(radioQuestions[i].checked){
			let find = radioAnswers[i].find(x => x === radioQuestions[i].value.toLowerCase());
			if(find){
				correct++;
			}
		}
	}

// Arrays with all the images and messages based on score
	var pictures = ["James_C.gif", "Dancing_Dude.gif", "No_way.gif","nick_bosa.gif","seahawks.gif",
	"oops.gif","win.gif","next_time.gif","dropped.gif"];
	var messages = ["Great job!", "You'll do better next time!", "Ummmmmmmm........"];
	var score;
	var selectedQuiz = Number(document.quiz.quizNumber.value);


//if statements used to determine what message and image should be displayed
	if (correct == 0) {
		score = 2;
	}
	if (correct > 0 && correct < 5) {
		score = 1;
	}
	if (correct == 5) {
		score = 0;
	}

	//submision page results shown with image and additional message.
	document.getElementById("submission_page").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Results: " + correct + "/5";
	if (correct == 5) {
		document.getElementById("submission_page").style.background = "green";
	}
 	else {
		document.getElementById("submission_page").style.background = "red";
	}
	document.getElementById("picture").src = pictures[score+selectedQuiz];
	}
