let uniqueId = 0;

export class ToDoListItem {
  #id = `to-do-list-item-${uniqueId++}`;

  get id() {
    return this.#id;
  }

  #text;

  get text() {
    return this.#text;
  }

  constructor(text) {
    this.#text = text;
  }

  equals(item) {
    return this.text === item.text;
  }
}
