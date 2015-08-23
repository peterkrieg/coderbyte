$(function(){

	// Variables of Web DOM Used Repeatedly

	var $challengeHeader = $('h3#challengeHeader');
	var $challengeHeader2 = $('h5#challengeHeader2');
	var $challengesDropdown = $('select#challenges');
	var $input = $('.input');
	var $output = $('.output');



	// Trying to get it so that the program immediately will respond to enter for the 
	// reversing string, isn't working yet
	// $challengesDropdown.trigger("firstReverse");



	


	// This code can stay the same for every challenge.  Whenever enter key is pressed,
	// The enterKey event is triggered
	$('input.input').keyup(function(e){
		if(e.keyCode == 13)
		{
			$(this).trigger("enterKey");
		}
	});


// Minor numbering of each option of drop down menu
$('#challenges option').each(function(){
	$(this).prepend('Challenge #' +($(this).index()+1)+ ': ');
})


	// Whenever different option on select menu is clicked, it triggers an event
	// for differnet function of each challenge
	// Some generic effects also occur (like fading of challenge header)
	// Triggers name of challenge, which is event that each different function listens for
	$challengesDropdown.change(function(){
		$('body').removeClass('firstReverse');
		$challengeHeader.html('Challenge #' + ($(':selected').index()+1)+': ');
		$challengeHeader2.html($(':selected').text());
		$('.input').val('');
		$('.output').val('');
		$(this).trigger($(this).val());
		$challengeHeader.hide().fadeIn(500);
		$challengeHeader2.hide().fadeIn(800);
		// This code automatically numbers challenges, based on order of children in <select>element
	});



	// ___________________________Reversing String Code  #1____________________________
	$challengesDropdown.bind("firstReverse", function(){
		$challengeHeader.append('String Reverse');
		$challengeHeader2.html('This program produces the reverse string of a given input');

		$('.input').bind("enterKey",function(e){
			var input = $('.input').val();
			var result = "";
			for(var i=input.length-1; i>=0; i--){
				result += input[i];
			}
			$('.output').val(result);
		});
	});
	// Code necessary since first challenge loads up, isn't triggerd
	$challengeHeader.html('Challenge #1: String Reverse');
	$('body.firstReverse .input').bind("enterKey",function(e){
		var input = $('.input').val();
		var result = "";
		for(var i=input.length-1; i>=0; i--){
			result += input[i];
		}
		$('.output').val(result);
	});



	// ___________________________First Factorial Code  #2____________________________
	$challengesDropdown.bind("firstFactorial", function(){
		$challengeHeader.append('First Factorial');
		$('.input').bind("enterKey",function(e){
			var num = Number($('.input').val());
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
			$('.output').val(result);
		});
	});


	// __________________________________Longest Word Code  #3________________________
	// can't quite figure out best way to do it.. so far iterating through alphabet string
	$challengesDropdown.bind("longestWord", function(){
		$challengeHeader.append('Longest Word of a String NOT WORKING YET');
		$('input.input').bind("enterKey",function(e){
			var alphabet = 'abcdefghijklmnopqrstuvwxyz';
			var input = $('input.input').val().toLowerCase();
			// Breaks big string into array of strings separated by space
			var strings = input.split(" ");
			// Go through every string in array
			var prevLongest = "";
			var longestWord = "";
			for(var i=0; i<strings.length; i++){
				for(var k=0; k<strings[i].length; k++){
					for(var l=0; l<alphabet.length; l++){
					}
				}
			}

		});
	});



	// ______________________Letter Changes #4____________________________________
	// Take str parameter passed and modify it depending on each character's position in alphabet

	$challengesDropdown.bind("letterChanges", function(){
		$challengeHeader.append('Letter Changes');
		$('.input').bind("enterKey",function(e){
			var string = $('.input').val();
			var alphabet = "abcdefghijklmnopqrstuvwxyz";
			var result=[];

			for(var i=0; i<string.length; i++){
				// Loop through alphabet first
				for(var k=0; k<alphabet.length; k++){
					if (string[i]===alphabet[k]){
						result[i]=alphabet[k+1];
						// Capitalizes vowels of newly shifted letter
						if(result[i]==='a'||result[i]==='e'||result[i]==='i'||result[i]==='o'||result[i]==='u'){
							result[i]=result[i].toUpperCase();
						}
					}
				}
			}
			// Make result a string
			result=result.join('');
			$('.output').val(result);
		});
	});



//______________________Simple Adding #5___________________________
// Take number parameter, add from 1 to that number
	$challengesDropdown.bind("simpleAdding", function(){
		$challengeHeader.append('Simple Adding');
		$('.input').bind("enterKey",function(e){
			var num = Number($('.input').val());
			if(num<0){
				$('.error').html('please provide a positive number');
				return;
			}
			var result=0;
			for(var i=0; i<=num; i++){
				result+=i;
			}
			$('.output').val(result);
		});
	});


	//_______________________Letter Capitalize #6___________________________
// Take number parameter, add from 1 to that number
	$challengesDropdown.bind("letterCapitalize", function(){
		$challengeHeader.append('Letter Capitalize');
		$('.input').bind("enterKey",function(e){
			var string = $('.input').val().split('');
			string[0]=string[0].toUpperCase();
			for(var i=0; i<string.length; i++){
				if(string[i]===" "){
					string[i+1]=string[i+1].toUpperCase();
				}
			}
			var result = string.join('');
			$('.output').val(result);
		});
	});

		//_______________________Simple Symbols #7___________________________
// String inputted must have letters surrounded by a + sign.  
// True if that condition holds, false otherwise
	$challengesDropdown.bind("simpleSymbols", function(){
		$challengeHeader.append('Simple Symbols');
		$('.input').bind("enterKey",function(e){
			var string = $('.input').val();
			var result = true;
			for(var i=0; i<string.length; i++){
				var code = string[i].charCodeAt(0);
				if  ( ((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122)) ){
					console.log('letter of alphabet');
					if(string[i-1]!=='+' || string[i+1]!=='+'){
						var result = 'false';
						break;
					}
				}
			}
			$('.output').val(result);
		});
	});














// Generic thing, copy and paste ot use it for each
// $challengesDropdown.bind("letterChanges", function(){
// 		$challengeHeader.append('Letter Changes');
// 		$challengeHeader2.html('changing letters of string');
// 		$('.input').bind("enterKey",function(e){
// 			var string = $('.input').val();


// 		});
// 	});























// This is the ending bracket for the jquery ready, leave this here
});


