// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(aData) {
    this.data = aData;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(aData) {
    this.children = this.children.filter(aChild => {
      return aChild.data !== aData;
    });
  }
}

class Tree {
  constructor(aRoot = null) {
    this.root = aRoot;
  }

  traverseBF(fn) {
    const travsersal = [this.root];
    while (travsersal.length) {
      const node = travsersal.shift();
      travsersal.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    const traversal = [this.root];
    while (traversal.length) {
      const node = traversal.shift();
      traversal.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
