var myArgs = process.argv[2];

for (var i=1; i<=myArgs; i++) //initialize the variable with the value one inside the function that adds one until the variable is a hundred

{ 
	if (i % 3 == 0) // if the the division of the variable i for three equals zero then the console shows the string
		console.log ("FizzBuzz");

	else if (i % 5 == 0) //if the the division of the variable i for 5 equals zero then the console shows the string
		console.log ("Fizz");

	else if (i % 5 == 0 & i % 3 ==0) //if the the division of the variable i for three and for five equals zero then the console shows the string
		console.log ("Buzz");

	else //any other numberthe console shows the string
		console.log (i);
}