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
		// Triggers function that corresponds to js code for each challenge
		$(this).trigger($(this).val());
		$challengeHeader.hide().fadeIn(500);
		$challengeHeader2.hide().fadeIn(800);
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
	$challengeHeader2.text('Simple Symbols: checking if characters are in right positions.  String must have each letter surrounded by a + sign.  If it is not, false is returned.  Otherwise true.')
	$('.input').bind("enterKey",function(e){
		var string = $('.input').val();
		var result = true;
		for(var i=0; i<string.length; i++){
			var code = string[i].charCodeAt(0);
			if  ( ((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122)) ){
				if(string[i-1]!=='+' || string[i+1]!=='+'){
					var result = 'false';
					break;
				}
			}
		}
		$('.output').val(result);
	});
});


//_______________________Check Nums #8___________________________
$challengesDropdown.bind("checkNums", function(){
	$challengeHeader.append('Check Numbers');
	$challengeHeader2.text('Compare size of 2 numbers.  If num2 is bigger, return true.  Smaller, return false.  Equal, return -1.  Enter number as 1,2 comma, no space.');
	$('.input').bind("enterKey",function(e){
		var string = $('.input').val();
		var nums = string.split(',');
		var num1= Number(nums[0]);
		var num2 = Number(nums[1]);
		var result ='';
		if(num2>num1){
			result = 'true';
		}
		else if(num2<num1){
			result = 'false';
		}
		else{
			result = '-1';
		}
		$('.output').val(result);
	});
});


	//_______________________Time Convert #9___________________________
	$challengesDropdown.bind("timeConvert", function(){
		$challengeHeader.append('Time Convert');
		$challengeHeader2.text('Timem convert.  String input is number, and needs to convert into time.  Ie, 126 would be 2:6.  45 would be 0:45');
		$input.bind("enterKey",function(e){
			var string = $input.val();
			var num = Number(string);
			var result = '';
			if(num>=60){
				result+= Math.floor((num/60))+':'+(num%60);
			}
			else if(num<60){
				result+='0:'+num;
			}
			$output.val(result);
		});
	});

	//_______________________Alphabet Soup #10___________________________
	$challengesDropdown.bind("alphabetSoup", function(){
		$challengeHeader.append('Alphabet Soup');
		$challengeHeader2.text('String entered.  Must sort string and rearrange characters based on alphabetical order.  Ie, "hello" would become "ehllo');
		$('.input').bind("enterKey",function(e){
			var string = $('.input').val().toLowerCase();
			var result = string[0];
			for(var i=1; i<string.length; i++){
				var newCode = string[i].charCodeAt(0);
				for(var k=0; k<result.length; k++){
					var code = result[k].charCodeAt(0);
					if(newCode<=code){
						result = result.slice(0, k) + string[i] +result.slice(k);
						break;
					}
					else if(k===result.length-1){
						result = result + string[i];
						break;
					}
				}
			}
			$('.output').val(result);
		});
	});

	//_______________________AB Check #11___________________________
	$challengesDropdown.bind("ABCheck", function(){
		$challengeHeader.append('AB Check');
		$challengeHeader2.text('Return true if characters and b are separated by exactly 3 places anywhere in string at least once. Otherwise return false');
		$('.input').bind("enterKey",function(e){
			var string = $('.input').val().toLowerCase();
			var result = false;
			for(var i=0; i<string.length; i++){
				if(string[i]==='a' || string[i]==='b'){
					var letter = string[i];
					if(letter==='a' && string[i+4]==='b'){
						result = true;
						break;
					}
					else if(letter==='b' && string[i+4]==='a'){
						result = true;
						break;
					}
				}
			}
			$('.output').val(result);
		});
	});


	//_______________________Vowel Count #12___________________________
	$challengesDropdown.bind("vowelCount", function(){
		$challengeHeader.append('Vowel Count');
		$challengeHeader2.text('Count Number of vowels in string.  Return number.  Y does not count as vowel');
		$input.bind("enterKey",function(e){
			var string = $input.val();
			var numVowels=0;
			var vowels = 'aeiou';
			for(var i=0; i<string.length; i++){
				for(var k=0; k<vowels.length; k++){
					if(string[i]===vowels[k]){
						numVowels++;
						break;
					}
				}
			}
			var result = 'Number of vowels is: ' +numVowels;
			$output.val(result);
		});
	});


//_______________________Word Count #13___________________________
$challengesDropdown.bind("wordCount", function(){
	$challengeHeader.append('Word Count');
	$challengeHeader2.text('Counts Number of words of inputted string.  Words separated by single space');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		string = string.split(' ');
		result = string.length;
		$output.val(result);
	});
});

//_______________________Ex Oh #14___________________________
$challengesDropdown.bind("exOh", function(){
	$challengeHeader.append('Ex Oh');
	$challengeHeader2.text('Takes string input, returns true if number of xs in string equals number of os.  otherwise, false.');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var numX = 0;
		var numO = 0;
		var result = false;
		for(var i=0; i<string.length; i++){
			if(string[i]==='x'){
				numX++;
			}
			else if(string[i]==='o'){
				numO++;
			}
		}
		if(numX===numO){
			result = true;
		}
		$output.val(result);
	});
});

//_______________________Palindrome #15___________________________
$challengesDropdown.bind("palindrome", function(){
	$challengeHeader.append('Palindrome');
	$challengeHeader2.text('Returns true if string is palindrome (spelled same forwards and back.  Otherwise returns false');
		$input.bind("enterKey",function(e){
			var string = $input.val().toLowerCase();
			var newString = '';
			var result = true;
		// First need to make newString with no punctuation or numbers
		for(var i=0; i<string.length; i++){
			var code = string[i].charCodeAt(0);
			if(code>=97 && code<=122){
				newString+=string[i];
			}
		}
		for(var i=0; i<newString.length; i++){
			// If at any point characters on either side of string don't match up, result is false, script over
			if(newString[i]!==newString[newString.length-i-1]){
				result = false;
				break;
			}
		}
		$output.val(result);
	});
	});

//_______________________Arith Geo #16___________________________
$challengesDropdown.bind("arithGeo", function(){
	$challengeHeader.append('Arith Geo');
	$challengeHeader2.text('Enter a string sequence of numbers, separated by comma, no space.  Ie, 2,4,6,8,10.  Program returns string "Arithmetic" if sequence is arithmetic, and "Geometric" if geometric.  If sequence does not follow either pattern, -1 is returned');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var sequence = string.split(',');
		var result = '';
		var prevNum = sequence[0];
		var arithmetic = true;
		var geometric = true;
		for(var i =1; i<sequence.length-1; i++){
			var currentNum = sequence[i];
			var nextNum = sequence[i+1];
			if(nextNum-currentNum !== currentNum-prevNum){
				arithmetic = false;
			}
			if(nextNum/currentNum !== currentNum/prevNum){
				geometric = false;
			}
			prevNum=sequence[i];
		}
		// determining what sequence is
		if(arithmetic){
			result="arithmetic";
		}
		else if(geometric){
			result="geometric";
		}
		else{
			result="sequence entered is neither aritmetic nor geometric"
		}
		$output.val(result);
	});
});

//_______________________Array Addition I #17___________________________
$challengesDropdown.bind("arrayAdditionI", function(){
	$challengeHeader.append('Array Addition I    CANNOT FIGURE OUT YET');
	$challengeHeader2.text('Sequence of numbers inputted, separated by comma only, like 1,2,3,5 for example.  Program return true if any combination of numbers can be combined to equal largest number of array.  otherwise, false.');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var sequence = string.split(',');
		// inefficient way to convert array of string nums to array of actual nums
		for(var i=0; i<sequence.length; i++){
			sequence[i]= Number(sequence[i]);
		}
		var maxNum = Math.max.apply(null, sequence);

		$output.val('max number of array is '+maxNum);
	});
});































// This is the ending bracket for the jquery ready, leave this here
});


