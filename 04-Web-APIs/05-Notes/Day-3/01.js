// make initial array and comparative variable
var integers = [1, 3, 6, 4, 2, 8, 12, 25, 9, 15, 20];
var highNum = 0;

// create function
const max = () => {
  // loop through array
  for (let i = 0; i < integers.length; i++) {
    // check if current array item is higher
    if (highNum < integers[i]) {
      // if it is, change highNum variable
      highNum = integers[i];
    }
  }
};

// print output
console.log("The highest number is " + highNum + ".");
