class Node {
    constructor (aValue) {
        this.value = aValue;
        this.left = null;
        this.right = null;
    }
}

export class Bst {
    constructor () {
        this.root = null;
    }

    /**
     * Accept a number value
     * If null return and do nothing
     * If not number log error
     * If the root is null, set root equal to a node with value number
     * If not null
     * Take a var called current node and set to root
     * Start a loop till currentNode exists
     * If value === currentNode.left or value === currentNode.right, values exists. Break
     * if aValue < currentNode.value, see left node
        * If !currentNode.left, set valueNode = currentNode.left, break
        * if currentNode.left exists currentNode = currentNode.left and continue
     * if aValue > currentNode.value, see right node
     *   If !currentNode.right, set valueNode = currentNode.right
        * if currentNode.right exists currentNode = currentNode.right and continue
    * If aValue falls in between ie aValue> currentNode.left and aValue < currentNode.right
    *   valueNode.left = currentNode.left and currentNode.left = valueNode, break
    * Log out the tree
     * @param {Number} aValue
     */
    insert(aValue) {
        if (!aValue) {
            return;
        }
        if (typeof (aValue) !== Number) {
            console.error('Not a number!');
            return;
        }
        if (!this.root) {
            this.root = new Node(aValue);
            return;
        }
        let currentNode = root;
        const valueNode = new Node(aValue);
        while (currentNode) {
            if (aValue === currentNode.value) {
                //Value exists
                break;
            }
            if (aValue < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = valueNode;
                    break;
                }
                currentNode = currentNode.left;
                continue;
            }
            if (aValue > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = valueNode;
                    break;
                }
                currentNode = currentNode.right;
                continue;
            }
            //Value falls in between
            valueNode.left = currentNode.left;
            currentNode.left = valueNode.left;
            break;
        }
    }

    find(aValue) {
        if (!aValue || typeof (aValue) !== Number || !this.root) {
            return false;
        }
        let found = false;
        let currentNode = root;
        while (currentNode) {
            if (aValue === currentNode.value) {
                found = true;
                break;
            }
            if (aValue < currentNode.value) {
                if (!currentNode.left) {
                    break;
                }
                currentNode = currentNode.left;
                continue;
            }
            if (aValue > currentNode.value) {
                if (!currentNode.right) {
                    break;
                }
                currentNode = currentNode.right;
                continue;
            }
        }
        return found;
    }

    dfsInOrder() {
        if (!this.root) {
            return [];
        }
        const stack = [root];
        const result = [];
        while (stack.length > 0) {
            const element = stack.pop();
            result.push(element.left);
            result.push(element);
            result.push(element.right);
        }
    }

    dfsInOrderRecursive() {
        if (!this.root) {
            return [];
        }
        function dfs(node) {
            if (!node) {
                return result;
            }
            result.push(node.left);
            result.push(node);
            result.push(node.right);
        }
        result = dfs(this.root);
        return result;
    }

}