// EXAMPLE 1 - Remove an Element from a Set in JavaScript

const set1 = new Set(['bobby', 'hadz', 'com']);

set1.delete('hadz');

console.log(set1); // 👉️ Set(2) { 'bobby', 'com' }

console.log(set1.has('hadz')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove an Object or Array from a `Set` object in JavaScript

// const set1 = new Set([{id: 1}, {id: 2}]);

// console.log(set1); // 👉️ {{id: 1}, {id: 2}}

// set1.forEach(obj => {
//   if (obj.id === 2) {
//     set1.delete(obj);
//   }
// });

// console.log(set1); // 👉️ { {id: 1} }
