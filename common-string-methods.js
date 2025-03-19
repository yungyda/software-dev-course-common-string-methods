// Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching

// Check if the word "JavaScript" is in the string using includes
let hasJavaScript = inputString.includes("JavaScript");
// Expected output: true

// Find the position of the word "Coding" in the string using indexOf
let codingPosition = inputString.indexOf("Coding");
// Expected output: 15

// Check if the string starts with "Welcome" using startsWith
let startsWithWelcome = inputString.trim().startsWith("Welcome");
// Expected output: true

// Check if the string ends with "today." using endsWith
let endsWithToday = inputString.trim().endsWith("today.");
// Expected output: true

// 2. Transforming

// Convert the string to all lowercase letters using toLowerCase
let lowercaseString = inputString.toLowerCase();
// Expected output: "  welcome to the coding bootcamp! learn javascript today.  "

// Convert the string to all uppercase letters using toUpperCase
let uppercaseString = inputString.toUpperCase();
// Expected output: "  WELCOME TO THE CODING BOOTCAMP! LEARN JAVASCRIPT TODAY.  "

// Remove the extra spaces from the beginning and end of the string using trim
let trimmedString = inputString.trim();
// Expected output: "Welcome to the Coding Bootcamp! Learn JavaScript today."

// Replace the word "JavaScript" with "coding" using replace
let replacedString = inputString.replace("JavaScript", "coding");
// Expected output: "  Welcome to the Coding Bootcamp! Learn coding today.  "

// 3. Breaking Apart

// Split the string into an array of words using split with a space (" ") as the delimiter
let wordsArray = inputString.trim().split(" ");
// Expected output: ["Welcome", "to", "the", "Coding", "Bootcamp!", "Learn", "JavaScript", "today."]

// 4. Retrieving

// Retrieve the first character of the trimmed string using charAt
let firstCharacter = trimmedString.charAt(0);
// Expected output: "W"

// Extract the word "Bootcamp" from the string using slice
let extractedBootcamp = trimmedString.slice(19, 27);
// Expected output: "Bootcamp"

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
