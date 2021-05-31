// console.log("The JavaScript is running!");

// let count = 0;

// let tags = document.getElementsByTagName("p");
// let countDisplay = document.getElementsByTagName("h3");
// console.log(countDisplay[0]);

// tags[0].addEventListener("click", () => {
//   console.log("I have been clicked");
//   count = count + 1;
//   console.log(count);
//   countDisplay[0].innerHTML = count;
// });

// let myFavouriteFoods = [
//   "Burger",
//   {
//     words: "This has worked",
//     name: "Jamie",
//     surname: "Edwards",
//     age: 32,
//   },
//   "Tomato Ketchup",
// ];

// let anotherObject = {
//   hobbies: "Tennis",
//   wife: "Kebrina",
// };

// console.log(myFavouriteFoods[1].name + ' ' + myFavouriteFoods[1].surname + ' is ' + myFavouriteFoods[1].age + ' years old.');
// console.log('He likes to play ' + anotherObject.hobbies + ' and is married to ' + anotherObject.wife)

// console.log(JSON.parse(JSON.stringify(anotherObject)));

// anotherObject = Object.assign(anotherObject, { born: "England" });

// anotherObject.born = 'England';

// console.log(anotherObject);

// console.log(myFavouriteFoods);

// myFavouriteFoods.push(anotherObject);

// console.log(myFavouriteFoods);

// const instructorSam = {
//   name: "Sam",
//   cohort: 9,
//   favouriteFood: "potatoes",
// };

// console.log(
//   `${instructorSam.name} has taught a total of ${instructorSam.cohort} cohorts and his favourite food is ${instructorSam.favouriteFood}`
// );

// let array = ["apple", "banana", "chilli", "apple"];

// console.log(array.indexOf("apple")); // 0
// console.log(array.lastIndexOf("apple")); // 3
// console.log(array.includes("banana")); // true

// let menu = ["Wagyu Beef", "Papya Salad", "Cod", "Salmon"];

// console.log(menu.map((word) => word.concat("; Yummy!")));

// function addYumToEveryElement(word) {
//   return word.concat("; Tasty!");
// }

// console.log(menu.map(addYumToEveryElement));

// let menu = ["Wagyu Beef", "Papya Salad", "Cod", "Salmon"];

// console.log(menu.filter((menu) => menu.includes("W")));

// function filterMenuItemsByW(word) {
//   return word.includes("W");
// }

// console.log(menu.filter(filterMenuItemsByW));

// function testBlockScope(input) {
//   if (true) {
//     // added to make a block
//     const greeting = "Hello";
//     let name = input;
//     console.log(greeting + " " + name);
//   }
//   console.log(greeting + " " + name);
// }

// testBlockScope("Sam");

// function testGlobalScope(input) {
//   if (true) {
//     // added to make a block
//     var greeting = "Hello";
//     var name = input;
//     console.log(greeting + " " + name);
//   }
//   console.log(greeting + " " + name);
// }

// testGlobalScope("Sam");

// let stringExampleI = "Hello";
// let stringExampleII = "world";

// let combined = stringExampleI.concat(stringExampleII);
// console.log(combined); // Helloworld

// let indexOfOI = stringExampleI.indexOf("o");
// let indexOfOII = stringExampleII.indexOf("o");

// console.log(indexOfOI, indexOfOII); // 4, 1

// let food = "My favourite food is potato";

// let favFood = food.slice(21);
// console.log(favFood); // potato

// let sentence = "The quick red fox jumped over the lazy brown dog";

// let SENTENCE = sentence.toUpperCase();
// console.log(SENTENCE); //THE QUICK RED FOX JUMPED OVER THE LAZY BROWN DOG

// let sentenceArray = sentence.split(" "); // split the string by every empty space
// console.log(sentenceArray); // [ 'The', 'quick', 'red', 'fox', 'jumped', 'over', 'lazy', 'brown', 'dog' ]

// let today = new Date(1622080523209 - 8.64e+7);
// console.log(today); // 2021-05-26T04:35:17.724Z

// let todaysYear = today.getFullYear();
// let todaysMonth = today.getMonth();
// let todaysDay = today.getDay();
// console.log(todaysYear, todaysMonth, todaysDay); // 2021 4 3
// let todayHourRightNow = today.getHours();
// console.log(todayHourRightNow); //12

// let todaysDate = today.toDateString();
// console.log(todaysDate); // Wed May 26 2021

// let timeRightNow = today.toLocaleTimeString();

// console.log(timeRightNow);

// console.log(Date.now()); // 1622002472861 - Time in milliseconds since Jan 1 1970

// console.log(Math.random()); // Returns a random integer from 0-1 - 0.6795378434505925
// console.log(Math.floor(0.6795378434505925)); //Returns the largest integer less than or equal to - 0
// console.log(Math.floor(4.22134512321232)); // 4

// console.log(Math.round(0.6795378434505925)); // 1
// console.log(Math.pow(2, 3)); // basically 2 to the power of 3 (2*2*2) 8
// console.log(Math.PI); // returns pi, 3.141592653589793

let a = 19;
let b = "19";
let c = "hello";
// console.log(Number.isNaN(a)); // false
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false
// console.log(Number.isNaN(NaN)); // true

// let paragraphTags = document.getElementsByTagName("p");
// paragraphTags[1].innerHTML = "some dynamic value";

// let contactButton = document.getElementById("contactUs");
// contactButton.style.backgroundColor = "#ffffff";

// let demoObject = {
//   purpose: "contain many datatype",
//   array: ["item1", 1, true],
//   nestedObject: { name: "sam", age: 29 },
// };

// let demoArray = ["Arrays", "Can", "Contain", undefined, null, 99];

// this prompt should appear on click
let element = document.getElementById("unique");

//assign an event listener for a click event

element.addEventListener("click", function () {
  //if the click event is fired off, make the prompt appear

  let name = prompt("What is your name?");
  // after the prompt assign the new data and render it on the page

  element.innerHTML = name;
});
