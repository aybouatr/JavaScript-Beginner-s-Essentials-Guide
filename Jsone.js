// Task 1

// Store an object in localStorage using JSON, then read and print one property.

let js = {name: "ali",age: 32};

let ou = JSON.stringify(js,null,4);

console.log(ou);

localStorage.setItem("user1",ou);

let kk = localStorage.getItem("user1");
let parsed = JSON.parse(kk);
console.log(parsed.name); // "al

// Task 2
// Parse a JSON API-like response and print the user’s name.



// Task 3
// Create an object with undefined and null, stringify it, and observe the result.



// Task 4
// Store a Date in JSON, parse it back, and convert it to a real Date object.



// Task 5
// Wrap JSON.parse() in try/catch and safely handle invalid JSON.

