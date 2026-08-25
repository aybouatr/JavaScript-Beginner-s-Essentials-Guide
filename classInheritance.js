const animal = 
{
  eats: true
};

const dog = Object.create(animal);

dog.barks = true;

console.log(dog.barks); // true (own property)
console.log(dog.eats);  // true (from prototype)