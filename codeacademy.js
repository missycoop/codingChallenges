
// ARRAYS:
// Let’s find the index of a particular element in groceryList using .indexOf().

// Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

// Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.)

// Read about .indexOf() at MDN’s indexOf documentation.



const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()

groceryList.unshift('popcorn')

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex)

// Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.

// The first array element should hold the elements 1 and 2 in that order.
// The second array element should hold the elements 3 and 4 in that order.
// The third array element should hold the elements 5 and 6 in that order.

let numberClusters = [[1, 2],[3, 4],[5, 6]];

// Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
const target = numberClusters[2][1]

// we learned these concepts regarding arrays:

// Arrays are lists that store data in JavaScript.
// Arrays are created with brackets [].
// Each item inside of an array is at a numbered position, or index, starting at 0.
// We can access one item in an array using its index, with syntax like: myArray[0].
// We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
// Arrays have a length property, which allows you to see how many items are in an array.
// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
// Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
// Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
// Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
// Arrays mutated inside of a function will keep that change even outside the function.
// Arrays can be nested inside other arrays.
// To access elements in nested arrays chain indices using bracket notation.
// Learning how to work with and manipulate arrays will help you work with chunks of data!


// LOOPS: 

// Create a program that loops from 5 to 10 and logs each number to the console.for (let counter = 5; counter < 11; counter++) {
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  } 
  
//   Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
  // The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

//   Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

// Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i=0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + (vacationSpots[i]))
}
  
// Log each element from rapperArray in a for loop with the iterator variable i.
// 2.
// After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
// 3.
// Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
// In this lesson, we learned how to write cleaner code with loops. You now know:

// Loops perform repetitive actions so we don’t have to code that process manually every time.
// How to write for loops with an iterator variable that increments or decrements
// How to use a for loop to iterate through an array
// A nested for loop is a loop inside another loop
// while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.
// do...while loops run code at least once— only checking the stopping condition after the first execution
// The break keyword allows programs to leave a loop during the execution of its block

//HIGHER ORDER Functions:
// Save a variable, time2p2. Assign as its value the result of invoking the timeFuncRuntime() function with the checkThatTwoPlusTwoEqualsFourAMillionTimes() function.
// Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'
// Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

// You may use any form of callback you prefer.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem) { 
  console.log('I want to eat a ' + fruitItem);
});

//MAP

Add your code under the animals array and before the line console.log(secretMessage.join(''));

// Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


//FILTER
// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.
// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7
});

//FINDINDEX()
// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

