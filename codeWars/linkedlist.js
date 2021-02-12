// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }

    return counter;
  }

  getFirst() {
    let first = this.head;
    return first;
  }

  getLast() {
    let current = this.head;
    while (current) {
      if (current.next) {
        current = current.next;
      } else {
        return current;
      }
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
    } else {
      let previous = this.head;
      let node = this.head.next;

      while (node.next) {
        previous = node;
        node = node.next;
      }

      if (node.next === null) {
        previous.next = null;
      }
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      this.last = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (index <= this.size()) {
      let node = this.head;
      let counter = 0;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      return null;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  } 

  forEach(fn) {
    let node = this.head; 
    let counter = 0; 
    while (node) {
      fn(node, counter)
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };