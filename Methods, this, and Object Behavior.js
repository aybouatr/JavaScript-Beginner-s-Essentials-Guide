const car = {
    brand: "BMW",
    showBrand () {
        console.log(`brand : ${this.brand}`);
    }
}

const student =
{
    name: "Ali",
    grade: 95,
    info()
    {
        console.log(`${this.name} has a grade of ${this.grade}`);
    },
};

const user = {
  name: "Nour",
  show() {
    console.log(this.name);
  }
};

const obj = 
{
  value: 10,
  print: () => console.log(this.value)
};

obj.print.call; // ??
