function printPrimitiveTypes()
{
    // 1️⃣ String
    let text = "Hello World";
    
    // 2️⃣ Number
    let score = 95;
    
    // 3️⃣ Boolean
    let isActive = true;
    
    // 4️⃣ Null
    let emptyValue = null;
    
    // 5️⃣ Undefined
    let notAssigned;   // undefined by default
    
    // 6️⃣ Symbol
    let uniqueId = Symbol("id");
    
    // 7️⃣ BigInt
    let bigNumber = 1234567890123456789012345678901234567890n;
    
    // Print all values
    console.log("String:", text);
    console.log("Number:", score);
    console.log("Boolean:", isActive);
    console.log("Null:", emptyValue);
    console.log("Undefined:", notAssigned);
    console.log("Symbol:", uniqueId);
    console.log("BigInt:", bigNumber);

}

printPrimitiveTypes();