import { AddItem, DeleteItem } from './to-do-list.actions.js';
import Store from './to-do-list.store.js';

export class ToDoListFacade {
  items$ = Store.asObservable;

  addItem(text) {
    Store.dispatch(new AddItem(text));
  }

  deleteItem(id) {
    Store.dispatch(new DeleteItem(id));
  }
}

export default new ToDoListFacade();
