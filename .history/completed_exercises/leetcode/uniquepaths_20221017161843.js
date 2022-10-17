/**
*  For a given m*n grid, traverse unique paths to m-1,n-1 by moving either right m+1 or down n+1 at any point in time.
* Input-> m,n two integers 1>=m.n<=100 Output-> integer of number of paths
* Examples
* 3,2 -> 3
* Steps
* Create a graph with the coordinates
* each node represents coordinates m,n
* create a node class representing a node with values m, n and the adjacency list
* create nodes, in the adjacency list add edges for a given node m,n with nodes (m+1,n) (m-1,n) (m,n+1) (m,n-1)
* Traverse BF from m,n by considering an edge/path if the current m=m+1 and current n=n+1
* starting from 0,0 everytime I visit node m-1,n-1 I am going to increase the count
* Optimization if m>n do DF, if m<n do BF, if m=n, BF
*/

class Paths{
    constructor(){
     this.adjacencyList={};
   }
   
   addVertex(node){
     if(!node || this.adjacencyList[node.key]){
       return;
     }
       this.adjacencyList[node.key]=[];
   }
   
   addEdge(node1,node2){
     if(!node1 || !node2){
       return;
     }
     if(node1.validEdge(node2) && !this.adjacencyList[node1.key].some(edge => edge.equals(node2))){
       this.adjacencyList[node1.key].push(node2);
     }
   }
 
   //BF traversal
   uniquePaths(node, targetNode){
     if(!node || !targetNode){
       return 0;
     }
     if(Object.keys(this.adjacencyList).length ===1 && this.adjacencyList[node.key] && this.adjacencyList[node.key].length===0){
       return 1;
     }
     const queue=[node];
     const visited={};
     let unique=0;
     
     while(queue.length > 0){
       const current=queue.shift();
       //console.log(`adjacency list for ${current.key} : ${JSON.stringify(this.adjacencyList[current.key])}`)
       this.adjacencyList[current.key].forEach(edge=>{
         if(edge.equals(targetNode)){
           unique++;
         }
         queue.push(edge);
       });
     }//end of while
     return unique;
   }
   
 }
 
 class Node{
   constructor(m,n){
     this.m=m;
     this.n=n;
     this.key= `${this.m}${this.n}`;
   }
   
   validEdge(toCompare){
     return ((this.m +1)===toCompare.m && this.n=== toCompare.n) ||((this.n +1)===toCompare.n && this.m=== toCompare.m);
   }
  equals(nodeToCompare){
    return this.m===nodeToCompare.m && this.n===nodeToCompare.n;
  }
  
   
 }
 var uniquePaths = function(m, n) {
     let x=0,y=0;
     let paths=new Paths();
     while(y<n){
       const root= new Node(x,y);
        let left= null;
       if(x-1>=0){
         left=new Node(x-1,y);
       }
 
       const right=(x+1 < m)? new Node(x+1,y):null;
       let top=null;
       if(y-1>=0){
         top=new Node(x,y-1);
       }
       const bottom = (y+1 < n)? new Node(x,y+1): null;
       paths.addVertex(root);
        paths.addVertex(top);
        paths.addVertex(right);
        paths.addVertex(left);
        paths.addVertex(bottom);
       //add edges
       paths.addEdge(root,right);
         paths.addEdge(root,left);
       paths.addEdge(root,top);
       paths.addEdge(root,bottom);
       x++;
       if(x===m){
         x=0;
         y++;
       }
     }
     console.log`Adjacency list ${paths.adjacencyList}`
   return paths.uniquePaths(new Node(0,0), new Node(m-1,n-1));
 };
 
 console.log(uniquePaths(23,12))
 
 