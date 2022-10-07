class Graph {
    constructor () {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    // depthFirstRecursive(start){
    //     const result = [];
    //     const visited = {};
    //     const adjacencyList = this.adjacencyList;

    //     (function dfs(vertex){
    //         if(!vertex) return null;
    //         visited[vertex] = true;
    //         result.push(vertex);
    //         adjacencyList[vertex].forEach(neighbor => {
    //             if(!visited[neighbor]){
    //                 return dfs(neighbor)
    //             }
    //         });
    //     })(start);

    //     return result;
    // }

    /**
     * Traverses a graph and returns an array which yields thr root node at first index
     * followed by its children and then their children and so on.
     * 
     * if vertex is null or undefined or if node does not exist in adj list, return a blank array
     * Return result
     * take an array result and initialize to blank.
     * Use a visited object to store visited node
     * Take an array called queue and push vertex into
     * Loop till queue.length > 0
     * Check !visited[node], if yes continue
     * If not, pop() queue and push to result
     * take adjacencylist[node] and push to queue
     * 
     * @param {Node} vertex 
     * @output result containing bfs nodes
     */
    bfs(vertex) {
        if (!vertex || !this.adjacencyList[vertex]) {
            return [];
        }
        const result = [];
        const visited = {};
        const queue = [vertex];
        while (queue.length > 0) {
            const current = queue.pop();
            if (visted[current]) {
                continue;
            }
            visited[current] = true;
            result.push(current);
            queue.shift(...this.adjacencyList[current]);
        }
        return result;
    }
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.depthFirstRecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

