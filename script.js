console.log("Name: Leila Zhunisbekova, Group: IT-XXX");
alert("Hello, JavaScript World!");

let name = "Leila";
let age = 20;
let isStudent = true;

console.log("My name is " + name);
console.log("I am " + age + " years old");
console.log("Am I a student? " + isStudent);

let a = 10;
let b = 5;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

document.getElementById("changeTextBtn").onclick = function() {
  document.getElementById("text").innerText = "Текст изменен успешно!";
};

document.getElementById("bgBtn").onclick = function() {
  document.getElementById("box").style.backgroundColor = "lightblue";
};

document.getElementById("fontBtn").onclick = function() {
  document.getElementById("box").style.fontSize = "24px";
};

// Task 4: Creating & Removing Elements
let list = document.getElementById("list");

document.getElementById("addItem").onclick = function() {
  let li = document.createElement("li");
  li.textContent = "Новый лист";
  list.appendChild(li);
};

document.getElementById("removeItem").onclick = function() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
};

let hoverBox = document.getElementById("hoverBox");

hoverBox.onmouseover = function() {
  hoverBox.style.backgroundColor = "tomato";
  hoverBox.textContent = "Нажали";
};

hoverBox.onmouseout = function() {
  hoverBox.style.backgroundColor = "lightgreen";
  hoverBox.textContent = "Наведи на меня";
};

// Task 6: Keyboard Events
let input = document.getElementById("textInput");
let display = document.getElementById("displayText");

input.onkeyup = function() {
  display.textContent = "Написано: " + input.value;
};

document.getElementById("myForm").onsubmit = function(event) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("errorMessage");

  if (name === "" || email === "" || password === "") {
    event.preventDefault();
    error.textContent = "Заполните все поля";
  } else {
    error.textContent = "";
    alert("Форма отправлена успешно");
  }
};

let tasks = [];

document.getElementById("addTask").onclick = function() {
  let taskText = document.getElementById("taskInput").value;
  if (taskText === "") return;

  tasks.push(taskText);

  let li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function() {
    li.classList.toggle("completed");
  };

  let delBtn = document.createElement("button");
  delBtn.textContent = "Удалить";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
};
