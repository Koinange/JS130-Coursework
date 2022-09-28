const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });
  
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });
  
  test('calling first returns the first todo item', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  
  test("first() returns the first item on the list", () => {
    expect(list.first()).toBe(todo1);
  });
  
  test("last() returns the last item on the list", () => {
    expect(list.last()).toBe(todo3);
  });
  
  test('shift() removes first item in list and returns it', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  
  test('pop() removes last item in list and returns it', () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  
  test('isDone() returns true if every item in list is done', () => {
    expect(list.isDone()).toBe(false);
  });
  
  test('add() throws TypeError if anything but a TodoObject tries to get added', () => {
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
  });
  
  test('itemAt() returns the item at given index', () => {
    expect(list.itemAt(1)).toBe(todo2);
    expect(() => list.itemAt(4)).toThrow(ReferenceError);
  });
  
  test('markDoneAt() marks the item at given index as done', () => {
    expect(() => list.markDoneAt(4)).toThrow(ReferenceError);
    
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  });
  
  test('markDoneAt() marks the item at given index as undone', () => {
    expect(() => list.markUndoneAt(4)).toThrow(ReferenceError);
    
    list.markDoneAt(1);
    expect(todo2.isDone()).toBe(true);
    list.markUndoneAt(1);
    expect(todo2.isDone()).toBe(false);
  });
  
  test('markAllDone() marks every item in list as done', () => {
    list.markAllDone();
     
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });
  
  test('removeAt() removes the item in list at a given index', () => {
    expect(() => list.removeAt(4)).toThrow(ReferenceError);
    
    expect(list.todos).toEqual([todo1, todo2, todo3]);
    list.removeAt(1);
    expect(list.todos).toEqual([todo1, todo3]);
  });
  
  test('toString() returns string representation of the list', () => {
  let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

  expect(list.toString()).toBe(string);
});
  
  test('toString() returns different string for done todo', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;
  
    list.markDoneAt(1);
  
    expect(list.toString()).toBe(string);
  });
  
  test('toString() returns different string for all the todos being done', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
  
    list.markAllDone();
  
    expect(list.toString()).toBe(string);
  });
  
  test('forEach() iterates over all the elements in list', () => {
    let elementList = [];
    list.forEach(element => elementList.push(element));
    expect(elementList).toEqual(list.todos)
  });
  
  test('filter() returns a new Todolist object with items filtered', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);
  
    expect(newList.title).toBe(list.title);
  
    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
});