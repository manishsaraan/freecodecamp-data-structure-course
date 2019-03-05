// Queue

class Queue {
  constructor() {
    this.collections = [];
  }

  print() {
    console.log(this.collections);
  }

  enqueue(element) {
    this.collections.push(element);
  }

  dequeue() {
    return this.collections.shift();
  }

  front() {
    return this.collections[0];
  }

  size() {
    return this.collections.length;
  }

  isEmpty() {
    return this.collections.length === 0;
  }
}

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print();
queue.dequeue();
console.log(queue.front());
console.log(queue.size());
queue.print();
