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
});


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
	$challengeHeader2.text('Simple Symbols: checking if characters are in right positions.  String must have each letter surrounded by a + sign.  If it is not, false is returned.  Otherwise true.');
	$('.input').bind("enterKey",function(e){
		var string = $('.input').val();
		var result = true;
		for(var i=0; i<string.length; i++){
			var code = string[i].charCodeAt(0);
			if  ( ((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122)) ){
				if(string[i-1]!=='+' || string[i+1]!=='+'){
					result = 'false';
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
			result="sequence entered is neither aritmetic nor geometric";
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

//_______________________Letter Count I #18___________________________
$challengesDropdown.bind("letterCountI", function(){
	$challengeHeader.append('Letter Count I CANNOT FIGURE OUT');
	$challengeHeader2.text('CANNOT FIGURE OUT.  String is inputted.  First Word that has greatest number of repeated letters is returned.  If there are no words with repeated letters, than return -1');
	$input.bind("enterKey",function(e){
		var string = $input.val().toLowerCase();
		var words = string.split(' ');
		var result = -1;
		for(var i=0; i<words.length; i++){
			var word = words[i].split('');
			word = word.sort();
			word = word.join('');
			var prevMax = 1;
			var newMax = 1;
			var newMax2 = 1;
			for(var k=0; k<word.length-1; k++){
				if(word[k]===word[k+1]){
					newMax++;
				}
				else if(word[k]!==word[k+1] && newMax>prevMax || newMax>prevMax && k===word.length-2){
					prevMax = newMax;
					newMax = 1;
				}
			}
			if(newMax > newMax2){
				newMax2 = newMax;
				result = words[i];
			}
		}



		$output.val(result);
	});
});

//_______________________Second GreatLow #19___________________________
$challengesDropdown.bind("secondGreatLow", function(){
	$challengeHeader.append('Second Great Low');
	$challengeHeader2.text('Takes array of numbers, and returns 2nd lowest and 2nd highest numbers.  Input numbers separated by comma, no spaces.  Like, 1,9,110,44');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var numbers = string.split(',');
		for(var i=0; i<numbers.length; i++){
			numbers[i]=Number(numbers[i]);
		}
		numbers.sort(function(a,b){
			return a-b;
		});
		console.log(numbers);
		if(numbers.length>2){
			result = numbers[1]+","+numbers[numbers.length-1];
		}
		// Remaining case if array is 2 (challenge said it has to be at least 2)
		else {
			result= numbers[0]+","+numbers[1];
		}


		$output.val(result);
	});
});


//_______________________Division Stringified #20___________________________
$challengesDropdown.bind("divisionStringified", function(){
	$challengeHeader.append('Division Stringified');
	$challengeHeader2.text('Input 2 numbers separated by comma, like 10,3.  Program will return result of first number divided by 2nd number, as string, with appropriate commas (ie, 12,534)');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var numbers = string.split(',');
		for(var i=0; i<2; i++){
			numbers[i]=Number(numbers[i]);
		}
		// Rounds resulting division, converts to string, then to array of characters
		var result=(Math.round(numbers[0]/numbers[1])).toString().split('');
		// If number is 1,000 or greater, find start index for splicing
		if(result.length>3){
			var startIndex = (result.length%3);
			if(result.length%3===0){
				startIndex = 3;
			}
			// Looping through number, and adding comma every 4 spots (1 is for comma added before)
			for(var k=startIndex; k<result.length; k+=4){
				console.log(result.length);
				result.splice(k, 0, ",");
			}
		}
		$output.val(result.join(''));
	});
});

//_______________________Counting Minutes I #21___________________________
$challengesDropdown.bind("countingMinutesI", function(){
	$challengeHeader.append('Counting Minutes I');
	$challengeHeader2.text('Pass string of 2 times, in format like 12:30pm-12:00am.  Must include am/pm, and have - separating 2 times, no spaces.  Program will calculate time in between 1st and 2nd time, in minutes.  Ie, 9:00am-10:00am would return 60');
	$input.bind("enterKey",function(e){
		var string = $input.val().toLowerCase();
		var times = string.split('-');
		// Array that holds 2 booleans.  Each boolean corresponds to if time is AM.  ie, true, false means am, pm
		var am = [true, true];
		var timesSeparate=[];
		var hours=[];
		var minutes = [];
		var totalMinutes = [];
		var result;
		// for loop that does bunch of stuff, for each of 2 different times.  so just 2 total loops
		for(var i=0; i<2; i++){
			if(times[i].indexOf('am')===-1){
				am[i]=false;
			}
			// Convert entry of array to string, delete am or pm part
			times[i]=times[i].toString().replace('am','').replace('pm','');
			// Split entry of array into 2 parts, hours and minutes, separated by colon (:)
			timesSeparate = times[i].split(':');
			// Hours that are 12 should be 0, like military time, 12:30AM is 00:30
			if(Number(timesSeparate[0])!==12){
				hours[i]=Number(timesSeparate[0]);
			}
			else{
				hours[i]=0;
			}
			minutes[i]=Number(timesSeparate[1]);
			// Calculate total number of minutes, each time is
			if(am[i]){
				totalMinutes[i]=hours[i]*60+minutes[i];
			}
			// If time is PM, need to add 12*60 more minutes, 12 more hours
			else{
				totalMinutes[i]=(12+hours[i])*60+minutes[i];
			}
		}
		var difference = totalMinutes[1]-totalMinutes[0];
		// Formula to find true difference.  negative number means time2 would be day ahead of time1.  1440 min in day
		if(difference<0){
			result=1440-(difference*-1);
		}
		else{
			result=difference;
		}
		$output.val(result);
	});
});

//_______________________Mean Mode #22___________________________
$challengesDropdown.bind("meanMode", function(){
	$challengeHeader.append('Mean Mode');
	$challengeHeader2.text('Program takes numbers, in comma separated list (ie, 1,4,5,6,2) and returns 1 if mode=mean, 0 if not equal');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var sum =0;
		var mean;
		var mode = 0;
		// Mode has to be at least 1, if there is 1 number in array
		var modeRepeat = 1;
		var modeRepeatRecord = 1;
		// Splits string into array of numbers
		var numbers = string.split(',').map(Number);
		// Sort numbers array from least to greatest
		numbers.sort(function(a,b){
			return a-b;
		});
		for(var i=0; i<numbers.length-1; i++){
			// Start adding up sum, to calculate mean
			sum+=numbers[i];
			// If current number = next number, it is match, and potential mode
			if(numbers[i]===numbers[i+1]){
				modeRepeat++;
				// if number repetitions is greater than previous mode, new mode is found, and changed
				if(modeRepeat>modeRepeatRecord){
					modeRepeatRecord++;
					mode = numbers[i];
				}
				// Make sure modeRepeat is 1
				else{
					modeRepeat=1;
				}
			}
		}
		// Messy mean calculation, because for loop ends 1 entry before last of array
		mean = (sum+numbers[(numbers.length-1)])/numbers.length;
		console.log('mean is ' +mean);
		console.log('mode is ' +mode);
		// If mean and moe are equal, return 1, otherwise 0, as per coderbyte instructions
		if(mean===mode){
			result=1;
		}
		else{
			result=0;
		}
		$output.val(result);
	});
});


//_______________________Dash Insert #23___________________________
$challengesDropdown.bind("dashInsert", function(){
	$challengeHeader.append('Dash Insert');
	$challengeHeader2.text('Enter a string of numbers, like 938421873, and program inserts dashes (-) between each 2 odd numbers');
	$input.bind("enterKey",function(e){
		// splits string into array of characters
		var string = $input.val().split('');
		var result = '';
		for(var i=0; i<string.length-1; i++){
			if(Number(string[i])%2===1 && Number(string[i+1])%2===1){
				string.splice(i+1, 0, "-");
				i++;
			}
		}
		result = string.join('');
		$output.val(result);
	});
});

//_______________________Swap Case #24___________________________
$challengesDropdown.bind("swapCase", function(){
	$challengeHeader.append('Swap Case');
	$challengeHeader2.text('Swaps Case of each character of string.  Numbers and symbols need to stay way they are');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var result = '';
		for(var i =0; i<string.length; i++){
			if(string[i].toLowerCase()===string[i]) {  // Then character is lowercase, convert to uppercase
				result+= string[i].toUpperCase();
			}
			else{
				result+=string[i].toLowerCase();
			}
		}
		$output.val(result);
	});
});

//_______________________Number Addition #25___________________________
$challengesDropdown.bind("numberAddition", function(){
	$challengeHeader.append('Number Addition');
	$challengeHeader2.text('Enter a string containing text and numbers.  Program searches for all numbers in string, adds together, returns sum');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var currentNum='';
		var sum=0;
		var result;
		for(var i=0; i<string.length; i++){
			if(!isNaN(string[i]) && string[i]!==' '){  // If string is a number (isn't not a number)  '2' returns false for isNaN, can be string.  Also, if character isn't space.. why does a space (' ') count as a number for isNaN()??
				currentNum += string[i]; // currentNum string is concatenated, so 22 makes twenty two, not 4
				if(i===string.length-1){ // condition that last character of string is number, which wouldn't add up otherwise
					sum+= Number(currentNum);
					break;
				}
			} 
			else if(isNaN(string[i]) || string[i]===' ' && currentNum){
			// Condition that current char isn't number, or is space, but there is number accumulating (ie, 22a, 22 has formed, when hits a would trigger this)
				sum+= Number(currentNum);
				currentNum='';
			}  
		}
		result = sum;
		$output.val(result);
	});
});

//_______________________Third Greatest #26___________________________
$challengesDropdown.bind("thirdGreatest", function(){
	$challengeHeader.append('Third Greatest');
	$challengeHeader2.text('Enter "array" of strings separated by comma, like people,bob,hello,world.  Program returns third larget word.  If tie, return last word that is of longest');
	$input.bind("enterKey",function(e){
		var string = $input.val();
		var stringArr = string.split(',');
		var result='';
		// sorts array based on length, biggest first, also keeping order of ties, to preserve order
		stringArr.sort(function(a,b){
			return b.length - a.length;
		});
		console.log(stringArr);
		result = stringArr[2];
		// But if array has ties, need to move through array, until next lowest number found
		for (var i=2; stringArr[i].length===stringArr[i+1].length; i++){
			if(i ===stringArr.length-2){ // If series of same numbers ,needs to stop at last element of array
				result=stringArr[i+1];
				break;
			}
			result = stringArr[i+1];
		}

		$output.val(result);
	});
});








































// This is the ending bracket for the jquery ready, leave this here
});


