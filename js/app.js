$(document).ready(function(){
	var questions=[{
		questionNumber:0,
		question:"Which of the following planets would float if you put it in water?",
		options:["Saturn","Venus"],
		answer:0,
		description:"Even though Saturn is the second largest planet in the Solar System, it is the least dense. It is mainly composed of hydrogen and helium and does not have a solid surface, hence it would float if you it in water.",
		backgroundImage:"../Images/Water.jpg"

	},{
		questionNumber:1,
		question:"Which of the following planets does not have any seasons?",
		options:["Jupiter","Venus"],
		answer:1,
		description:"The three major factors that influence the seasons are:\n\ra. Eccentricity of the orbit\n\rb. Axial tilt\n\rc. Atmospheric nature\n\rVenus has an almost circular orbit, so negligible eccentricity means negligible contribution to seasons.  Venus has an axial tilt of around 3 degrees (or 177).  That 3 degrees is about one-eighth the tilt Earth has.  Negligible tilt means negligible contribution to seasons.  And finally, the nature of Venus' atmosphere doesn't really allow variation.  The extremely thick blanket maintains a near constant temperature across the entire planet.\n\rHence, Venus doesn\'t have any seasons.",
		backgroundImage:["../Images/Summer.jpg","../Images/Winter.jpg","../Images/Spring.jpg","../Images/Fall.jpg"]
	},{
		questionNumber:2,
		question:"What is the coldest place in the Universe?",
		options:["The North Pole","The Boomerang Nebula"],
		answer:1,
		description:"Boomerang Nebula is in the constellation of Centaurus, 5000 light-years from Earth. With a temperature of -272C, it is only 1 degree warmer than absolute zero (the lowest limit for all temperatures). Even the -270C background glow from the Big Bang is warmer than this nebula. It is the only object found so far that has a temperature lower than the background radiation. It is bow-tie in shape which appears to have been created by a very fierce 500 000 kilometre-per-hour wind blowing ultracold gas away from the dying central star. The star has been losing as much as one-thousandth of a solar mass of material per year for 1500 years. This is 10-100 times more than in other similar objects. The rapid expansion of the nebula has enabled it to become the coldest known region in the Universe.",
		backgroundImage:"../Images/Cold.jpg"
	},{
		questionNumber:3,
		question:"What is the largest known diamond in the universe?",
		options:["Lucy","Hope Diamond"],
		answer:0,
		description:"Astronomers have discovered the largest known diamond in our galaxy, it’s a massive lump of crystallised diamond called BPM 37093, otherwise known as Lucy after The Beatles’ song Lucy in the Sky with Diamonds. Found 50 light-years away in the constellation of Centaurus, Lucy is about 25,000 miles across, so much larger then planet Earth, and weighs in at a massive 10 billion-trillion-trillion carats.",
		backgroundImage:"../Images/Diamond.png"
	},{
		questionNumber:4,
		question:"Where is our solar system's biggest mountain?",
		options:["Jupiter","Mars"],
		answer:1,
		description:"Olympus Mons on Mars is the tallest mountain on any of the planets of the Solar System. The mountain is a gigantic shield volcano (similar to volcanoes found in the Haiiwain Islands) standing at 26 kilometres tall and sprawling 600 kilometres across. To put this into scale, this makes the mountain almost three times the height of Mount Everest.",
		backgroundImage:"../Images/Mountain.jpg"
	}];

//  global variables

	var totalCorrect=0;
	var currentQuestion=0;

//  clicking submit button after answering each question

	$('.questionsList').on("click","#submit",function(){
		updateQuestion();
		currentQuestion++;
		feedback();
	});

//  restart button

	$('.questionsList').on("click","#restart",function(){
		currentQuestion=0;
		totalCorrect=0;
		var newQuestion="<div class="questionsList">"+questions[currentQuestion].question+"</div><br /><span class="answers"><div id="answer_holder"><input type="radio" name="option" class="option" value="0">"+questions[currentQuestion].options[0]+"</div></span><br /><span class="answers"><div id="answer_holder"><input type="radio" name="option" class="option" value="1">"+questions[currentQuestion].options[1]+"</div></span><br /><div id="button_holder"><input type="button" id="submit" value="Submit"></div>";
		$(".questionsList").html(newQuestion);
		$(".feedback_holder").html("");
	});

//  start the quiz

	$('#start').keydown(function(){
		currentQuestion=0;
		totalCorrect=0;
		var newQuestion="<div class="questionsList">"+questions[currentQuestion].question+"</div><br /><span class="answers"><div id="answer_holder"><input type="radio" name="option" class="option" value="0">"+questions[currentQuestion].options[0]+"</div></span><br /><span class="answers"><div id="answer_holder"><input type="radio" name="option" class="option" value="1">"+questions[currentQuestion].options[1]+"</div></span><br /><div id="button_holder"><input type="button" id="submit" value="Submit"></div>";
		$(".questionsList").html(newQuestion);
		$(".feedback_holder").html("");
	});

//  update to new question

	function updateQuestion(){
		var ans=$("input[type='radio']:checked").val();
		if(ans==questions[currentQuestion].answer){
			totalCorrect++;
		}
	}

//  feedback appears

	function feedback(){
		var explanation="<span class="facts"><div class="feedback_holder">"+questions[currentQuestion].description+"</span></div><div id="button_holder"><input type="button" id="next" value="Next"></div>";
		$('.feedback_holder').html(explanation);
		nextQuestion();
	}

//  next question is displayed

	function nextQuestion(){
		if(currentQuestion<5){
			$('.questionsList').remove();
			$('.option input').remove();
			$('.option span').remove();
			$('.feedback_holder').remove();
			var newQuestion="<div class="questionsList">"+questions[currentQuestion].question+"</div><br /><span class="answers"><div id="answer_holder"><input type="radio" name="option" class="option" value="0">"+questions[currentQuestion].options[0]+"</div></span><br /><span class="answers"><div id="answer_holder"><input type="radio" name="option" class="option" value="1">"+questions[currentQuestion].options[1]+"</div></span><br /><div id="button_holder"><input type="button" id="submit" value="Submit"></div>";
			$('.questionList').html(newQuestion);
		}
		else{
			$('.questionsList').remove();
			$('.option input').remove();
			$('.option span').remove();
			$('.feedback_holder').remove();
			$('#restart').show();
			$('#next').css("display","none");
			$('#restart').css("display","inline");
			if(totalCorrect==1){
				var finalScore="<span id="final">You got "+totalCorrect+" question correct!</span>";
				$('.answers').html(finalScore);
			}
			else{
				var finalScore="<span id="final">You got "+totalCorrect+" questions correct!</span>";
				$('.answers').html(finalScore);
			}
		}
	}

})