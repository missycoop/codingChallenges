// EVEN OR ODD 8: Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
        if (number % 2 == 0) {
              return "Even";
            } else {
              return "Odd";
            }
          }
//or 
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

  //FEB2021
// Convert a Number to a String: We need a function that can transform a number into a string.What ways of achieving this do you know?
function numberToString(num) {
  let numberToString =  num.toString();
    return numberToString
  }

  // REVERSE A STRING: Complete the solution so that it reverses the string passed into it.

  function solution(str){
    return str.split("").reverse().join("");
   }

  //  STING REPEAT: Write a function called repeat_str which repeats the given string src exactly count times.
   function repeatStr (n, s) {
    if (n < 1) return '';
     var  repeatStr = '';
     while (n > 1) {
         if (n & 1)  repeatStr += s;
         n >>= 1, s += s;
     }
     return  repeatStr + s;
 }
 //BETTER ^ 
 function repeatStr (n, s) {
  return s.repeat(n);
}



// Remove First and Last Character: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
  var result = str.slice(1,-1);
    return result
  }
  //or ^
  const removeChar = str => str.slice(1,-1)


  // Convert boolean values to strings 'Yes' or 'No': Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 
    if (bool === true){
      return "Yes";
  }else { 
     return "No";
  }


//OR: 
function boolToWord( bool ){
return bool ? 'Yes':'No';}


// Remove String Spaces: Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return ( x.split(' ').join('') );
}

// We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  let parsed = parseInt(str);
    return parsed;
  }

  // SUM ARRAY: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

  function sum (numbers) {
    var total = 0;
        for (i = 0; i < numbers.length; ++i) {
             total += numbers[i]; // add each element in an array to total
        }
        return total;
  }

//Jaden Case

String.prototype.toJadenCase = function () {
  let jadenCase = '';
  let capitalize = true;

  for (let i = 0; i < this.length; i++) {
    const letter = this[i];
    if (letter === ' ') {
      capitalize = true;
      jadenCase += ' ';
    } else {
      if (capitalize) {
        jadenCase += letter.toUpperCase();
        capitalize = false;
      } else {
        jadenCase += letter.toLowerCase();
      }
    }
  }

  return jadenCase;
};

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();
console.log(jadenStr);

//A Needle in the Haystack
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    const currentValue = haystack[i];
    if (currentValue === 'needle') {
      return `found the needle at position ${i}`;
    }
  }
}

//Flatten
var flatten = function (array){
  let flattened = [];
  array.forEach((currentValue) => {
    if (Array.isArray(currentValue)){
      currentValue.forEach((innerValue) => {
        flattened.push(innerValue);
      });
    }else {
      flattened.push(currentValue);
    }
  });
  return flattened;
}

//my head is at the wrong end
function fixTheMeerkat(arr) {
  const tail = arr.shift();
   const head = arr.pop();
   arr.unshift(head);
   arr.push(tail);
   return arr;
 }


 //Tic-Tac-Toe-like table Generator
 function displayBoard(board, width){
  let result = '';
  let currentCol = 0;
  for (let i = 0; i < board.length; i++) {
    const element = board[i];
    result += ` ${element} ${currentCol === (width - 1) ? '\n' : '|'}`;
    currentCol++;
    if (currentCol == width) {
      currentCol = 0;
      if (i !== board.length - 1) {
        result += '-'.repeat((width * 3) + (width - 1)) + '\n';
      }
    }
  }
  result = result.slice(0, -1);
  return result;
}

//sort array by string length

function sortByLength (array) {
  array.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });
  return array;
}

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length);
}

//validate credit card number
function validate(n){
  let double = false;
  const digits = n.toString().split('');
  return digits.reduceRight((sum, digit) => {
    digit = Number(digit);
    if (double) {      
      digit *= 2;
    }
    double = !double;
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
    return sum;
  }, 0) % 10 === 0;
}

//longest common subsequence

function LCS(x, y) {
  if (!x.length || !y.length) return '';
  let sequence = '';
  let lastX = x[x.length - 1];
  let lastY = y[y.length - 1];
  if (lastX === lastY) {
    sequence += lastX;
    x = x.slice(0, -1);
    y = y.slice(0, -1);
    return LCS(x, y) + sequence;
  }
  const left = LCS(x, y.slice(0, -1));
  const right = LCS(x.slice(0, -1), y);
  return (left.length > right.length ? left : right) + sequence;
}