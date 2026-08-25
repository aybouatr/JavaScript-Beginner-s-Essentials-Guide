
let key = "engine size";
let pValueEmail = "ayoub@hmail.com";
let pNameEmail = "Email";

const Car = {
    bran: "Mercedes",
    model: "190",
    year: 1990,
    [key]: "1020",
    [pNameEmail]: pValueEmail,

    Adress = {
        city: "Missour",

    },

    SayHello : function()
    {
        console.log("hello from object Car");
        
    }
};

Car.color = "red";

console.log(Car.year);
console.log(Car.bran);
console.log(Car.model);
console.log(Car.color);
console.log(Car.Email);

console.log(Car["engine size"]);




Car.SayHello();