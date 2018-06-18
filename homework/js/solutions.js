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

// Pythagoras
const calculateSide = (sideA, sideB) => {
	// (a^2)+(b^2)=(c^2)
	const aSquared = sideA * sideA;
	const bSquared = sideB * sideB;

	const sideC = Math.sqrt(aSquared + bSquared);

	return sideC;
}

console.log(calculateSide(3,4));