//  Q1

// Q2
// Function to greet the user using their full name
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "!");
}

// Example usage
var userFirstName = "John";
var userLastName = "Doe";

greetUser(userFirstName, userLastName);

// Q3
// Function to add two numbers entered by the user
function addTwoNumbers() {
    // Get the first number from the user
    var firstNumber = parseFloat(prompt("Enter the first number:"));

    // Get the second number from the user
    var secondNumber = parseFloat(prompt("Enter the second number:"));

    // Check if the inputs are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Invalid input. Please enter valid numbers.";
    }

    // Calculate the sum
    var sum = firstNumber + secondNumber;

    // Return the result
    return "The sum of " + firstNumber + " and " + secondNumber + " is: " + sum;
}

// Call the function and display the result
var result = addTwoNumbers();
console.log(result);

// Q4
// Function to perform a calculation based on num1, num2, and operator
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please use +, -, *, or /";
    }
}

// Example usage
var number1 = 10;
var number2 = 5;
var operation = '+';

var result = calculate(number1, number2, operation);

// Display the result in the browser
document.write("Result: " + result);

// Q5
// Function to square a number
function square(number) {
    return number * number;
}

// Example usage
var num = 5;
var result = square(num);

console.log("The square of " + num + " is: " + result);

// Q6
// Function to compute the factorial of a number
function factorial(number) {
    // Check if the input is a non-negative integer
    if (number < 0 || !Number.isInteger(number)) {
        return "Invalid input. Please enter a non-negative integer.";
    }

    // Base case: factorial of 0 is 1
    if (number === 0) {
        return 1;
    }

    // Initialize the result to 1
    var result = 1;

    // Calculate the factorial using a loop
    for (var i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

// Example usage
var num = 5;
var result = factorial(num);

console.log("The factorial of " + num + " is: " + result);

// Q7
// Function to display counting from start to end
function displayCounting(start, end) {
    // Check if the inputs are valid numbers
    if (isNaN(start) || isNaN(end)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Check if start is less than or equal to end
    if (start > end) {
        console.log("Start number should be less than or equal to end number.");
        return;
    }

    // Display the counting sequence in the browser
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

// Example usage
var startNumber = 1;
var endNumber = 10;

displayCounting(startNumber, endNumber);

// Q8

// Outer function to calculate the hypotenuse
function calculateHypotenuse(base, perpendicular) {
    // Nested function to calculate the square of a number
    function calculateSquare(number) {
        return number * number;
    }

    // Calculate the squares of base and perpendicular using the inner function
    var baseSquared = calculateSquare(base);
    var perpendicularSquared = calculateSquare(perpendicular);

    // Calculate the hypotenuse squared
    var hypotenuseSquared = baseSquared + perpendicularSquared;

    // Calculate the hypotenuse by taking the square root of the squared value
    var hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}

// Example usage
var baseLength = 3;
var perpendicularLength = 4;

var result = calculateHypotenuse(baseLength, perpendicularLength);

console.log("The hypotenuse of the right-angled triangle is: " + result);

// Q9
// i. Arguments as value
// Function to calculate the area of a rectangle using values as arguments
function calculateRectangleAreaWithValues(width, height) {
    var area = width * height;
    return area;
}

// Example usage with values as arguments
var widthArg = 5;
var heightArg = 10;

var areaWithValues = calculateRectangleAreaWithValues(widthArg, heightArg);

console.log("Area with values as arguments: " + areaWithValues);

// ii. Arguments as variables
// Function to calculate the area of a rectangle using variables
function calculateRectangleAreaWithVariables() {
    var width = arguments[0];
    var height = arguments[1];

    var area = width * height;
    return area;
}

// Example usage with variables
var widthVar = 7;
var heightVar = 12;

var areaWithVariables = calculateRectangleAreaWithVariables(widthVar, heightVar);

console.log("Area with variables: " + areaWithVariables);

// Q10
// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    str = str.replace(/\s/g, '').toLowerCase();

    // Initialize pointers for the start and end of the string
    var start = 0;
    var end = str.length - 1;

    // Compare characters from both ends inward
    while (start < end) {
        if (str[start] !== str[end]) {
            return false; // If characters don't match, it's not a palindrome
        }
        start++;
        end--;
    }

    return true; // If the loop completes, it's a palindrome
}

// Example usage
var inputString = "madam";
var result = isPalindrome(inputString);

if (result) {
    console.log(inputString + " is a palindrome.");
} else {
    console.log(inputString + " is not a palindrome.");
}

// Q11
// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    // Split the input string into words
    var words = str.split(' ');

    // Initialize an array to store the capitalized words
    var capitalizedWords = [];

    // Loop through each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        // Capitalize the first letter of each word and make the rest lowercase
        var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        // Add the capitalized word to the array
        capitalizedWords.push(capitalizedWord);
    }

    // Join the capitalized words back into a single string
    var result = capitalizedWords.join(' ');

    return result;
}

// Example usage
var inputString = 'the quick brown fox';
var outputString = capitalizeWords(inputString);

console.log('Input string: ' + inputString);
console.log('Output string: ' + outputString);

// Q12
// Function to find the longest word in a string
function findLongestWord(str) {
    // Split the input string into words
    var words = str.split(' ');

    // Initialize variables to keep track of the longest word and its length
    var longestWord = '';
    var maxLength = 0;

    // Loop through each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        // Remove any non-alphanumeric characters from the word
        word = word.replace(/[^a-zA-Z0-9]/g, '');

        // Check if the current word is longer than the current longest word
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
}

// Example usage
var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);

console.log('Input string: ' + inputString);
console.log('Longest word: ' + longestWord);

// Q13
// Function to count the number of occurrences of a letter in a string
function countLetterOccurrences(inputString, targetLetter) {
    // Convert the input string and target letter to lowercase for case-insensitive comparison
    inputString = inputString.toLowerCase();
    targetLetter = targetLetter.toLowerCase();

    // Initialize a counter to keep track of the number of occurrences
    var count = 0;

    // Loop through each character in the input string
    for (var i = 0; i < inputString.length; i++) {
        // Check if the current character matches the target letter
        if (inputString.charAt(i) === targetLetter) {
            count++;
        }
    }

    return count;
}

// Example usage
var inputString = 'JSResourceS.com';
var targetLetter = 'o';

var occurrences = countLetterOccurrences(inputString, targetLetter);

console.log('Input string: ' + inputString);
console.log('Target letter: ' + targetLetter);
console.log('Number of occurrences: ' + occurrences);

// Q14
// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    // Calculate the circumference using the formula 2 * π * radius
    var circumference = 2 * Math.PI * radius;
    
    // Output the result
    console.log("The circumference is " + circumference.toFixed(2));
}

// Function to calculate the area of a circle
function calcArea(radius) {
    // Calculate the area using the formula π * radius^2
    var area = Math.PI * Math.pow(radius, 2);
    
    // Output the result
    console.log("The area is " + area.toFixed(2));
}

// Example usage
var radius = 5; // Replace with the desired radius

calcCircumference(radius);
calcArea(radius);
    
