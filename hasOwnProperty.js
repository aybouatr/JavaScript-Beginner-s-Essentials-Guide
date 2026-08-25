// 1️⃣ Create an object using Object.create(null)

const obj = Object.create(null);

// 2️⃣ Add properties manually

obj.name = "Nour";
obj.age = 21;

console.log(obj);

// [Object: null prototype] { name: 'Nour', age: 21 }

// 3️⃣ Check properties

// --- using "in" ---

console.log("name" in obj);        // true
console.log("age" in obj);         // true
console.log("toString" in obj);    // false ✅ (no prototype, so nothing inherited)

// --- using hasOwnProperty ---

console.log(obj.hasOwnProperty("name"));

// ❌ TypeError: obj.hasOwnProperty is not a function

// --- using Object.hasOwn ---

console.log(Object.hasOwn(obj, "name"));  // true
console.log(Object.hasOwn(obj, "age"));   // true
console.log(Object.hasOwn(obj, "toString")); // false



