//         Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  const min = numbers.sort((a, b) => a - b);

  return min[0] + min[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const split = s1.split("").concat(s2.split("")).sort();
  const unique = [...new Set(split)];

  return unique.join("");
}

//better solution
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest("aretheyhere", "yestheyarehere"));

//3
//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples: []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
function likes(names) {
  console.log(names);

  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

//7kyu
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
  const num = numbers.split(" ");

  const high = Math.max(...num);
  const low = Math.min(...num);

  return `${high} ${low}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//6kyu
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
console.log(persistence(39));

//8kyu
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
function sameCase(a, b) {
  const letter =
    a.toUpperCase() !== a.toLowerCase() && b.toUpperCase() !== b.toLowerCase();
  const upper = /^[A-Z]*$/.test(a) && /^[A-Z]*$/.test(b);
  const lower = /^[a-z]*$/.test(a) && /^[a-z]*$/.test(b);

  if (!letter) {
    return -1;
  } else if (upper || lower) {
    return 1;
  } else if ((letter && !upper) || !lower) {
    return 0;
  }
}
console.log(sameCase("a", "b"));
/////////////////////////////////////////////////////////////////////////

// function orderWeight(strng) {
//   const num = strng.split(" ");
//   const num2 = num.map(Number);

//   const single = num.map((a) => a.split(""));

//   for (let i = 0; i <= strng.length; i++) {
//     const arr = single[i].map(Number);

//     const sum = arr.reduce((partialSum, a) => partialSum + a, 0);

//     console.log(sum);
//   }

//   //   const sum = num2.reduce((partialSum, a) => partialSum + a, 0)

//   console.log(strng);
// }

// orderWeight("103 123 4444 99 2000");

/////////////////////////////////////////////////////////////////////////
// /8kyu
// Write a function that returns a string in which firstname is swapped with last name.
// "john McClane" --> "McClane john"
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(nameShuffler("alex Santamaria"));

/////////////////////////////////////////////////////////////////////////
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x) {
  return x.map(Number).reduce((a, b) => a + b);
}
console.log(sumMix([9, 3, "7", "3"]));
////////////////////////////////////////////////////////////
// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
function isPythagoreanTriple(integers) {
  const num = integers.sort(function (a, b) {
    return a - b;
  });

  const c = num[2] ** 2;
  const a = num[0] ** 2;
  const b = num[1] ** 2;

  if (c === a + b) {
    return true;
  } else {
    return false;
  }
}
console.log(isPythagoreanTriple([6, 8, 10]));
///////////////////////////////////////////////////
//7kyu
//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
function smallEnough(a, limit) {
  return a.every((x) => x <= limit);
}
//////////////////
//8kyu
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  const x = Array.from(String(n), Number);
  return x.reverse();
}
//////////////////
//8kyu
//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  return arr
    .filter((n) => {
      return n > 0;
    })
    .reduce((a, b) => a + b, 0);
}
/////////////////
//8kyu
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
////////
//8kyu
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}
//////////
//8kyu
//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return -number;
}
////////7kyu
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  const x = Array.from(String(n), Number).sort().reverse();
  return +x.join("");
}
/////////8kyu
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x) {
  return x.sort().reduce((a, b) => a * b);
}
//////8kyu
//Complete the solution so that it reverses the string passed into it.
function solution(str) {
  return str.split("").reverse().join("");
}
////7kyu
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
  return s.substring(
    Math.ceil(s.length / 2 - 1),
    s.length % 2 === 0 ? Math.ceil(s.length / 2 + 1) : Math.ceil(s.length / 2)
  );
}
//7kyu
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
//7kyu
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
  const x = [...new Set(str.toLowerCase().split(""))];

  return x.length === str.toLowerCase().length ? true : false;
}
//8kyu
//Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
function typeValidation(variable, type) {
  return typeof variable === type;
}
//8kyu
//Your mission is to implement a function that converts the following potentially harmful characters: (< --> &lt;) (> --> &gt;) (" --> &quot;)(& --> &amp;)
function htmlspecialchars(formData) {
  const chars = { "<": "&lt", ">": "&gt", '"': "&quot", "&": "&amp" };
  formData = formData.replace(/[<>"&]/gi, (m) => chars[m] + ";");
  return formData;
}
function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
//7kyu
//Write a function that produces an array with the numbers 0 to N-1 in it.
//arr(5) // => [0,1,2,3,4]
function arr(n) {
  var newArr = [];
  for (var i = 0; i < n; i++) {
    newArr.push(i);
  }
  return newArr;
}
//7kyu//Given an integral number, determine if it's a square number:
var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0; //checks if n is complete number
};
//8kyu
//If the number has an integer square root, take this, otherwise square the number.
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]
function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}
//8kyu
//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
function index(array, n) {
  return array[n] ? array[n] ** n : -1;
}
//8kyu
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  return str.slice(1, -1);
}
//5kyu
//Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
function anagrams(word, words) {
  return words.filter(
    (x) => x.split("").sort().join("") === word.split("").sort().join("")
  );
}
//6kyu
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digitalRoot(n) {
  //not sure why this works but it does
  //     console.log(n%9||9)
  const sum = n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  return sum >= 10 ? digitalRoot(sum) : sum;
}
//8kyu
//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//if x > y: 3 points (win); if x < y: 0 points (loss) ; if x = y: 1 point (tie)
function points(games) {
  let total = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      total += 3;
    } else if (games[i][0] === games[i][2]) {
      total += 1;
    }
  }
  return total;
}
//8kyu
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
//8kyu
//Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
  const a = x.toLowerCase().split("").reverse().join("");
  return x.toLowerCase() === a ? true : false;
}
//8kyu
//Write function bmi that calculates body mass index (bmi = weight / height2). if bmi <= 18.5 return "Underweight" ; if bmi <= 25.0 return "Normal" ; if bmi <= 30.0 return "Overweight" ;if bmi > 30 return "Obese"
function bmi(weight, height) {
  const b = weight / (height * height);
  return b <= 18.5
    ? "Underweight"
    : b <= 25
    ? "Normal"
    : b <= 30
    ? "Overweight"
    : "Obese";
}
