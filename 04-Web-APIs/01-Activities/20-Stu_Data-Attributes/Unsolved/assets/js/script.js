var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  if (element.getAttribute("data-state") === "hidden") {
    element.setAttribute("data-state", "visible");
    element.textContent = element.getAttribute("data-number");
  } else {
    element.setAttribute("data-state", "hidden");
    element.textContent = "";
  }
});
