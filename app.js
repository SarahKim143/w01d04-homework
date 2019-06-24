// 1. What is the difference between a parameter and an argument?
// The argument is the input, the parameter is how the input is represented in the function.

//2. Within a function, what is the difference between return and console.log?
//// The return statement is different from console.log() in that we can use the return value of a function to pass as data, whereas we cannot with a console.log().

//3. What are the implications of the ability of a function to return a value?
//

//'Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. 
//See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer
// for words with capital letters.'

// Write a function calculateSide that takes two arguments: sideA and sideB,
// and returns the solution for sideC using the Pythagorean theorem.

function checkPalindrome(word) {
	for (let i = 0; i < word.length / 2; i++) {
		let j = word.length - 1 - i; 
		if (word[i].toUpperCase() != word[j].toUpperCase())
			return false;
	}	
	return true;
}
console.log(checkPalindrome('radar'));
console.log(checkPalindrome("Borscht"));

// Write a function sumDigits that accepts a number 
//and returns the sum of its digits.

function sumDigits(num) {
	let numAsString = num.toString();
	let total = 0;
	for (let i = 0; i < numAsString.length; i++) 
		total += Number(numAsString[i]); 
	return total;
}

console.log(sumDigits(42));

// Write a function calculateSide that takes two arguments: sideA and sideB, 
//and returns the solution for sideC using the Pythagorean theorem.

function calculateSide(sideA, sideB) {
	return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

}
console.log(calculateSide(8,6));

// Write a function sumArray that takes an array as an argument. The array should contain numbers. 
//The function should return the sum of the numbers in the array.
function sumArray(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++)
		total += arr[i];
	return total;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime,
// you only need to test as far as the square root of that number.This is advisable for optimization and testing large numbers. Step One 
//Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. 
//Hint: Check every number up to the square root. To do this, try a for loop.

function checkPrime(num) {
		const limit = Math.round(Math.sqrt(num));
	for (let i = 2; i <= limit; i++) {
		if (num % i === 0)
		return false;
	}
	return "prime";
}
console.log(checkPrime(7));

function printPrime(limit) {
    for (let i = 0; i < limit; i++) {
        checkPrime(i);
        console.log(checkPrime(i), i);
    }
}
console.log(printPrime(97));



