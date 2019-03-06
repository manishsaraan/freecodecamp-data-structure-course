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

// priority queue

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          // checking the priority
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  dequeue() {
    return this.collection.shift()[0];
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }
}

var pq = new PriorityQueue();
pq.enqueue(["Beaue", 2]);
pq.enqueue(["Beaue 1", 1]);
pq.enqueue(["Beaue 3", 3]);
pq.print();
