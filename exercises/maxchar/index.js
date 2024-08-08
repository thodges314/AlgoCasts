// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charObject = {};
  let returnValue = str.charAt(0);
  str
    .split('')
    .forEach((char) => (charObject[char] = charObject[char] + 1 || 1));
  Object.keys(charObject).forEach(
    (entry) =>
      (returnValue =
        charObject[entry] > charObject[returnValue] ? entry : returnValue)
  );
  return returnValue;
}

module.exports = maxChar;

// const objects = str.split('').reduce((acc, cv) => {
// 	(acc[cv] = acc[cv] || []).push(cv);
// 	return acc;
// }, {});
// const longest = Object.keys(objects).reduce(
// 	(acc, cv) => {
// 		if (objects[cv].length > acc.count)
// 			acc = { key: cv, count: objects[cv].length };
// 		return acc;
// 	},
// 	{ key: '', count: 0 }
// );
// return longest.key;

// const objects = str.split('').reduce((acc, cv) => {
// 	acc[cv] = acc[cv] + 1 || 1;
// 	return acc;
// }, {});
