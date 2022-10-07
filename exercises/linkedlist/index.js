// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(1, null);
      return;
    }
    const next = new Node(data, this.head);
    this.head.next = null;
    this.head = next;
  }
}

module.exports = { Node, LinkedList };
