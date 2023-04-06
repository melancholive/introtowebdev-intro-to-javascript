// Create function that takes in one argument that is passed through a conditional statement. 
// Return the result as an alert or console.log. 
// Test all of your conditions to make sure you can receive all of your results back. 

function relativeToEight(x){
	if ( x == 8 ){
		return "your answer of 8 is correct !";
	} else if ( x > 8 ){
		return "your answer of " + x + " is greater than the correct value";
	} else {
		return "your answer of " + x + " is less than the correct value";
	}
}

alert(relativeToEight(8)); // your answer of 8 is correct !
alert(relativeToEight(8.0)); // your answer of 8 is correct !
alert(relativeToEight(10)); // your answer of 10 is greater than the correct value
alert(relativeToEight(9)); // your answer of 9 is greater than the correct value