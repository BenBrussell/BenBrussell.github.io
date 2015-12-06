function askQuestions() {


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	console.log('User\'s name is: ' + fullName);
	$('h2').text('Hello ' + fullName)

	var age = prompt('How old are you?');

	age = parseInt(age);

	if (age >= 18){
		console.log('User is an adult');
		alert('Welcome, adult!');

	} else if (age >= 13){
		console.log('User is a teenager');
		alert('Come back in a few years');

	} else{
		console.log('User is a child');
	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly'){
		alert('Welcome General!')
		console.log('User is a General')
	} else{
		alert('You\'re not welcome here!')
	}


	var faveColour = prompt('What is your favourtie colour?').toLowerCase();

	if (faveColour.toLowerCase() == 'red'||
		faveColour.toLowerCase() == 'blue'||
		faveColour.toLowerCase() == 'green'||
		faveColour.toLowerCase() == 'yellow'){

		$('h1').css('color', faveColour);
		

	}

}





/* JS comment */

//JS line comment


// When the page has loaded
$(function(){

	$('img').on('click', askQuestions);

	// Hide all the things
	$('h3').next().hide();

	// When the user clicks on an h3. Can also use 'mouseenter' instead of click to activate when you hover
	$('h3').on('click', function(){

		//Close all the sections
		$('h3').not(this).next().slideUp(300);

		//Hide the next element. the purple number is the time in milliseconds
		$(this).next().slideToggle(300);

	})


});