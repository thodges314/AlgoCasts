// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str
    .toLowerCase()
    .split('')
    .reduce(
      (acc, cv) => acc + (['a', 'e', 'i', 'o', 'u'].includes(cv) ? 1 : 0),
      0
    );
}

module.exports = vowels;
