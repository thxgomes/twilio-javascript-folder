function get_args() // create the function that will store the input
{
	var op = [process.argv[2], process.argv[4], process.argv[3]] //add the user values to the variable op
	return op; // return the values from the function
}
	let op = get_args(); //the variable gets the array from the function

	console.log("The first operand is: ", op[0]); // print the message and the value
	console.log("The second operand is: ", op[2]);
	console.log("The operator is: ", op[1]);	
	