// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const buildCharObject = (strng) => {
  const charObject = {};
  strng
    .toLowerCase()
    .replace(/[^a-z]+/gi, "")
    .split("")
    .forEach((char) => (charObject[char] = charObject[char] + 1 || 1));
  return charObject;
};

function anagrams(stringA, stringB) {
  const aCharMap = buildCharObject(stringA);
  const bCharMap = buildCharObject(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }
  return true;
}

module.exports = anagrams;

// MY SOLUTION BELOW
// const makeAlphaString = (strng) =>
//   strng
//     .toLowerCase()
//     .replace(/[^a-z]+/gi, "")
//     .split("")
//     .sort()
//     .join("");

// function anagrams(stringA, stringB) {
//   return makeAlphaString(stringA) === makeAlphaString(stringB);
// }
