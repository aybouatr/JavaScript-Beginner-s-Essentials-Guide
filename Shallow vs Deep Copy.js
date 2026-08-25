// 1️⃣ Create an object with nested data
const original = {
  name: "Nour",
  address: {
    city: "Marrakesh",
    country: "Morocco"
  },
  hobbies: ["reading", "coding"]
};

console.log("=== STEP 2: Spread (shallow) copy ===");

// 2️⃣ Copy it using spread
const shallowCopy = { ...original };

// 3️⃣ Modify nested value
shallowCopy.address.city = "Rabat";
shallowCopy.hobbies.push("gaming");
shallowCopy.name = "Ayoub"; // top-level value, for comparison

// 4️⃣ Observe mutation
console.log("original.name:", original.name);
// "Nour" ✅ unaffected — top-level primitive, safely copied

console.log("original.address.city:", original.address.city);
// "Rabat" ❌ MUTATED! shallow copy shared the same nested object

console.log("original.hobbies:", original.hobbies);
// ["reading", "coding", "gaming"] ❌ MUTATED! same array reference

console.log("original.address === shallowCopy.address:", original.address === shallowCopy.address);
// true — literally the same object in memory


console.log("\n=== STEP 5: structuredClone (deep) copy ===");

// Reset original for a clean comparison
const original2 = {
  name: "Nour",
  address: {
    city: "Marrakesh",
    country: "Morocco"
  },
  hobbies: ["reading", "coding"]
};

// 5️⃣ Repeat using structuredClone()
const deepCopy = structuredClone(original2);

deepCopy.address.city = "Rabat";
deepCopy.hobbies.push("gaming");
deepCopy.name = "Ayoub";

console.log("original2.name:", original2.name);
// "Nour" ✅ unaffected

console.log("original2.address.city:", original2.address.city);
// "Marrakesh" ✅ SAFE — deep copy has its own independent nested object

console.log("original2.hobbies:", original2.hobbies);
// ["reading", "coding"] ✅ SAFE — separate array

console.log("original2.address === deepCopy.address:", original2.address === deepCopy.address);
// false — completely different objects in memory