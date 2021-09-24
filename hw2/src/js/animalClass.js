class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}
// Take properties from Animal
class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
export { Dog, Duck };
