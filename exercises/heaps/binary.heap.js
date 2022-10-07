// class BinaryHeap {
//     constructor () {
//         this.heap = [];
//     }

//     insertMax(aNode) {
//         let index = this.heap.length;
//         this.heap[this.heap.length] = aNode;
//         //Parent at floor (n-1)/2        
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (parentIndex < 0 || parentIndex === index) {
//                 break;
//             }
//             const parent = this.heap[parentIndex];
//             if (aNode > parent) {
//                 this.heap[index] = parent;
//                 this.heap[parentIndex] = aNode;
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     swap(to, from) {
//         const temp = this.heap[to];
//         this.heap[to] = this.heap[from];
//         this.heap[from] = temp;
//     }

//     extractMax() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         const max = this.heap[0];
//         if (this.heap.length === 1) {
//             return max;
//         }
//         this.heap[0] = this.heap.pop();
//         let index = 0;
//         while (index < this.heap.length) {
//             const current = this.heap[index];
//             const leftChild = this.heap[2 * index + 1];
//             const rightChild = this.heap[2 * index + 2];
//             if (!leftChild && !rightChild) {
//                 break;
//             } else if (!leftChild && (rightChild > current)) {
//                 swap(2 * index + 2, index);
//                 index = 2 * index + 2;
//             } else if (!rightChild && (leftChild > current)) {
//                 swap(2 * index + 1, index);
//                 index = 2 * index + 1;
//             } else if (leftChild && rightChild && (leftChild > current) && (rightChild > current)) {
//                 if (leftChild > rightChild) {
//                     this.swap(index, 2 * index + 1);
//                     index = 2 * index + 1;
//                 } else {
//                     this.swap(index, 2 * index + 2);
//                     index = 2 * index + 2;
//                 }
//             } else {
//                 if (rightChild > current) {
//                     this.swap(index, 2 * index + 2);
//                     index = 2 * index + 2;
//                 } else {
//                     this.swap(index, 2 * index + 1);
//                     index = 2 * index + 1;
//                 }

//             }
//         }
//         return max;
//     }

//     getHeap() {
//         return this.heap.slice();
//     }
// }

class Node {
    constructor (aValue = null) {
        this.value = aValue;
    }
}

/**
 * Root node is max. Max two children.
 * All children are smaller but no order left/right
 * Create an array which maintains the state of the heap.
 * Children are at 2n+1 and 2n+2
 * Parent at Math.floor((n-1)/2)
 * insertMax() - inserts into heap
 * extractMax() - Extracts the maximum value
 * 
 */
class MaxBinaryHeap {
    constructor () {
        this.heap = [];
    }

    /**
     * Inserts a node and places at the right order
     * Insert at the end of the array and bubble up.
     * 
     * Take a node as input.
     * Output is that it should insert the node at the correct index.
     * if node is null, return and do nothing
     * if heap.length === 0, root node. Assign and return.
     * Insert at heap[length -1]
     * Create parentIndex=Math.floor((length-2)/2)
     * Loop till parentIndex<0
     * In the loop is parentIndex=0, insert into 0th index
     * In the loop if node.value is greater than heap[parentIndex], swap the nodes in the array
     * parentIndex=Math.floor((parentIndex-1)/2)
     * 
     * @param {Node} aNode 
     */
    insertMax(aNode) {
        if (!aNode) {
            return;
        }
        if (this.heap.length === 0) {
            this.heap[0] = aNode;
            return;
        }
        let currentIndex = this.heap.length - 1;
        this.heap[currentIndex] = aNode;
        while (currentIndex >= 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2)
            const parentNode = this.heap[parentIndex];
            if (parentNode.value > aNode.value) {
                break;
            }
            this.heap[parentIndex] = aNode;
            this.heap[currentIndex] = parentNode;
        }
    }
    /**
     * Remove first element and move the last element to the first element.
     * 
     * store heap[0] in result of shift()
     * pop this.heap() and insert into beginning
     * create currentIndex=0
     * loop while(currentIndex<this.heap.length)
     * compare element at 2n+1 with element at currentIndex to see if it is smaller.Swap if yes
     * currentIndex=2n+1
     * If not compare with 2n+2, swap if lesser.currentIndex=2n+2
     * If neither break loop as placed correctly
     * 
     */
    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        const result = this.heap.shift();
        const last = this.heap.pop();
        this.heap.unshift(last);
        const currentIndex = 0;
        while (currentIndex < this.heap.length) {
            const leftIndex = (2 * currentIndex) + 1;
            const rightIndex = (2 * currentIndex) + 2;
            if (this.heap[leftIndex] > this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
                currentIndex = leftIndex;
                continue;
            }
            if (this.heap[rightIndex] > this.heap[currentIndex]) {
                this._swap(rightIndex, currentIndex);
                currentIndex = rightIndex;
                continue;
            }
            break;
        }
        return result;
    }

    _swap(toIndex, fromIndex) {
        const temp = this.heap[toIndex];
        this.heap[toIndex] = this.heap[fromIndex];
        this.heap[fromIndex] = temp;
    }
}

const bh = new BinaryHeap();
bh.insertMax(10);
bh.insertMax(23232);
bh.insertMax(6767);
bh.insertMax(454);
bh.insertMax(980);
bh.insertMax(565);

console.log(bh.getHeap());

console.log(bh.extractMax());

console.log(bh.getHeap());