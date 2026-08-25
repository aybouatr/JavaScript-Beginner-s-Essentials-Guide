class CCar 
{
    constructor(brand)
    {
        this._brand = brand;
    }

    drive()
    {
        console.log(`hello from brand ${this._brand}`);
    }
};



function Car(brand)
{
    this._brand = brand;
}

Car.prototype.drive = function ()
{
    console.log(`hello from brand ${this._brand}`);
}

const ccar = new Car("mercedes");

ccar.drive();
console.log(ccar.prototype.drive());


const car = new CCar("mercedes");

car.drive();
console.log(car.prototype.drive());


