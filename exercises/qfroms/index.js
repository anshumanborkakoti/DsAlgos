// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// class Queue {
//   constructor() {
//     this.stack1 = new Stack();
//     this.stack2 = new Stack();
//   }

//   add(element) {
//     this.stack1.push(element);
//     this.stack2.push(this.stack1.pop());
//   }

//   remove() {
//     this.stack1.push(this.stack2.pop());
//     return stack1.pop();
//   }

//   peek() {
//     return this.stack2[this.stack2.length - 1];
//   }
// }

// enqeueue(), dequeue(), peep() - shows the last element
// Take two stacks, store in stack2
//
class Queue {
  constructor () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  /**
   * See if element is null return nothing
   * Push into stack1
   * push into stack2 by popping stack 1
   */
  add(aElement) {
    if (!aElement) {
      return;
    }
    this.stack1.push(aElement);
    this.stack2.push(this.stack1.pop());
  }

  /**
   * if stack2.peek() is empty, return null
   * return by popping stack2
   */
  remove() {
    if (!this.stack2.peek()) {
      return null;
    }
    return this.stack2.pop();
  }

  /**
   * Peek stack 2
   */
  peek() {
    return this.stack2.peek();
  }

}

module.exports = Queue;
