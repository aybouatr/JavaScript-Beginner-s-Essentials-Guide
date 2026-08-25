class Car
{
    model;

    constructor(name ,speed)
    {
        this.name = name;
        this.speed = speed;
    }

    static TestStatic()
    {
        console.log(`Test All this information `);
    }

    printAllInfo()
    {
        return (`this all info about ${this.name} and speend ${this.speed} and model ${this.model}`);
    }
}


const Test = new Car("Dacia",130);

Car.TestStatic();

console.log(Test.printAllInfo());

Test.TestStatic();