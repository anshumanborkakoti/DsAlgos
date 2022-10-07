// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(aData) {
    this.data = aData;
    this.left = null;
    this.right = null;
  }
  insert(aData) {
    if (this.data == aData) {
      return;
    }
    if (this.data < aData && this.right) {
      this.right.insert(aData);
    } else if (this.data < aData && !this.right) {
      this.right = new Node(aData);
    } else if (this.data > aData && this.left) {
      this.left.insert(aData);
    } else if (this.data > aData && !this.left) {
      this.left = new Node(aData);
    }
  }

  contains(aData) {
    if (this.data === aData) {
      return this;
    } else if (this.data < aData && this.right) {
      return this.right.contains(aData);
    } else if (this.data > aData && this.left) {
      return this.left.contains(aData);
    }
    return null;
  }
}

module.exports = Node;
