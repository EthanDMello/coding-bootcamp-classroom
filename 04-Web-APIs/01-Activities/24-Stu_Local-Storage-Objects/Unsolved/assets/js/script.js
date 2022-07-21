var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var submissionNum = 1;

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  var submission = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  // TODO: Set new submission to local storage
  var submissionNumStr = submissionNum.toString();
  // console.log(submissionNumStr);
  localStorage.setItem(submissionNumStr, JSON.stringify(submission));
  submissionNum = parseInt(submissionNumStr, 10);
  // console.log(submissionNum);
  submissionNum++;
});
