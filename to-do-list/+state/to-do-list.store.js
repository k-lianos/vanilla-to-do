import { initialState, reducer } from './to-do-list.reducer.js';

class Store {
  #data = initialState;

  #observers = new Set();

  get asObservable() {
    return { subscribe: obs => this.#observers.add(obs) };
  }

  #notify() {
    this.#observers.forEach(obs => obs(this.#data));
  }

  dispatch(action) {
    const data = reducer(this.#data, action);
    if (data !== this.#data) {
      this.#data = data;
      this.#notify();
    }
  }
}

export default new Store();
