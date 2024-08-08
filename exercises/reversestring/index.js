// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((acc, cv) => cv + acc, '');
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = '';
//   for (let i = 0; i < str.length; i++) reversed = str[i] + reversed;
//   return reversed;
// }

// function reverse(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) reversed += str[i];
//   return reversed;
// }

// function reverse(str) {
//   let reversed = '';
//   for (let chr of str) reversed = chr + reversed;
//   return reversed;
// }
