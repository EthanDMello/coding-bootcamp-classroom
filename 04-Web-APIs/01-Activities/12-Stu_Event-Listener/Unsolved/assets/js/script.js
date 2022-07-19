var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

function increment() {
  count += 1;
  setCounterText();
}

function decrement() {
  if (count == 0) {
    return;
  } else {
    count -= 1;
    setCounterText();
  }
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", increment);
// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", decrement);
