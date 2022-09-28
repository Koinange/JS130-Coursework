function newStack() {
  let stackArray = [];
  return {
    push(value) {
      stackArray.push(value);
    },
    
    pop() {
      return stackArray.pop();
    },
    
    printStack() {
      stackArray.forEach(value => {
        console.log(value);
      });
    }
  };
}

let stack = newStack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack();

console.log(stack.pop());

stack.printStack();