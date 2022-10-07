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

    insertNode(aValue, aLeftValue = null, aRightValue = null) {
        if (!this.root) {
            this.root = new BinaryNode(aValue, aLeftValue ? new BinaryNode(aLeftValue) : null, aRightValue ? new BinaryNode(aRightValue) : null);
            return;
        }
        const nodeToInsert = new BinaryNode(aValue);
        function callback(aNode) {
            if (aNode.value === aValue) {
                //Do nothing..already exists
                return;
            }
            if (aValue < aNode.value && aNode.left === null) {
                aNode.left = nodeToInsert;
            }
            if (aValue > aNode.value && aNode.right === null) {
                aNode.right = nodeToInsert;
            }
        }
        this.dfsInOrder(callback);

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

    dfsInOrder(fn) {
        if (!this.root) {
            return [];
        }
        const result = [];
        while (stack.length > 0) {
            if (element.left) {
                result.push(element.left);
                fn(left);
            }
            result.push(element);
            fn(element);
            if (element.right) {
                result.push(element.right);
                fn(element.right);
            }
        }
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
    constructor (aValue = null, aLeftValue = null, aRightValue = null) {
        this.value = aValue;
        this.left = aLeftValue;
        this.right = aRightValue;
    }
}

const t = new Tree();
t.insertNode(1, 2, 3);
t.insertNode(2, 4, 5);
console.log(t.dfsInOrder());