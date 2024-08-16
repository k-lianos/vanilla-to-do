import { LocalStorage, ToDoListFacade } from './to-do-list/index.js';

const DOM = { todoList: null, addBtn: null, todoInput: null };

const onAddBtnClick = () => {
  const inputValue = DOM.todoInput.value.trim();
  if (inputValue !== '' && inputValue != null) {
    DOM.todoInput.value = '';
    ToDoListFacade.addItem(inputValue);
  }
};

const onDeleteBtnClick = event => {
  if (event.target.dataset.btnType === 'delete') {
    const identifier = event.target.parentNode.dataset.identifier;
    ToDoListFacade.deleteItem(identifier);
  }
};

const render = items => {
  DOM.todoList.innerHTML = '';
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    listItem.innerHTML = `${item.text} <button data-btn-type="delete" class="delete-btn">Delete</button>`;
    listItem.dataset.identifier = item.id;
    DOM.todoList.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  DOM.todoList = document.getElementById('todo-list');
  DOM.addBtn = document.getElementById('add-btn');
  DOM.todoInput = document.getElementById('todo-input');

  DOM.addBtn.addEventListener('click', onAddBtnClick);

  DOM.todoList.addEventListener('click', onDeleteBtnClick);

  ToDoListFacade.items$.subscribe(render);
  ToDoListFacade.items$.subscribe(LocalStorage.save);

  LocalStorage.load().forEach(itemText => ToDoListFacade.addItem(itemText));
});
