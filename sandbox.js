
// Question 1 Ask for full name
let fullName = prompt("Enter your full name:");

// Split name into parts
let nameParts = fullName.trim().split(" ");

// Get initials
let initials = nameParts.map(name => name[0].toUpperCase()).join(".");

// Add final dot
initials += ".";

// Output result
console.log(initials);



// Question 2 Ask for inputs
let sentence = prompt("Enter a sentence:");
let letter = prompt("Enter a letter to find:");

// Find position (first occurrence)
let position = sentence.indexOf(letter);

// Output result
if (position !== -1) {
  console.log(`The letter "${letter}" is at position ${position}`);
} else {
  console.log(`Letter "${letter}" not found`);
}




