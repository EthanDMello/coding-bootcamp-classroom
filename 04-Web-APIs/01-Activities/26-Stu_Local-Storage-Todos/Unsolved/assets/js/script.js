var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// Clear the todo list on the page and adds new ones.
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // replaces the HTML of the HTML tag todo-list with nothing, clears it.
  // adds the length of the array to the "todo count" of the HTML.
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // TODO: Describe the functionality of the following `for` loop.
  // going through the todos array adding the content of the array to the
  // to a newly created list element with an attribute of data index with the
  // place in the array
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// initiates the start of the program by getting local stored information
function init() {
  // TODO: What is the purpose of the following line of code?
  // converts the string todos from local storage.
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // if the local storage is empty make the empty local storage the current storage.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // calls rendered todos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // set the local storage to the current list
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// check when the form is done
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if the text enter is empty break out of the function.
  if (todoText === "") {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  // add the text to the array
  todos.push(todoText);
  todoInput.value = "";

  // TODO: What will happen when the following functions are called?
  // store the list in local storage and add the list to the HTML screen
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// check if the list button is clicked
todoList.addEventListener("click", function (event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // if the element clicked is the bbutton id
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // store the list and put the list on the screen
    storeTodos();
    renderTodos();
  }
});

init();
