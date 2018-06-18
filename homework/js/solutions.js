console.log("The javascript is loaded.");

// Verbal Questions
// Q2.
// Parameters are the variable names listed in the function definition.
// Arguments are the values that are utilized by the function.

// Q3.
// return - passes a value back to the function that had called it.
// It will also stop a function from continuing any further lines of code.
// console.log - prints requested information into the console.
// It will not stop a function.

// Palindrome
const checkPalindrome = (wordOne) => {
	const wordOneUpperCase = wordOne.toUpperCase();
	const wordOneSplit = wordOneUpperCase.split("");
	for(let i = 0; i <= wordOneSplit.length-1; i++){
		if(wordOneSplit[i] != wordOneSplit[wordOneSplit.length-1-i]) {
			return false;
		}
	}
	return true;
}

console.log(checkPalindrome("RaDAR"));

// Digit Sum
const sumDigits = (numOne) => {
	const numOneSplit = (numOne + "").split("");
	let numOneSum = 0;
	for(let i = 0; i <= numOneSplit.length-1; i++) {
		numOneSum += parseInt(numOneSplit[i]);
	}
	return numOneSum;
}

console.log(sumDigits(13524));

// Pythagoras
const calculateSide = (sideA, sideB) => {
	// (a^2)+(b^2)=(c^2)
	const aSquared = sideA * sideA;
	const bSquared = sideB * sideB;

	const sideC = Math.sqrt(aSquared + bSquared);

	return sideC;
}

console.log(calculateSide(3,4));

// Sum Array
const sumArray = (array) => {
	let arraySum = 0;
	for(let i = 0; i <= array.length-1; i++) {
		arraySum += array[i];
	}
	return arraySum;
}

console.log(sumArray([1,5,3,2,1,0]));

// Prime Numbers
// Step One
const checkPrime = (numTwo) => {
	if(numTwo === 0 || numTwo === 1) {
		return false;
	}
	for(let i = 2; i < numTwo; i++) {
		if(numTwo % i === 0) {
			return false;
		}
	}
	return true;
}
 
for(let i = 0; i <= 10; i++) {
	console.log(i + " " + checkPrime(i));
}

// Step Two
const printPrimes = (numThree) => {
	for(let i = 0; i <= numThree; i++) {
		if(checkPrime(i) === true) {
			console.log(i);
		}
	}
}

printPrimes(100);