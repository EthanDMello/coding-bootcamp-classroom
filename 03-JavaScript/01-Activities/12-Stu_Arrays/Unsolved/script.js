// WRITE YOUR CODE HERE

var studentNames = ["Ethan", "Baer", "Zohaib", "Akeem"];

console.log(studentNames);

for (let i = 0; i < studentNames.length; i++) {
  console.log("Welcome to the class " + studentNames[i] + "!");
  if (studentNames[0] != "Ethan") {
    console.log(studentNames[0] + " is in class");
  }
}
