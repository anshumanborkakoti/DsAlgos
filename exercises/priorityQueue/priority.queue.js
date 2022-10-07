class PriorityQueue {
    constructor () {
        this.heap = [];
    }

    enqueue(aNode) {
        let index = this.heap.length;
        this.heap[this.heap.length] = aNode;
        //Parent at floor (n-1)/2        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex < 0 || parentIndex === index) {
                break;
            }
            const parent = this.heap[parentIndex];
            if (aNode.priority > parent.priority) {
                this.heap[index] = parent;
                this.heap[parentIndex] = aNode;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    swap(to, from) {
        const temp = this.heap[to];
        this.heap[to] = this.heap[from];
        this.heap[from] = temp;
    }

    dequeue() {
        if (this.heap.length === 0) {
            return null;
        }
        const max = this.heap[0];
        if (this.heap.length === 1) {
            return max;
        }
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (index < this.heap.length) {
            const current = this.heap[index];
            const leftChild = this.heap[2 * index + 1];
            const rightChild = this.heap[2 * index + 2];
            if (!leftChild && !rightChild) {
                break;
            } else if (!leftChild && (rightChild.priority > current.priority)) {
                swap(2 * index + 2, index);
                index = 2 * index + 2;
            } else if (!rightChild && (leftChild.priority > current.priority)) {
                swap(2 * index + 1, index);
                index = 2 * index + 1;
            } else if (leftChild && rightChild && (leftChild.priority > current.priority) && (rightChild.priority > current.priority)) {
                if (leftChild.priority > rightChild.priority) {
                    this.swap(index, 2 * index + 1);
                    index = 2 * index + 1;
                } else {
                    this.swap(index, 2 * index + 2);
                    index = 2 * index + 2;
                }
            } else {
                if (rightChild.priority > current.priority) {
                    this.swap(index, 2 * index + 2);
                    index = 2 * index + 2;
                } else {
                    this.swap(index, 2 * index + 1);
                    index = 2 * index + 1;
                }

            }
        }
        return max;
    }

    getHeap() {
        return this.heap.slice();
    }
}

class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

const bh = new PriorityQueue();
bh.enqueue(new Node(10, 5));
bh.enqueue(new Node(23232, 3));
bh.enqueue(new Node(6767, 1));
bh.enqueue(new Node(454, 8));
bh.enqueue(new Node(980, 2));
bh.enqueue(new Node(565, 7));

console.log(bh.getHeap());

console.log(bh.dequeue());

console.log(bh.getHeap());