function get_args() // create the function that will store the input
{
	var op = [process.argv[2], process.argv[4], process.argv[3]] //add the user values to the variable op
	return op; // return the values from the function
}
	let op = get_args(); //the variable gets the array from the function

function calculate() //function that will calculate and show the resultes
{
	var a = op[0];  // the variable a gets whats in the first position of the array op
	var b = op[1]; //the variable a gets whats in the second position of the array op
	var c = op[2]; //the variable a gets whats in the third position of the array op
	let resultado; //initialize the variable resultado
		
	if (c=="+"){ //if the variable c is the symbol for the operation then the resultado variable gets that a that operation b
				resultado=Number(op[0])+Number(op[1]);
				}
	if (c=="-"){ 
				resultado=a-b;
				}
	if (c=="x"){
				resultado=a*b;
				}
	if (c=="/"){
				resultado=a/b;
				}
	if (c=="^"){
				resultado=a^b;
				}	
	if (c=="%"){
				resultado=a%b;
	}
	
	
	return resultado; //the function returns the variable
}
	//console.log(calculate()); //print the function


	console.log("The first operand is: ", op[0]); // print the message and the value
	console.log("The second operand is: ", op[1]);
	console.log("The operator is: ", op[2]);	
	




