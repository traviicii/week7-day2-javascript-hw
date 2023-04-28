//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }
}
console.log(person3['pizza'])

favorites = (thing) => {
    let favoriteFoods = [];

    //this allows me to use the variable key and value for iterating through the Person object
    for (let key in thing) {
      let value = thing[key];
        
      // if the value is an array push all its contents to the favoriteFoods array. The spreader function/syntax (...) added each value individually instead or the entire array at once. Very cool, super useful
      if (Array.isArray(value)) {
        favoriteFoods.push(...value);
        //if the value is an object/dictionary (shakes) try to push all the values to favoriteFoods array
      } else if (typeof value === 'object') {
        favoriteFoods.push(...Object.values(value));
        //otherwise if the value is a string or single item append/push it to favoriteFoods
      } else {
        favoriteFoods.push(value);
      }
    }
  
    console.log(`Favorite food dishes: ${favoriteFoods.join(', ')}.`);
  }
  

console.log(favorites(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `This person's name is ${this.name} and they are ${this.age} years old.`
    };

    this.ageUp = () => {
        this.age += 1;
    }
}

const p1 = new Person('Travii', 950)
// console.log(p1.name, p1.age)
// console.log(p1.printInfo())
// p1.ageUp()
// console.log(p1.printInfo())
// for (let i=0; i < 6; i++) {
//     p1.ageUp()
//     console.log(p1.printInfo())
// }
// console.log(p1.name, p1.age)

const p2 = new Person('Rockston', 0)
console.log(p1.name, p1.age)
console.log(p1.printInfo())
console.log(p2.name, p2.age)
console.log(p2.printInfo())
for (let i=0; i < 3; i++) {
    p1.ageUp()
    p2.ageUp()
}
console.log(p1.name, p1.age)
console.log(p1.printInfo())
console.log(p2.name, p2.age)
console.log(p2.printInfo())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

howBig = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length < 10){
                resolve('Small Number')
            }
            else{reject('Big word')}
        })}
        
const str1 = 'thiswordissuperlong'
const str2 = 'thisshort'

howBig(str1).then((result) => {console.log(result)}).catch((error) => {console.log(error)});
howBig(str2).then((result) => {console.log(result)}).catch((error) => {console.log(error)});        

// =============================================
// Codewars Problems

// Previously done in Python
// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list) {
    let mini = list[0];
    for (let i of list) {
      if (i < mini) {
        mini = i;
      }
    }
    return mini;
  }
  
var max = function(list) {
    let maxi = list[0];
    for (let i of list) {
      if (i > maxi) {
        maxi = i;
      }
    }
    return maxi;
  }
  
// Only done in Javascript
// Opposite Number
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
opposite = (number) => {
    if ( number > 0){
      return -number
    }
    else if ( number < 0){
      return number * -1
    }
    else { return number}
  }

// also wtf
opposite = () => {
    return -1
}

// EXTRA PROBLEM
// Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
  let rev = []
  while (n > 0){
    rev.push(n);
    n -= 1;
  }
  return rev;
};