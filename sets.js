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

  // this method will return the intersection of two sets
  intersection(otherSet) {
    var intersectionSet = new MySets();
    var firstSet = this.values();
    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  }

  // this method will return the difference of two sets
  difference(otherSet) {
    var differenceSet = new MySets();
    var firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.push(e);
      }
    });

    return differenceSet;
  }

  // this method will test if the set is subset of a different set
  subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  }
}

var setA = new MySets();
var setB = new MySets();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

//es6 set
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("a"));
