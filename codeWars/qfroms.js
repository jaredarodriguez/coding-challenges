// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.

class Stack {
    constructor() {
        this.data = []; 
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }
    
    peek() {
        return this.data[this.data.length - 1];
    }

}

class Queue {
    constructor() {
      this.data = [];
    }
  
    add(record) {
      this.data.unshift(record);
    }
  
    remove() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  }

  class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek () {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const peek = this.second.peek(); 

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return peek;
    }

}