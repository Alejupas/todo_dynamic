"use strict"; // here we go again

const todosArr = ["buy milk", "do stuff"];

// reikalingos nuorodo i elementus kuriuos valdysime
const inputEl = document.getElementById("todo-input");
const addTodoBtnEl = inputEl.nextElementSibling;
const mainListUlEl = document.querySelector(".list");

// 0 mygtukas turi laukti paspaudimo ir sureaguoti kai paspausim
addTodoBtnEl.addEventListener("click", function (event) {
  console.log(event.target);

  //   console.log("paspaudei");
  // 1 paimam ka ivede vartojoas i input
  const ivestaReiksme = inputEl.value;
  console.log(ivestaReiksme);
  // jei vartotojas nieko neivede tai iseinam lauk is funkcijos
  if (ivestaReiksme === "") return;

  // 2 dedam i sarasa kaip li el
  const naujasLiEl = createNewLiEl(ivestaReiksme);

  // idedam i sarasa nauja li el su tekxtu
  mainListUlEl.appendChild(naujasLiEl);
  // isvalyti ivesties lauka po to kai pridejom todo
  inputEl.value = "";
});

// uzdedam even listeneri ant ul saraso
mainListUlEl.addEventListener("click", function (event) {
  console.log(event.target);
  // gauti klase
  //   console.log(event.target.className);

  // jei el ant kurio paspauziau turi klase 'del'
  if (event.target.className === "del") {
    //tai mes norim istrinti tevini jo el
    event.target.parentElement.remove();
  }
  // contains - grazina true jei tokia klase yra tar el klasiu saraso
  if (event.target.classList.contains("edit")) {
    // perkelti to todo el reiksme i input el
    let dabartineTodoReiksme =
      event.target.previousElementSibling.previousElementSibling.textContent;
    console.log(dabartineTodoReiksme);
    inputEl.value = dabartineTodoReiksme;

    // issaugi ta reiksme atgal i el
    event.target.parentElement.remove();
  }

  //event.target.style.color = "coral";
  //   event.target.remove();
});

function createNewLiEl(ivestaReiksme) {
  // sukuriam nauja li
  const naujasLiEl = document.createElement("li");
  // ideam vartotojo reiksme
  //   naujasLiEl.textContent = ivestaReiksme;
  naujasLiEl.innerHTML = `
  <span class='li-text'>${ivestaReiksme}</span>
  <span class="del">&#x2612;</span>
  <button class='edit yese' >edit</button>
  `;

  return naujasLiEl;
}

// rteikia gauti visa esama sara li elementu
