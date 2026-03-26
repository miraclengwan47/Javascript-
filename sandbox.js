
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



