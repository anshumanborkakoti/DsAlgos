/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Input -> array of sorted lists
 * Output -> Merged singly linked list
 *  
 * Iterate through the K array,
 * traverse the list and insert values inton a val queue
 * Once done, traverse the PQ and insert into a linked list
 * return result
 */

 class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(toInsert) {
        this.queue.push(toInsert);
        if (this.queue.length === 0) {
            return;
        }//end of if
        let n = this.queue.length - 1;
        let parentIndex = Math.floor((n - 1) / 2);
        let parentNode = this.queue[parentIndex];
        while (parentIndex >= 0 && parentNode.val < toInsert.val) {
            [this.queue[parentIndex], this.queue[n]] = [this.queue[n], this.queue[parentIndex]]; //swap
            n = parentIndex;
            parentIndex = Math.floor((n - 1) / 2);
            parentNode = this.queue[parentIndex];
        }//end of while
        // console.log(this.queue.length)
        // this.queue.forEach(({ val }, index) => console.log(`value ${val} val ${val} index ${index}`))
    }//end of insert

    dequeue() {
        if (this.queue.length === 0) {
            return null;
        }
        const [minval] = this.queue;
        const lastElement = this.queue.pop();
        this.queue[0] = lastElement;
        let n = 0;
        let leftChildIndex = (2 * n) + 1;
        let rightChildIndex = (2 * n) + 2;
        let current = this.queue[n];
        let leftChild = this.queue[leftChildIndex];
        if (!leftChild) {

        }
        let rightChild = this.queue[rightChildIndex];
        while ((rightChild && rightChild.val > current.val) || (leftChild && leftChild.val > current.val)) {
            let swapIndex = 0;
            if (leftChild.val > current.val) {
                swapIndex = leftChildIndex;
            } else if (rightChild.val > current.val) {
                swapIndex = rightChildIndex;
            }//end of if for right
            [this.queue[swapIndex], this.queue[n]] = [this.queue[n], this.queue[swapIndex]];
            leftChildIndex = (2 * n) + 1;
            rightChildIndex = (2 * n) + 2
            leftChild = this.queue[leftChildIndex];
            rightChild = this.queue[rightChildIndex];
            current = this.queue[n];
        }// end of while
        // console.log(this.queue.length)
        // this.queue.forEach(({ val, val }, index) => console.log(`value ${val} val ${val} index ${index}`))
        return minval;
    }

    size(){
        return this.queue.length;
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let first=null;
    const pq=new PriorityQueue();
    for(let list of lists){
        let temp=list;
        while(temp){
            pq.enqueue(temp);
            temp=temp.next;
        }      
    }   
    if (pq.size() == 0) {
        return null;
    }
    first=pq.dequeue();
    let prev = first;
    while(pq.size()){
        let next=pq.dequeue();
        prev.next=next;
        prev=next;
    }
    return first;
};

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
}