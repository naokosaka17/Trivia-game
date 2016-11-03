$(document).ready(function(){

	//Timer
	function Countdown(options) {
	  var timer,
	  instance = this,
	  seconds = options.seconds || 10,
	  updateStatus = options.onUpdateStatus || function () {},
	  counterEnd = options.onCounterEnd || function () {};

	  function decrementCounter() {
	    updateStatus(seconds);
	    if (seconds === 0) {
	      counterEnd();
	      instance.stop();
	    }
	    seconds--;
	  }

	  this.start = function () {
	    clearInterval(timer);
	    timer = 0;
	    seconds = options.seconds;
	    timer = setInterval(decrementCounter, 1000);
	  };

	  this.stop = function () {
	    clearInterval(timer);
	  };
	  this.reset = function (){
	  	seconds = 30;
	  	$(".stopwatch").html(sec);
	  }
	}

	var myCounter = new Countdown({  
    seconds:30,  
    onUpdateStatus: function(sec){
    	$(".stopwatch").html(sec);

    	console.log(sec);
    }, 
    onCounterEnd: function(){ 
    	console.log("times out");
  
	} 
	});

	
//on click function from start button to last question


//======Q1======//
	//actions after click start button
	//-----(need : timer, question and 4 answers)
	$(".startButton").on("click",function(){
		myCounter.start();
		$(".start").addClass("hidden");
		$(".question1").removeClass("hidden");
		$(".answer1").removeClass("hidden");
	});

		//correct answer
		//------(delete : last question, last 4 answers)
		//------(need : timer,gif,correct comment, new question and 4 answers)
		$(".a12").on("click",function(){
			myCounter.start();
			$(".question1").addClass("hidden");
			$(".answer1").addClass("hidden");
			$(".gif1").removeClass("hidden");
			$(".gif1").append("<img id ='apple' src='assets/images/apple.gif'/>/");
			$(".correct1").removeClass("hidden");
			$(".question2").removeClass("hidden");
			$(".answer2").removeClass("hidden");
		});

		//wrong answer
		//------(delete : last question, last 4 answers)
		//------(need : timer,gif,wrong comment, new question and 4 answers)
		$(".a11").on("click",function(){
			myCounter.start();
			$(".question1").addClass("hidden");
			$(".answer1").removeClass("hidden");
			$(".gif1").removeClass("hidden");
			$(".gif1").append("<img id ='apple' src='assets/images/apple.gif'/>/");
			$(".wrong1").removeClass("hidden");
			$(".question2").removeClass("hidden");
			$(".answer2").removeClass("hidden");
		});

		$(".a13").on("click",function(){
			myCounter.start();
			$(".question1").addClass("hidden");
			$(".answer1").removeClass("hidden");
			$(".gif1").removeClass("hidden");
			$(".gif1").append("<img id ='apple' src='assets/images/apple.gif'/>/");
			$(".wrong1").removeClass("hidden");
			$(".question2").removeClass("hidden");
			$(".answer2").removeClass("hidden");
		});

		$(".a14").on("click",function(){
			myCounter.start();
			$(".question1").addClass("hidden");
			$(".answer1").removeClass("hidden");
			$(".gif1").removeClass("hidden");
			$(".gif1").append("<img id ='apple' src='assets/images/apple.gif'/>/");
			$(".wrong1").removeClass("hidden");
			$(".question2").removeClass("hidden");
			$(".answer2").removeClass("hidden");
		});


//======Q2======//
		//correct answer
		//------(delete : last question, last 4 answers,last gif and comment)
		//------(need : timer,gif,correct comment, new question and 4 answers)
		$(".a24").on("click",function(){
			myCounter.start();
			$(".question2").addClass("hidden");
			$(".answer1").addClass("hidden");
			$(".correct1").addClass("hidden");
			$(".wrong1").addClass("hidden");
			$(".gif1").addClass("hidden");
			$(".answer2").remove("hidden");
			$(".gif2").removeClass("hidden");
			$(".gif2").append("<img id ='mirror' src='assets/images/mirror.gif'/>/");
			$(".correct2").removeClass("hidden");
			$(".question3").removeClass("hidden");
			$(".answer3").removeClass("hidden");
		});

		//wrong answer
		$(".a21").on("click",function(){
			myCounter.start();
			$(".question2").addClass("hidden");
			$(".answer1").addClass("hidden");
			$(".correct1").addClass("hidden");
			$(".wrong1").addClass("hidden");
			$(".gif1").addClass("hidden");
			$(".answer2").remove("hidden");
			$(".gif2").removeClass("hidden");
			$(".gif2").append("<img id ='mirror' src='assets/images/mirror.gif'/>/");
			$(".wrong2").removeClass("hidden");
			$(".question3").removeClass("hidden");
			$(".answer3").removeClass("hidden");
		});

		$(".a22").on("click",function(){
			myCounter.start();
			$(".question2").addClass("hidden");
			$(".answer1").addClass("hidden");
			$(".correct1").addClass("hidden");
			$(".wrong1").addClass("hidden");
			$(".gif1").addClass("hidden");
			$(".answer2").remove("hidden");
			$(".gif2").removeClass("hidden");
			$(".gif2").append("<img id ='mirror' src='assets/images/mirror.gif'/>/");
			$(".wrong2").removeClass("hidden");
			$(".question3").removeClass("hidden");
			$(".answer3").removeClass("hidden");
		});

		$(".a23").on("click",function(){
			myCounter.start();
			$(".question2").addClass("hidden");
			$(".answer1").addClass("hidden");
			$(".correct1").addClass("hidden");
			$(".wrong1").addClass("hidden");
			$(".gif1").addClass("hidden");
			$(".answer2").remove("hidden");
			$(".gif2").removeClass("hidden");
			$(".gif2").append("<img id ='mirror' src='assets/images/mirror.gif'/>/");
			$(".wrong2").removeClass("hidden");
			$(".question3").removeClass("hidden");
			$(".answer3").removeClass("hidden");
		});

//======Q3======//
		//correct answer
		//------(delete : last question, last 4 answers,last gif and comment)
		//------(need : timer,gif,correct comment, new question and 4 answers)
		$(".a32").on("click",function(){
			myCounter.start();
			$(".question3").addClass("hidden");
			$(".answer2").addClass("hidden");
			$(".correct2").addClass("hidden");
			$(".wrong2").addClass("hidden");
			$(".gif2").addClass("hidden");
			$(".answer3").remove("hidden");
			$(".gif3").removeClass("hidden");
			$(".gif3").append("<img id ='pascal' src='assets/images/pascal.gif'/>/");
			$(".correct3").removeClass("hidden");
			$(".question4").removeClass("hidden");
			$(".answer4").removeClass("hidden");
		});

		//wrong answer
		$(".a31").on("click",function(){
			myCounter.start();
			$(".question3").addClass("hidden");
			$(".answer2").addClass("hidden");
			$(".correct2").addClass("hidden");
			$(".wrong2").addClass("hidden");
			$(".gif2").addClass("hidden");
			$(".answer3").remove("hidden");
			$(".gif3").removeClass("hidden");
			$(".gif3").append("<img id ='pascal' src='assets/images/pascal.gif'/>/");
			$(".wrong3").removeClass("hidden");
			$(".question4").removeClass("hidden");
			$(".answer4").removeClass("hidden");
		});

		$(".a32").on("click",function(){
			myCounter.start();
			$(".question3").addClass("hidden");
			$(".answer2").addClass("hidden");
			$(".correct2").addClass("hidden");
			$(".wrong2").addClass("hidden");
			$(".gif2").addClass("hidden");
			$(".answer3").remove("hidden");
			$(".gif3").removeClass("hidden");
			$(".gif3").append("<img id ='mirror' src='assets/images/pascal.gif'/>/");
			$(".wrong3").removeClass("hidden");
			$(".question4").removeClass("hidden");
			$(".answer4").removeClass("hidden");
		});

		$(".a33").on("click",function(){
			myCounter.start();
			$(".question3").addClass("hidden");
			$(".answer2").addClass("hidden");
			$(".correct2").addClass("hidden");
			$(".wrong2").addClass("hidden");
			$(".gif2").addClass("hidden");
			$(".answer3").remove("hidden");
			$(".gif3").removeClass("hidden");
			$(".gif3").append("<img id ='mirror' src='assets/images/pascal.gif'/>/");
			$(".wrong3").removeClass("hidden");
			$(".question4").removeClass("hidden");
			$(".answer4").removeClass("hidden");
		});

	
//======Q4======//
		//correct answer
		//------(delete : last question, last 4 answers,last gif and comment)
		//------(need : timer,gif,correct comment, new question and 4 answers)
		$(".a43").on("click",function(){
			myCounter.start();
			$(".question4").addClass("hidden");
			$(".answer3").addClass("hidden");
			$(".correct3").addClass("hidden");
			$(".wrong3").addClass("hidden");
			$(".gif3").addClass("hidden");
			$(".answer4").remove("hidden");
			$(".gif4").removeClass("hidden");
			$(".gif4").append("<img id ='ariel' src='assets/images/ariel.gif'/>/");
			$(".correct4").removeClass("hidden");
			$(".question5").removeClass("hidden");
			$(".answer5").removeClass("hidden");
		});

		//wrong answer
		$(".a41").on("click",function(){
			myCounter.start();
			$(".question4").addClass("hidden");
			$(".answer3").addClass("hidden");
			$(".correct3").addClass("hidden");
			$(".wrong3").addClass("hidden");
			$(".gif3").addClass("hidden");
			$(".answer4").remove("hidden");
			$(".gif4").removeClass("hidden");
			$(".gif4").append("<img id ='ariel' src='assets/images/ariel.gif'/>/");
			$(".wrong4").removeClass("hidden");
			$(".question5").removeClass("hidden");
			$(".answer5").removeClass("hidden");
		});

		$(".a42").on("click",function(){
			myCounter.start();
			$(".question4").addClass("hidden");
			$(".answer3").addClass("hidden");
			$(".correct3").addClass("hidden");
			$(".wrong3").addClass("hidden");
			$(".gif3").addClass("hidden");
			$(".answer4").remove("hidden");
			$(".gif4").removeClass("hidden");
			$(".gif4").append("<img id ='ariel' src='assets/images/ariel.gif'/>/");
			$(".wrong4").removeClass("hidden");
			$(".question5").removeClass("hidden");
			$(".answer5").removeClass("hidden");
		});

		$(".a43").on("click",function(){
			myCounter.start();
			$(".question4").addClass("hidden");
			$(".answer3").addClass("hidden");
			$(".correct3").addClass("hidden");
			$(".wrong3").addClass("hidden");
			$(".gif3").addClass("hidden");
			$(".answer4").remove("hidden");
			$(".gif4").removeClass("hidden");
			$(".gif4").append("<img id ='ariel' src='assets/images/ariel.gif'/>/");
			$(".wrong4").removeClass("hidden");
			$(".question5").removeClass("hidden");
			$(".answer5").removeClass("hidden");
		});

//======Q5======//
		//correct answer
		//------(delete : last question, last 4 answers,last gif and comment)
		//------(need : timer,gif,correct comment, new question and 4 answers)
		$(".a51").on("click",function(){
			myCounter.start();
			$(".question5").addClass("hidden");
			$(".answer4").addClass("hidden");
			$(".correct4").addClass("hidden");
			$(".wrong4").addClass("hidden");
			$(".gif4").addClass("hidden");
			$(".answer5").remove("hidden");
			$(".gif5").removeClass("hidden");
			$(".gif5").append("<img id ='bell' src='assets/images/bell.gif '/>/");
			$(".correct5").removeClass("hidden");
			$(".question6").removeClass("hidden");
			$(".answer6").removeClass("hidden");
		});

		//wrong answer
		$(".a52").on("click",function(){
			myCounter.start();
			$(".question5").addClass("hidden");
			$(".answer4").addClass("hidden");
			$(".correct4").addClass("hidden");
			$(".wrong4").addClass("hidden");
			$(".gif4").addClass("hidden");
			$(".answer5").remove("hidden");
			$(".gif5").removeClass("hidden");
			$(".gif5").append("<img id ='bell' src='assets/images/bell.gif '/>/");
			$(".wrong5").removeClass("hidden");
			$(".question6").removeClass("hidden");
			$(".answer6").removeClass("hidden");
		});

		$(".a53").on("click",function(){
			myCounter.start();
			$(".question5").addClass("hidden");
			$(".answer4").addClass("hidden");
			$(".correct4").addClass("hidden");
			$(".wrong4").addClass("hidden");
			$(".gif4").addClass("hidden");
			$(".answer5").remove("hidden");
			$(".gif5").removeClass("hidden");
			$(".gif5").append("<img id ='bell' src='assets/images/bell.gif '/>/");
			$(".wrong5").removeClass("hidden");
			$(".question6").removeClass("hidden");
			$(".answer6").removeClass("hidden");
		});

		$(".a54").on("click",function(){
			myCounter.start();
			$(".question5").addClass("hidden");
			$(".answer4").addClass("hidden");
			$(".correct4").addClass("hidden");
			$(".wrong4").addClass("hidden");
			$(".gif4").addClass("hidden");
			$(".answer5").remove("hidden");
			$(".gif5").removeClass("hidden");
			$(".gif5").append("<img id ='bell' src='assets/images/bell.gif '/>/");
			$(".wrong5").removeClass("hidden");
			$(".question6").removeClass("hidden");
			$(".answer6").removeClass("hidden");
		});


//======Q6======//
		//correct answer
		//------(delete : last question, last 4 answers,last gif and comment)
		//------(need : timer,gif,correct comment, new question and 4 answers)
		$(".a61").on("click",function(){
			myCounter.start();
			$(".question6").addClass("hidden");
			$(".answer5").addClass("hidden");
			$(".correct5").addClass("hidden");
			$(".wrong5").addClass("hidden");
			$(".gif5").addClass("hidden");
			$(".answer6").remove("hidden");
			$(".gif6").removeClass("hidden");
			$(".gif6").append("<img id ='aurora' src='assets/images/aurora.gif '/>/");
			$(".correct6").removeClass("hidden");
			$(".question7").removeClass("hidden");
			$(".answer7").removeClass("hidden");
		});

		//wrong answer
		$(".a62").on("click",function(){
			myCounter.start();
			$(".question6").addClass("hidden");
			$(".answer5").addClass("hidden");
			$(".correct5").addClass("hidden");
			$(".wrong5").addClass("hidden");
			$(".gif5").addClass("hidden");
			$(".answer6").remove("hidden");
			$(".gif6").removeClass("hidden");
			$(".gif6").append("<img id ='aurora' src='assets/images/aurora.gif '/>/");
			$(".wrong6").removeClass("hidden");
			$(".question7").removeClass("hidden");
			$(".answer7").removeClass("hidden");
		});

		$(".a63").on("click",function(){
			myCounter.start();
			$(".question6").addClass("hidden");
			$(".answer5").addClass("hidden");
			$(".correct5").addClass("hidden");
			$(".wrong5").addClass("hidden");
			$(".gif5").addClass("hidden");
			$(".answer6").remove("hidden");
			$(".gif6").removeClass("hidden");
			$(".gif6").append("<img id ='aurora' src='assets/images/aurora.gif '/>/");
			$(".wrong6").removeClass("hidden");
			$(".question7").removeClass("hidden");
			$(".answer7").removeClass("hidden");
		});

		$(".a64").on("click",function(){
			myCounter.start();
			$(".question6").addClass("hidden");
			$(".answer5").addClass("hidden");
			$(".correct5").addClass("hidden");
			$(".wrong5").addClass("hidden");
			$(".gif5").addClass("hidden");
			$(".answer6").remove("hidden");
			$(".gif6").removeClass("hidden");
			$(".gif6").append("<img id ='aurora' src='assets/images/aurora.gif '/>/");
			$(".wrong6").removeClass("hidden");
			$(".question7").removeClass("hidden");
			$(".answer7").removeClass("hidden");
		});

//======Q7======//
	$(".answer7").on("click",function(){
		myCounter.start();
		$(".question7").addClass("hidden");
		$(".question8").removeClass("hidden");
		$(".answer8").removeClass("hidden");

	});






});

/***** ===Psuedocode=== *****
1. Make click function for <START>
2. On click
	* remove <START> button
	* add 1 Question and 4 answers
	* timer starts countdown (30sec)
3. If user pick answer OR time is out
	* timer stops
	* If Answer is correct, add 1 to correct point and show gif (5sec)
	* If Answer is wrong, add 1 to incorrect point, show answer and gif (5sec)
	* If Time is out, add 1 to unanswer, show answer and gif (5sec)
4. Show next question and 4 answers
5. Repeat 3,4
6. After finish all questions, show result
	* correct answers : number
	* incorrect answers : number
	* unanswer : number
	* add <start over?> button
7.on click 
	repeat from 1 to 7.
*/
