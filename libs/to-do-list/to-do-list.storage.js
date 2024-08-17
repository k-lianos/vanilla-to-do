const TO_DO_LIST_FEATURE_KEY = 'toDoList';

export default {
  load: () => JSON.parse(localStorage.getItem(TO_DO_LIST_FEATURE_KEY)) ?? [],
  save: items => localStorage.setItem(TO_DO_LIST_FEATURE_KEY, JSON.stringify(items.map(item => item.text))),
};
