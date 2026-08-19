

const student = {
    name: "ayoub",
    age: 24,
    SayHill(greeting, punctuation) {
        console.log(`${greeting} i'am ${this.name} my age is ${this.age} years old${punctuation}`);
    }
};

const holdSayHill = student.SayHill;

// Pass the context, then arguments inside an array []
holdSayHill.apply(student, ["Hello", "!"]);
// Output: "Hello i'am ayoub my age is 24 years old!"
// holdSayHill.call(student);

// holdSayHill.bind(student);



