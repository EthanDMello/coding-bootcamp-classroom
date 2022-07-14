// Javascript practice

// Make a function that takes a array with numbers and double them and push them to a new array.
// create new array
// loop through existing array
// doubles values and push
// print new array

var numbers = [2, 3, 4, 5];

console.log(numbers);

var doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let a = numbers[i];
  let b = a * 2;
  doubleNumbers.push(b);
}

console.log(doubleNumbers);
