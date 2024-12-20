//PROBLEM 2...Single Dimensional Array

// Creating 2 single dimensional array on where the user will going to input the stated numbers and names when you run the program
// Already indicating the numbers and names to be input
const numbers = prompt("Enter 24,65,21,5,9,32,42,80 AND 57 separated by commas: ").split(',').map(Number); //map(Number) this converts the string input for the numbers array
const names = prompt("Enter Zenvo, Erica, Jordie, Alicia and Rendon separated by commas: ").split(',');

// On this part the two inputted array will became a single array and log it to the console.
// the numbers and names were combined using spread operator(...)
const mergedarray = [...numbers, ...names];
console.log("Merged array:", mergedarray);

// On this part the sort numbers will become numerically reverse and log in console
const sortedNumbers = numbers.slice().sort((a, b) => b - a); //slice()method to creates a copy of the numbers array
console.log("Sorted numbers (descending):", sortedNumbers); //to log the reverse sorted numbers

// just like the number the names was akso sorted in alphabetically arrange by the first letter of their name and log it into the console.
const sortedNames = names.slice().sort(); ///slice() method to copy the names and sort() method sorts the name alphabetically starting with "Alicia" followed by "Erica"
console.log("Sorted names (ascending):", sortedNames); //to log the reverse sorted numbers