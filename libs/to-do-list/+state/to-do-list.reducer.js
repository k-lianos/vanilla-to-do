import { ToDoListAction } from './to-do-list.actions.js';
import { ToDoListItem } from './to-do-list-item.model.js';

export const initialState = Object.freeze([]);

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ToDoListAction.AddItem:
      const toDoListItem = new ToDoListItem(action.payload.text);
      const toDoListItemFound = state.find(item => item.equals(toDoListItem));
      return toDoListItemFound === undefined ? Object.freeze([...state, Object.freeze(toDoListItem)]) : state;

    case ToDoListAction.DeleteItem:
      const newState = state.filter(item => item.id !== action.payload.id);
      return newState.length < state.length ? Object.freeze(newState) : state;

    default:
      return state;
  }
}
