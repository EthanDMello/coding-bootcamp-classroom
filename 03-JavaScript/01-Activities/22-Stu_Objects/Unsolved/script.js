//WRITE YOUR CODE BELOW

var customerOrder = {
  name: "Coffee",
  numOfSugar: 2,
  ready: false,
};

console.log(customerOrder.name);
console.log(customerOrder.numOfSugar);

if (customerOrder.ready == true) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
