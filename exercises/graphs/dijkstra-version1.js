class PriorityQueue {
    constructor () {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor () {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    // Dijkstra(start, finish){
    //     const nodes = new PriorityQueue();
    //     const distances = {};
    //     const previous = {};
    //     let path = [] //to return at end
    //     let smallest;
    //     //build up initial state
    //     for(let vertex in this.adjacencyList){
    //         if(vertex === start){
    //             distances[vertex] = 0;
    //             nodes.enqueue(vertex, 0);
    //         } else {
    //             distances[vertex] = Infinity;
    //             nodes.enqueue(vertex, Infinity);
    //         }
    //         previous[vertex] = null;
    //     }
    //     // as long as there is something to visit
    //     while(nodes.values.length){
    //         smallest = nodes.dequeue().val;
    //         if(smallest === finish){
    //             //WE ARE DONE
    //             //BUILD UP PATH TO RETURN AT END
    //             while(previous[smallest]){
    //                 path.push(smallest);
    //                 smallest = previous[smallest];
    //             }
    //             break;
    //         } 
    //         if(smallest || distances[smallest] !== Infinity){
    //             for(let neighbor in this.adjacencyList[smallest]){
    //                 //find neighboring node
    //                 let nextNode = this.adjacencyList[smallest][neighbor];
    //                 //calculate new distance to neighboring node
    //                 let candidate = distances[smallest] + nextNode.weight;
    //                 let nextNeighbor = nextNode.node;
    //                 if(candidate < distances[nextNeighbor]){
    //                     //updating new smallest distance to neighbor
    //                     distances[nextNeighbor] = candidate;
    //                     //updating previous - How we got to neighbor
    //                     previous[nextNeighbor] = smallest;
    //                     //enqueue in priority queue with new priority
    //                     nodes.enqueue(nextNeighbor, candidate);
    //                 }
    //             }
    //         }
    //     }
    //     return path.concat(smallest).reverse();     
    // }

    bfsTraversal(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        while (queue.length) {
            const currentVertex = queue.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].array.forEach(element => {
                if (!visited[element]) {
                    queue.unshift(element);
                    visited[element] = true;
                }
            });
        }
        return result;
    }

    Dijkstra(start, end) {
        const distances = {};
        const visited = {};
        const previous = {};
        const result = [end];
        //For traversing with the smallest distance from A
        const nodes = new PriorityQueue();
        //Initialize
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        //nodes: ['a','b','c']
        let smallest = null;
        while (nodes.values.length > 0) {
            smallest = nodes.dequeue();
            if (smallest.val === end) {
                let resVertex = previous[end];
                while (resVertex || resVertex !== start) {
                    result.unshift(resVertex);
                    resVertex = previous[resVertex];
                }
            }

            if (smallest || distances[smallest.val] !== Infinity) {
                console.log(this.adjacencyList[smallest.val])
                for (let nextNode of this.adjacencyList[smallest.val]) {
                    let candidate = distances[smallest.val] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest.val;
                        nodes.enqueue(nextNode, candidate);
                    }
                }
            }
        }

        return result.slice();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]