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

//testing
