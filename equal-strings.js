// Create a conditional statement that checks if two strings are equal.
// Include an if and else statement. 
// Create an alert that gives your user feedback based on the string defined. 
// Test your statement with different strings to make sure both alerts work.


function stringComparison( stringOne, stringTwo ){
	if ( stringOne == stringTwo ){
		return "" + stringOne + " and " + stringTwo + " are equal";
	} else {
		return "" + stringOne + " and " + stringTwo + " are not equal";
	}
}

alert(stringComparison("apple", "apple")); // returns equal
alert(stringComparison("Apple", "apple")); // returns not equal
alert(stringComparison("0", "1")); // returns not equal

