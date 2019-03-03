// sets

class MySets {
  constructor() {
    // collection for set
    this.collection = [];
  }

  // check if element is in array or not
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // return all values in set
  values() {
    return this.collection;
  }

  // add element in set
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // remove element from set
  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // size of collection
  size() {
    return this.collection.length;
  }

  // this method will return union of two sets
  union(otherSet) {
    var unionSet = new MySets();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));
    return unionSet;
  }
}
