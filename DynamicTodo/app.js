"use strict";

const ATLIKTAS_TODO = "fa-check-circle";
const NEATLIKTAS_TODO = "fa-circle-thin";

const ulListEl = document.getElementById("list"),
  mainInputEl = document.getElementById("input"),
  submitBtn = document.getElementById("add-todo-btn"),
  dateEl = document.getElementById("date"),
  resetBtnEl = document.getElementById("reset");

///paimti teksta is input el

//kai paspaustas + mygtukas sukurti nauja todo el ir ideti ji i html

//nuoroda i input el

//input el.value grazina ivesta verte

//reikia mygtuko kuris yra greta ivesties lauko

//mygtukui uzdeti eventListener kad jis ivykdytu funkcija

function addTodoToList() {
  if (mainInputEl.value === "") return;
  new Todo(mainInputEl.value);
  mainInputEl.value = "";
}

submitBtn.addEventListener("click", addTodoToList);

//PVZ:
//pagrindinis musu ivykio pasiklausymas ant musu TODO saraso=====================
ulListEl.addEventListener("click", (event) => {
  let current = event.target; // dont repeat yourself
  // console.log(event.target);
  //ISTRINTI ELEMENTA PASPAUDUS ICON
  // susirasem Actions.js delete metod funkcija
  //delete trigger
  if (event.target.classList.contains("delete-icon")) {
    console.log("delete");
    Actions.deleteTodoItem(event.target);
  }
  //pazymet KAI PNEATLIKTA ARBA ATLIKTA TODO el
  //CHECK UNCHECK CIRCLE
  if (current.classList.contains("make-done")) {
    console.log("make it done");
    Actions.toggleComplete(current);
  }

  //edit trigeris
  if (current.classList.contains("edit")) {
    console.log("edit in action");
    // console.log(current);
    Actions.editTodoItem(current);
  }
});
// event target grazina elementa ant kurio paspaudem , siuo atveju ulListEl viduje esanciu elementu

// pridedam paspaudus ENTER
mainInputEl.addEventListener("keyup", function (event) {
  console.log(event);

  //kai event.key yra enter, tuomet iskvieciam addToDoList(akd pridet prie saraso todo taska)
  if (event.key === "Enter") addTodoToList();
});

//laikas
(function showTime() {
  let now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const data = now.toLocaleDateString("LT", options);
  dateEl.innerHTML = data;
  setInterval(() => {
    now = new Date();
    let laikas = now.toLocaleTimeString();
    dateEl.textContent = data + " " + laikas;
  }, 1000);
})();
// showTime();

//1 gauti nuoroda i reset mygtuka
//pasidarei virsuj prie const
console.log(resetBtnEl);
// 2 sureaguoti i mygtuko paspaudima iskvieciam Actions metoda
resetBtnEl.addEventListener("click", Actions.resetTodos);
// 3 Acions(js) metode isvalyti todo elementus
