
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const nodeToInsert = new Node(val);
        if (!this.root) {
            this.root = nodeToInsert;
            return;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.val >= nodeToInsert.val) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                    continue;
                } else {
                    currentNode.left = nodeToInsert;
                    break;
                }
            } else if (currentNode.val < nodeToInsert.val) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                    continue;
                } else {
                    currentNode.right = nodeToInsert;
                    break;
                }
            }
        }
    }


    traverseBF() {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

            console.log(node.val);
        }
    }

    traverseDFPreOrder() {
        const stack = [this.root];
        while (stack.length) {
            const node = stack.pop();
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
            console.log(node.val);
        }
    }


    traverseDFInOrder() {
        const values = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            values.push(node.val);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        values.forEach(value => console.log(value))
    }

    traverseDFPostOrder() {
        const values = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            values.push(node.val);
        }
        traverse(this.root);
        values.forEach(value => console.log(value))
    }
}
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = { Node, BinarySearchTree };


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
//tree.traverseBF();
tree.traverseDFPostOrder();