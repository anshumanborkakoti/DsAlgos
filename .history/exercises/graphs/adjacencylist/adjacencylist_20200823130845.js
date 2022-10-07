class Graph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.addVertex[v1].push(v2);
        //For directed, do not add below.
        this.addVertex[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.this.adjacencyList[v1].filter(edge => edge !== v2);
        this.adjacencyList[v2] = this.this.adjacencyList[v2].filter(edge => edge !== v1);
    }

    removeVertex(v1) {
        for (let edge of this.adjacencyList[v1]) {
            this.removeEdge(v1, edge);
        }
        //Delete vertex
        delete this.adjacencyList[v1];
    }

    //     d
    //  /  |         
    // A - b- e 
    //     \
    //     c          
    depthFirstTraversal(start) {
        const visited = {};
        const result = [];
        (function dfs(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(element => {
                if (!visited[element]) {
                    dfs(element);
                }
            });
        })(start)
    }

    depthFirstIterativeTraversal(start) {
        const result = [];
        const visited = {};
        const stack = new Stack();
        stack.push(start);
        while (stack.length()) {
            const element = stack.pop();
            if (!visited[element]) {
                visited[element] = true;
                result.push(element);
                this.adjacencyList[element].forEach(sibling => {
                    stack.push(sibling);
                });
            }
        }
    }

    breadthFirstIterativeTraversal(start) {
        const result = [];
        const visited = {};
        const queue = new Queue();
        queue.push(start);
        while (queue.length()) {
            const element = queue.pop();
            if (!visited[element]) {
                visited[element] = true;
                result.push(element);
                this.adjacencyList[element].forEach(sibling => {
                    queue.push(sibling);
                });
            }
        }
    }


}

class Stack {
    constructor () {
        this.values = [];
    }

    push(value) {
        this.values.push(value);
    }

    pop() {
        return this.values.pop();
    }

    length() {
        return this.values.length;
    }
}

class Queue {
    constructor () {
        this.values = [];
    }

    push(value) {
        this.values.unshift(value);
    }

    pop() {
        return this.values.pop();
    }

    length() {
        return this.values.length;
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('B', 'E');
g.addEdge('B', 'D');
g.addEdge('D', 'A');

g.depthFirstTraversal('A');