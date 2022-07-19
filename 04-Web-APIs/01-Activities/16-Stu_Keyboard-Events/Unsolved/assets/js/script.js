function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

elementKey = [];
document.querySelector("#key").innerHTML = elementKey;
function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters =
    "abcdefghijklmnopqrstuvwxyz0123456789 .,'@".split("");
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elementKey.length; i++) {
      elementKey[i].textContent += event.key;
      console.log(elementKey);
    }
  }
  console.log(elementKey);
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
