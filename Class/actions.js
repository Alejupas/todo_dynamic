class Actions {
  constructor() {}

  static deleteTodoItem(item) {
    // closest iesko tevinio el
    // console.log(item.closest(".item"));
    console.log("ivyko istrynimas");
    // istrinti el
    item.parentElement.remove();
  }
  static toggleComplete(item) {
    console.log("Check Unchek todo item ivyko");
    item.parentElement.classList.toggle("line-through");

    // irgi veikia jei tinkamai uzdetos klases
    // item.classList.toggle(ATLIKTAS_TODO);
    // item.classList.toggle(NEATLIKTAS_TODO);

    // atliktas neatliktas burbuliukas
    if (item.classList.contains(ATLIKTAS_TODO)) {
      // jei tokia klase yra nuimam.
      item.classList.remove(ATLIKTAS_TODO);
      item.classList.add(NEATLIKTAS_TODO);
    } else if (item.classList.contains(NEATLIKTAS_TODO)) {
      item.classList.remove(NEATLIKTAS_TODO);
      item.classList.add(ATLIKTAS_TODO);
    }
  }

  static editTodoItem(item) {
    console.log("edit TOdo in action");

    item.style.display = "none";

    // gaunam li el kuris yra paspaustos ikoneles tevas
    const liEl = item.parentElement;
    // surandam todoSpan elementa kuriame todo textas
    const todoSpan = liEl.querySelector(".text");
    const esamasTodoText = todoSpan.textContent;
    // console.log(todoSpan, esamasTodoText);

    // sukurti nauja input el
    const newInputEl = document.createElement("input");

    // ir jo viduje patalpinti texkta
    newInputEl.value = esamasTodoText;
    console.log(newInputEl);

    // ta nauja el patalpinti vietoj span
    todoSpan.before(newInputEl);
    todoSpan.style.display = "none";

    // klausytis enter paspaudimo ant musu input
    newInputEl.addEventListener("keyup", function (event) {
      // kai paspausiu enter
      if (event.key === "Enter") {
        console.log("Enter aptiktas");
        // paimam ivesties reiksme
        console.log("newInputEl.value", newInputEl.value);

        // perkeliam ja i span el
        todoSpan.textContent = newInputEl.value;
        // istrinam input
        newInputEl.remove();
        todoSpan.style.display = "inline-block";
        item.style.display = "inline-block";
      }
    });
  }

  static resetTodos() {
    console.log("reseting todos");
    ulListEl.innerHTML = "";
  }
}
