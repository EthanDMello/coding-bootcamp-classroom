//Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// loop until input:
// output + current iteration

const sum = (number) => {
  let output = 0;

  for (i = 1; i <= number; i++) {
    output += i;
  }

  return output;
};
