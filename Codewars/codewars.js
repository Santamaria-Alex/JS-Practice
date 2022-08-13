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
