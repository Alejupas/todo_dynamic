class Todo {
  constructor(title) {
    this.title = title;
    this.htmlLiEl = "";
    this.makeHtmlEl();
    this.addTodoToList();
  }
  makeHtmlEl() {
    this.htmlLiEl = `
          <li class="item">
              <i class="fa fa-circle-thin make-done" aria-hidden="true"></i>
              <span class="text">${this.title}</span>
              <i class="fa fa-pencil edit" aria-hidden="true"></i>
              <i class="fa fa-trash delete-icon" aria-hidden="true"></i>
            </li>
          `;
  }

  addTodoToList() {
    ulListEl.insertAdjacentHTML("beforeend", this.htmlLiEl);
  }
}
