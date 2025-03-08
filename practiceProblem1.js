/*Exercise 1: Retrieve and Add Two Code Points
Objective: Extract the Unicode code points of the first two characters of a string,
add them together, and return the result. */

let inputString = "Hi";
let sumCodePoints = inputString.charCodeAt(0) + inputString.charCodeAt(1);
console.log("The sum code points is " +sumCodePoints);

/*Exercise 2: Generate a String from Two Code Points
Objective: Take two numeric Unicode code points,
convert them to characters using String.fromCharCode,
and combine them into a single string. */

let codePoint1 = 65;
let codePoint2 = 66;
let combinedString = String.fromCharCode(codePoint1) + String.fromCharCode(codePoint2);
console.log("The combined string is " +combinedString);

/*Exercise 3: Find the Character Difference
Objective: Extract the Unicode code points of two given characters from a string
and calculate the absolute difference between them.*/

let inputString1 = "Cat";
let index1 = 0;
let index2 = 2;
let codePointDifference = inputString1.charCodeAt(index1) - inputString1.charCodeAt(index2);
console.log("The code point difference is " +codePointDifference);
