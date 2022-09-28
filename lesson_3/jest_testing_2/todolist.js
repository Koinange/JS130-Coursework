const Todo = require('./todo.js');

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  
  add(todoObject) {
    if (!(todoObject instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }
    this.todos.push(todoObject);
  }
  
  size() {
    return this.todos.length;
  }
  
  first() {
    return this.todos[0];
  }
  
  last() {
    return this.todos[this.size() - 1];
  }
  
  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }
  
  markDoneAt(index) {
    this._validateIndex(index);
    this.todos[index].markDone();
  }
  
  markUndoneAt(index) {
    this._validateIndex(index);
    this.todos[index].markUndone();
  }
  
  isDone() {
    return this.todos.every(todo => todo.isDone());
  }
  
  shift() {
    return this.todos.shift();
  }
  
  pop() {
    return this.todos.pop();
  }
  
  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index,1);
  }
  
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }
  
  forEach(callback) {
    this.todos.forEach(todo => callback(todo));
  }
  
  filter(callback) {
    let selectedTodos = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        selectedTodos.add(todo);
      }
    });

    return selectedTodos;
  }
  
  findByTitle(title) {
     return this.filter(todo => todo.getTitle()).first();
  }
  
  allDone() {
    return this.filter(todo => todo.isDone());
  }
  
  markDone(title) {
    let todo = this.findByTitle(title).markDone();
    if (todo !== undefined) {
      todo.markDone();
    }
  }
  
  markAllDone() {
    this.forEach(todo => todo.markDone());
  }
  
  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }
  
  toArray() {
    return this.todos.slice(0);
  }
  
  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
}

module.exports = TodoList;