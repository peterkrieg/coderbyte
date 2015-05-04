$(function(){

	// Variables of Web DOM Used Repeatedly

	var $challengeHeader = $('h3#challengeHeader');
	var $challengesDropdown = $('select#challenges');



	// Trying to get it so that the program immediately will respond to enter for the 
	// reversing string, isn't working yet
	$challengesDropdown.trigger("firstReverse");



	


	// This code can stay the same for every challenge.  Whenever enter key is pressed,
	// The enterKey event is triggered
	$('input.input').keyup(function(e){
		if(e.keyCode == 13)
		{
			$(this).trigger("enterKey");
		}
	});

	// Whenever different option on select menu is clicked, it triggers an event
	// for differnet function of each challenge
	// Some generic effects also occur (like fading of challenge header)
	$challengesDropdown.change(function(){
		$(this).trigger($(this).val());
		console.log($(this).val());
		console.log(typeof $(this).val());
		$challengeHeader.hide().fadeIn(500);
	});



	// ___________________________Reversing String Code____________________________
	$challengesDropdown.bind("firstReverse", function(){
		$challengeHeader.html('Challenge #1: First Factorial');
		$('input.input').bind("enterKey",function(e){
			var input = $('input.input').val();
			var result = "";
			for(var i=input.length-1; i>=0; i--){
				result += input[i];
			}
			$('input.output').val(result);
		});
	});



	// ___________________________First Factorial Code____________________________
	$challengesDropdown.bind("firstFactorial", function(){
		$challengeHeader.html('Challenge #2: First Factorial');
		$('input.input').bind("enterKey",function(e){
			var num = Number($('input.input').val());
			var result = 1;
			if(num<0){
				result = "factorials can't be with negative numbers, try again";
			}
			else if(num===0){
				result = 1;
			}
			else if(num>0){
				for(var i=num; i>0; i--){
					result*=i;
				}
			}
			$('input.output').val(result);
		});
	});


	// Longest Word Code
	// $challengesDropdown.bind("longestWord", function(){
	// 	alert('longest word ready to go!');
	// });





	// $('body.firstReverse input.input').bind("enterKey",function(e){
	// 	var input = $('input.input').val();
	// 	var result = "";
	// 	for(var i=input.length-1; i>=0; i--){
	// 		result += input[i];
	// 	}
	// 	$('body.firstReverse input.output').val(result);
 // });















});


