//ARRAYS
// 1. Declare an empty array using JS literal notation to store
//student names in future.

let emptyArray = [];

// 1. Declare an empty array using JS object notation to store
//student names in future.

var arrayA = []
var arrayB = new Array()

//3. Declare and initialize a strings array.

String[] stu_names= new String[]{"tahira","zoya"};
String[] stringArray = new String[]{"stringA", "stringB"};

//4. Declare and initialize a numbers array.

int[] numbers= new int[]{1,2,3};


//5. Declare and initialize a boolean array.
let arr_name = [];
for(initialize_variable; condition; increment/decrement){
    arr_name.push(false/true);
}
//example
let arr1 = [];
for (let i = 0; i < 5; i += 1) {
	arr1.push(true);
}
console.log(arr1);

// 6.Declare and Initialize an array and store available
// education qualifications in Pakistan

var array_list = ["HSC","SSC","BCOM","MS", "M. Phil.", "PhD"]

//7.Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// Define an array to store student names
const studentNames = ["Alice", "Bob", "Charlie"];

// Define an array to store student scores (out of 500)
const studentScores = [420, 380, 450];

// Calculate percentages for each student
const totalMarks = 500;
const studentPercentages = studentScores.map(score => (score / totalMarks) * 100);

// Display scores and percentages
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${studentNames[i]} scored ${studentScores[i]} out of ${totalMarks}. Percentage: ${studentPercentages[i].toFixed(2)}%`);
}

//9. write the code of the following realted to array method  :
// Initialize an array with color names
let colors = ["red", "green", "blue"];

// Display the array elements in the browser
console.log("Initial array:", colors);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
console.log("Array after adding color to the beginning:", colors);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
console.log("Array after adding color to the end:", colors);

// c. Add two more colors to the beginning of the array
colors.unshift("yellow", "orange");
console.log("Array after adding two colors to the beginning:", colors);

// d. Delete the first color in the array
colors.shift();
console.log("Array after deleting the first color:", colors);

// e. Delete the last color in the array
colors.pop();
console.log("Array after deleting the last color:", colors);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to the desired position/index
let indexToAddColor = parseInt(prompt("Enter the index to add color:"));
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAddColor, 0, colorToAdd);
console.log("Array after adding color at the specified index:", colors);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from the user-defined position/index
let indexToDelete = parseInt(prompt("Enter the index to delete color(s) from:"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
console.log("Array after deleting colors from the specified index:", colors);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// Array to store student scores
let studentScores=[87, 65, 92, 78, 70];
// Sorting the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});
// Displaying the sorted array
console.log("Sorted student scores in ascending order:", studentScores);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// Copy 3 array elements from cities array to selectedCities array
let selectedCities = cities.slice(0, 3);

// Display the selectedCities array
console.log("Selected cities:", selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Array containing strings
var arr = ["This", "is", "my", "cat"];

// Concatenate array elements into a single string using the join() method
var concatenatedString = arr.join(" ");

// Display the concatenated string
console.log(concatenatedString);


//13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Create an array to store device names
let devices = [];

// Store device names in the array
devices.push("keyboard");
devices.push("mouse");
devices.push("pointer");
devices.push("monitor");

// Access device names in the order they were stored
console.log("First device:", devices.shift());
console.log("Second device:", devices.shift());
console.log("Third device:", devices.shift());
console.log("Fourth device:", devices.shift());


//Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

// Create an array to store device names
let devices = [];

// Store device names in the array
devices.push("keyboard");
devices.push("mouse");
devices.push("pointer");
devices.push("monitor");

// Access device names in reverse order (LIFO)
console.log("Fourth device:", devices.pop());
console.log("Third device:", devices.pop());
console.log("Second device:", devices.pop());
console.log("First device:", devices.pop());

//15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// Array containing phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the select menu HTML string
let selectMenu = "<select>";

// Add options for each manufacturer
phoneManufacturers.forEach(manufacturer => {
    selectMenu += `<option value="${manufacturer}">${manufacturer}</option>`;
});

// Close the select menu
selectMenu += "</select>";

// Write the select menu HTML string to the document
document.write(selectMenu);
