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

    breadthFirstIterative(vertex) {
        const result = [];
        const visited = {};
        const queue = new Queue();
        while (queue.length > 0) {
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(element => {
                if (!visted[vertex]) {
                    queue.add(this.adjacencyList[element]);
                }
            });
            vertex = queue.remove();
        }
        return result;
    }

    depthFirstIterative(vertex) {
        const result = [];
        const visited = {};
        const stack = new Stack();
        while (stack.length > 0) {
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(element => {
                if (!visted[vertex]) {
                    stack.push(this.adjacencyList[element]);
                }
            });
            vertex = stack.pop();
        }
        return result;
    }

    dfsRecursive(start) {
        const result = [];
        const visited = [];

        (function dfs(vertex) {
            if (!vertex) {
                return result;
            }
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(v => {
                if (!visited[v])
                    return this.dfs(v);
            });
        })(start);

        return result;
    }
}

class Queue {
    constructor () {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}


class Stack {
    constructor () {
        this.data = [];
    }
    push(element) {
        this.data.push(element);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        if (this.data.length > 0) {
            return this.data[this.data.length - 1];
        }
        return null;
    }
}

