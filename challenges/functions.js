// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

say = (str1, str2) => `${str1} ${str2}`; //don't need return unless you have curly braces
consume = (any1, any2, cb) => cb(any1, any2); //don't need return unless you have curly braces

console.log(consume('his', 'her', say)); // don't invoke the function in  the console.log only give the function name or you'll get 'cb not a function error'

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

add = (num1, num2) => num1 + num2;
multiply = (num1, num2) => num1 * num2;
greeting = (first, last) => `Hello ${first} ${last}, nice to meet you`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The nested function can access the internal variable because they are both local to the scope of my function.

const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";

	function nestedFunction() {
		console.log(internal);
	}
	nestedFunction();
}
myFunction();
