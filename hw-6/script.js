// Задача номир 1
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 1996,
  };
  console.log(car);
  
  2;
  car.year = 2024;
  
  3;
  
  car.color = "blue";
  
  4;
  
  console.log(car.year);
  
  5;
  
  delete car.model;
  
  6;
  
  function myObject() {
    return `Ваша машина ${car.brand} , Год автомашины:${car.year}`;
  }
  console.log(myObject());
  
  7;
  
  const person = {
    city: "Bishkek",
    map: "Kyrgyzstan",
    address: {
      name: "KGUST",
      adres: "Ахунбаева",
    },
  };
  console.log(person);
  
  8;
  const kutman = {
    name: "kutma",
    surnemi: "kubanchbekov",
    age: 19,
  };
  
  const simon = {
    name: "kutma",
    surnemi: "kubanchbekov",
    age: 19,
  };
  console.log(kutman === simon);
  
  9;
  const jop = "jop";
  const value = "programFront";
  simon[jop] = value;
  console.log(simon);
  
  10;
  const objektNu = {
    name: "adilet",
    surname: "zamidinov",
    age: 24,
  };
  const myObjectOne = Object.assign({}, objektNu);
  
  11;
  
  myObjectOne.age = 29;
  console.log(objektNu);
  console.log(myObjectOne);
  
  function nuris(name, age) {
    let student = {
      name,
      age,
    };
    return student;
  }
  console.log(nuris("Kutman", 19));
  
  12;
  
  let strike = (names, newAge) => {
    people.age = newAge;
  };
  let people = {
    name: "kutman",
    age: 19,
    surname: "kubanychbekov",
  };
  console.log(people);
  console.log(strike("people", 25));
  
  13;
  
  function fabrikFunkshin(type, sound) {
    return (otvet = {
      type: type,
      sound: sound,
    });
  }
  console.log(fabrikFunkshin("dog", "voof"));