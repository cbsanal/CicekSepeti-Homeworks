import { Dog, Duck } from './animalClass.js';
import createCards from './cardCreater.js';

let duckImgCounter = 0;
let dogImgCounter = 0;
const animalNames = [
  'Alberta',
  'Verlie',
  'Rudolf',
  'Londa',
  'Canberk',
  'Beyza',
];

// Give properties for each animal
const produceDataForAnimals = (type) => {
  const dataAnimal = {
    name: null,
    image: null,
    age: null,
  };
  if (type === 'dog') {
    dogImgCounter += 1;
    dataAnimal.image = `./assets/dog${dogImgCounter}.jpeg`;
    dataAnimal.name = animalNames[dogImgCounter - 1];
  } else {
    duckImgCounter += 1;
    dataAnimal.image = `./assets/duck${duckImgCounter}.jpeg`;
    dataAnimal.name = animalNames[duckImgCounter + 2];
  }
  const age = Math.floor(Math.random() * 10) + 1;
  dataAnimal.age = age;
  return dataAnimal;
};

const createAnimals = (type) => {
  if (type === 'dog') {
    const animalData = produceDataForAnimals('dog');
    const dog = new Dog(animalData.name, animalData.image, 4, animalData.age);
    // One of them original other is copy
    createCards(dog);
    createCards(dog);
  } else {
    const animalData = produceDataForAnimals('duck');
    const duck = new Duck(animalData.name, animalData.image, 2, animalData.age);
    // One of them original other is copy
    createCards(duck);
    createCards(duck);
  }
};
// Immediately call this function
(() => {
  for (let i = 0; i < 6; i += 1) {
    // 3 duck, 3 dog
    if (i >= 3) {
      createAnimals('duck');
      continue;
    }
    createAnimals('dog');
  }
})();
