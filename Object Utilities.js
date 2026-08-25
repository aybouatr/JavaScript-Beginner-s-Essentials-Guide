// const student = {
//   name: "Omar",
//   age: 21,
//   grade: "A"
// };

// 3️⃣ Convert entries back into a new object

// 4️⃣ Change all string values to uppercase during conversion

// console.log(Object.keys(student));

// console.log(Object.values(student));
// console.log(Object.entries(student));

// const entries = Object.entries(student);

// const upperCased = Object.fromEntries(
//   entries.map(([key, value]) => [
//     key,
//     typeof value === "string" ? value.toUpperCase() : value
//   ])
// );

// console.log(upperCased);

 const student = {
  name: "Omar",
  age: 21,
  grade: "A"
};

// 1️⃣ Keys
console.log(Object.keys(student));

// 2️⃣ Values
console.log(Object.values(student));

// 3️⃣ Entries
console.log(Object.entries(student));

// 4️⃣ Transform + rebuild
const updated = Object.fromEntries(
  Object.entries(student).map(([key, value]) => [
    key,
    typeof value === "string" ? value.toUpperCase() : value
  ])
);

console.log(updated);
// { name: "OMAR", age: 21, grade: "A" }

  



