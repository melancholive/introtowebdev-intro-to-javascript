// Create a conditional statement that compares two numbers. 
// You can choose if those numbers will be equal, less than, greater than, less than or equal to, or greater than or equal to each other. 
// Include an if, else if, and else statement. 
// Create an alert that gives your user feedback based on the number. 
// Test your statement with different numbers to make sure all alerts work.

function compareNumbers( numOne, numTwo ){
	if ( numOne == numTwo ){
		return "the numbers " + numOne + " and " + numTwo + " are equal";
	} else if ( numOne > numTwo){
		return "" + numOne + " is greater than " + numTwo;
	} else {
		return "" + numOne + " is less than " + numTwo;
	}
}

alert(compareNumbers(1,1)); // the numbers 1 and 1 are equal
alert(compareNumbers(1,2)); // 1 is less than 2
alert(compareNumbers(1,1.0)); // the numbers 1 and 1 are equal
alert(compareNumbers(-1,1)); // -1 is less than 1



