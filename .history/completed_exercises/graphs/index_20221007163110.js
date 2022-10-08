class Node {
    constructor(value) {
        this.val = value;
        this.chidren = [];
    }
}

class Graph {
    //Undirected
    //Not weighted

    constructor() {
        this.rooot = null;
        this.adjacencyList = {};
    }

    addVertex(v) {
        this.adjacencyList[v.val] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1.val].push(v2);
        this.adjacencyList[v2.val].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1.val].filter(v => v.val !== v2.val);
        this.adjacencyList[v2.val].filter(v => v.val !== v1.val);
    }

    removeVertex(v) {
        for (let edge of this.adjacencyList[v.val]) {
            removeEdge(v, edge);
        }
        delete this.adjacencyList[v.val];
    }

    traverseDFRecursive(v) {
        const queue = [];
        const visited = {};
        const traverse = (vertex) => {
            if (!vertex) {
                return;
            }
            if (!visited[vertex.val]) {
                visited[vertex.val] = true;
                queue.push(vertex);
            }
            this.adjacencyList[vertex.val].forEach(v => {
                if (!visited[vertex.val]) {
                    traverse(vertex);
                }
            })
        }
        traverse(v);
        return queue;
    }

    traverseDFIterative(v) {
        const stack = [v];
        const result = [];
        const visited = {};
        while (stack.length) {
            const vertex = stack.pop();
            if (visited[vertex.val]) {
                continue;
            }
            visited[vertex.val] = true;
            result.push(vertex);
            this.adjacencyList[vertex.val].forEach((ver) => {
                if (!visited[ver.val]) {
                    stack.push(ver);
                    visited[ver.val] = true;
                }
            });//end of foreach
        }//end of while
        return result;
    }

    traverseBF() {
        const queue = [v];
        const result = [];
        const visited = {};
        while (queue.length) {
            const vertex = queue.shift();
            if (visited[vertex.val]) {
                continue;
            }
            visited[vertex.val] = true;
            result.push(vertex);
            this.adjacencyList[vertex.val].forEach((ver) => {
                if (!visited[ver.val]) {
                    queue.push(ver);
                    visited[ver.val] = true;
                }
            });//end of foreach
        }//end of while
        return result;
    }


}