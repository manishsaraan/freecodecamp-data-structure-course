// stacks
// functions push, pop, peek, length

var letters = []; //out stack
var word = "racecar";
var rword = "";

// put letters in stack
for (let i = 0, len = word.length; i < len; i++) {
  letters.push(word[i]);
}

// pop of the stack in reverse order
for (let i = 0, len = word.length; i < len; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}

// custom stack with object
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  // add a value in end of stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // remove and return a value in end of stack
  pop() {
    if (this.count === 0) {
      return;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // size of stack
  size() {
    return this.count;
  }

  // return value end of stack
  peek() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.size());
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
