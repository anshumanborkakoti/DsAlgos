/**
* Create a max priority queue with a binary heap
* Implement extractMax and insert methods
* eg. insert 0,3;1,6;2,9
* extract max gives 0,3
* steps
* 1. create a PriorityQueue class with constructor creating an array representation
* 2. create a Node class having value, priority
* 2. write two methods dequeue and insert
*3. In insert(), accept a value and priority and create a node out of it
*push the node
*4. if the array is blank, current node becomes the root node and return
*If not calculate parentIndex=Math.floor((n-1)/2)
* Run a loop till parentIndex>=0 and the priority value at parentIndex is more than the current node priority (lower priority value indicates higher priority)
* in the loop.swap the values at parentIndex with the value at the current index.
* assign n=parentIndex
* recalculate parentIndex= MAth.floor((n-1)/2) 
*-------------------------------
* dequeue
* from the queue array, shift() and extract the first element, call it max
* pop() the last element and unshift() it into the array
* n=current index
*leftChildIndex = 2n+1
*rightChildIndex=2n+2
*leftNode = node at leftChildIndex
*rightNode = node at rightChildIndex
* run a loop where 2n+1 and 2n+2 < queue.length && rightChild.priority< current.priority OR leftChild.priority< current.priority
*If the left child's priority is less than the current node's, swap, set n=leftChildIndex, leftChildIndex=2n+1, leftChildNode=node at n
*else do the same for right child
* if neither exist,just swap
*/

class Node{
    constructor(value,priority){
      this.val=value;
      this.priority=priority;
    }
  }
  
  class PriorityQueue{
    constructor(){
      this.queue=[];
    }
    
    insert(val,priority){
      const toInsert = new Node(val, priority);
       this.queue.push(toInsert);
      if(this.queue.length===0){
        return;
      }//end of if
      let n=this.queue.length-1;
     let parentIndex=Math.floor((n-1)/2);
      let parentNode=this.queue[parentIndex];
      while(parentIndex>=0 && parentNode.priority > toInsert.priority){
        [this.queue[parentIndex],this.queue[n]] =  [this.queue[n],this.queue[parentIndex]]; //swap
        n=parentIndex;
        parentIndex=Math.floor((n-1)/2);
        parentNode=this.queue[parentIndex];
      }//end of while
     console.log(this.queue.length)
   this.queue.forEach(({val,priority},index)=> console.log(`value ${val} priority ${priority} index ${index}`))
    }//end of insert
    
    dequeue(){
      if(this.queue.length === 0){
        return null;
      }
      const [maxPriority] = this.queue;
      const lastElement = this.queue.pop();
      this.queue[0] = lastElement;
      let n=0;
      let leftChildIndex=(2*n)+1;
       let rightChildIndex=(2*n)+2;
      let current = this.queue[n];
      let leftChild=this.queue[leftChildIndex];
      if(!leftChild){
        
      }
      let rightChild=this.queue[rightChildIndex];
      while((rightChild && rightChild.priority< current.priority) || (leftChild && leftChild.priority< current.priority)){
        let swapIndex=0;
         if(leftChild.priority< current.priority){
          swapIndex=leftChildIndex;        
        }else if(rightChild.priority< current.priority){
          swapIndex=rightChildIndex; 
        }//end of if for right
        [this.queue[swapIndex], this.queue[n]]= [this.queue[n], this.queue[swapIndex]];
       leftChildIndex=(2*n)+1;
          rightChildIndex=(2*n)+2
          leftChild=this.queue[leftChildIndex];
         rightChild=this.queue[rightChildIndex];
        current=this.queue[n];
      }// end of while
      console.log(this.queue.length)
      this.queue.forEach(({val,priority},index)=> console.log(`value ${val} priority ${priority} index ${index}`))
      return maxPriority;
    }
  }
  
  const pq = new PriorityQueue();
  pq.insert(1,10);
  pq.insert(2,5)
  pq.insert(33,7)
  pq.insert(33,8)
  pq.insert(33,6)
  pq.insert(33,0)
  pq.insert(33,3)
  console.log("----------------inserted-------------")
  console.log(`dequeued ${pq.dequeue().priority}`)
  console.log(`dequeued ${pq.dequeue().priority}`)
  console.log(`dequeued ${pq.dequeue().priority}`)
  console.log(`dequeued ${pq.dequeue().priority}`)
  console.log(`dequeued ${pq.dequeue().priority}`)
  console.log(`dequeued ${pq.dequeue().priority}`)
  console.log(`dequeued ${pq.dequeue().priority}`)