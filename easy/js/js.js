$(function(){

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
	$('select#challenges').change(function(){
		$('select#challenges option:selected').each(function(){
			 // $(this).parent.trigger($(this).val());
			alert($(this).val());
		})
	})

	// Code to reverse a string
	$('body.firstReverse input.input').bind("enterKey",function(e){
		var input = $('input.input').val();
		var result = "";
		for(var i=input.length-1; i>=0; i--){
			result += input[i];
		}
		$('body.firstReverse input.output').val(result);
	});

	// First Factorial Code
	$('select#challenges').bind("firstFactorial", function(){
		alert('first factorial ready to go!');
	})
	



	// $('body.firstReverse input.input').bind("enterKey",function(e){
	// 	var input = $('input.input').val();
	// 	var result = "";
	// 	for(var i=input.length-1; i>=0; i--){
	// 		result += input[i];
	// 	}
	// 	$('body.firstReverse input.output').val(result);
 // });















});


