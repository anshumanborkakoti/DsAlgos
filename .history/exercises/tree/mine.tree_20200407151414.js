//Create a class Node
//Node contains value and children
//Create a class Tree which contains a root node.

//Traversal
//Breadth first
//Input none
//If root node is null, return empty array
//Take an array queue to use as the same and unshift root into it
//Take an array called result
//Use a while loop till queue is null
//pop the queue and push into result.
//unshift the children of root into queue
//return result

class Tree {
    constructor () {
        this.root;
    }

    insertNode(aValue) {
        const nodeToInsert = new BinaryNode(aValue);
        if (!this.root) {
            this.root = nodeToInsert;
            return;
        }
        let current = this.root;
        while (current.value !== aValue) {
            if (aValue < current.value) {
                if (current.left === null) {
                    current.left = nodeToInsert;
                    break;
                } else {
                    current = current.left;
                    continue;
                }

            }
            if (aValue > current.value) {
                if (current.right === null) {
                    current.right = nodeToInsert;
                    break;
                } else {
                    current = current.right;
                    continue;
                }
            }
        }
    }

    bfs() {
        if (!root) {
            return [];
        }
        let queue = [root];
        let result = [];
        while (queue.length > 0) {
            const element = queue.pop();
            result.push(element);
            queue.unshift(element.children);
        }
        return result;
    }
    /**
     * Depth first pre-order
     * Input is derived from the instance, ie root node
     * If root node is null, return empty array
     * Create an array called stack to be used as the same and push in root.
     * Create a result array initialized to empty
     * loop till stack is empty
     * pop() the stack and add to result
     * Push in the children
     * return result
     * RESULT is to be read Left to right
     */
    dfsPreOrder() {
        if (!this.root) {
            return [];
        }
        const stack = [root];
        const result = [];
        while (stack.length > 0) {
            const element = stack.pop();
            result.push(element);
            if (element.children && element.children.length > 0) {
                stack.push(...element.children);
            }
        }
    }

    dfsPostOrder(fn) {
        if (!this.root) {
            return [];
        }
        const stack = [root];
        const result = [];
        while (stack.length > 0) {
            const element = stack.pop();
            if (element.children && element.children.length > 0) {
                stack.push(...element.children);
            }
            result.unshift(element);

        }
        // Post and pre-order depend on how the result array is parsed
        //For both solutions above parse array from left to right
    }

    dfsInOrderRecursion() {
        if (!this.root) {
            return [];
        }
        const result = [];
        (function doDfs(aNode) {
            if (!aNode) {
                return;
            }

            if (aNode.left) {
                doDfs(aNode.left);
            }
            result.push(aNode.value);
            if (aNode.right) {
                doDfs(aNode.right);
            }
        })(this.root);
        return result;
    }
    dfsPreOrderRecursive() {
        if (!this.root) {
            return [];
        }
        function dfs(node) {
            if (!node) {
                return result;
            }
            result.push(node);
            for (let child of node.children) {
                dfs(child);
            }
        }
        result = dfs(this.root);
        return result;
    }

    dfsPostOrderRecursive() {
        if (!this.root) {
            return [];
        }
        function dfs(node) {
            if (!node) {
                return result;
            }
            for (let child of node.children) {
                dfs(child);
            }

            result.push(node);
        }
        result = dfs(this.root);
        return result;
    }

}

class Node {
    constructor () {
        this.value;
        this.children = [];
    }
}

class BinaryNode {
    constructor (aValue) {
        this.value = aValue;
        this.left = null;
        this.right = null;
    }
}

const t = new Tree();
t.insertNode(1);

t.insertNode(4);
t.insertNode(5);
t.insertNode(2);
t.insertNode(3);
console.log(t.dfsInOrderRecursion())