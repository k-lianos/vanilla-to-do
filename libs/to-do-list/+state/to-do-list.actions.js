export const ToDoListAction = {
  AddItem: '[To Do List] Add Item',
  DeleteItem: '[To Do List] Delete Item',
};

export class AddItem {
  type = ToDoListAction.AddItem;

  constructor(text) {
    this.payload = { text };
  }
}

export class DeleteItem {
  type = ToDoListAction.DeleteItem;

  constructor(id) {
    this.payload = { id };
  }
}
