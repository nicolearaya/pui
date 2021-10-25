/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg"
  this.type = "Bird";
}

/*** Global Variables ***/
var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

var randomAnimal = generateRandomAnimal();
/*** Document Load ****/
function onLoad() {
  console.log(localStorage);
  // generate a random animal when the document opens
  if (localStorage.length == 0) {
    document.getElementById("saveAnimal").textContent == "Save Me!";
    document.getElementById("animal-properties").textContent = randomAnimal.name + "  " + randomAnimal.age + "years old";
    document.getElementById("animal-img").setAttribute("src", randomAnimal.image)
  }
  else if (localStorage.length !== 0) {
    document.getElementById("saveAnimal").textContent = "Clear Me!";
    let storedAnimal = JSON.parse(localStorage.getItem("myAnimal"));
    console.log(storedAnimal);
    document.getElementById("animal-properties").textContent = storedAnimal.name + "  " + storedAnimal.age + "years old";
    document.getElementById("animal-img").setAttribute("src", storedAnimal.image)
  }
  // update the page based on the animal properties

};

/*** Save animal to Local Storage ***/
function saveAnimal() {
  if (document.getElementById("saveAnimal").textContent == "Clear Me!") {
    localStorage.removeItem("myAnimal");
    document.getElementById("feedback").textContent = "Cleared!";
    document.getElementById("saveAnimal").style.display = "none";
  }

  if (document.getElementById("saveAnimal").textContent == "Save Me!") {
    console.log(randomAnimal)
    localStorage.setItem("myAnimal", JSON.stringify(randomAnimal));
    document.getElementById("feedback").textContent = "Saved!";
    document.getElementById("saveAnimal").style.display = "none";

  }

}
