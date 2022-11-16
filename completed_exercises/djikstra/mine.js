class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(v) {
        this.values.push(v);
        this.values.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.values.shift();
    }

    size() {
        return this.values.length;
    }
}

class Edge {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {
            *[Symbol.iterator]() {
                for (const key of Object.keys(this)) {
                    yield key;
                }
            }
        };
    }

    addEdge(v1, v2, priority) {
        const ver1 = new Edge(v1, priority);
        const ver2 = new Edge(v2, priority);
        this.adjacencyList[v1].push(ver2);
        this.adjacencyList[v2].push(ver1);
        // //console.log(`this.adjacencyList ${JSON.stringify(this.adjacencyList)}`)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(edge => edge !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(edge => edge !== v1);
    }

    addVertex(v) {
        this.adjacencyList[v] = [];
        //console.log(`this.adjacencyList ${JSON.stringify(this.adjacencyList)}`)
    }

    removeVertex(v) {
        this.adjacencyList[v].forEach(edge => removeEdge(v, edge));
        delete this.adjacencyList[v];
    }
    /**
     * 
     * @param {*} from 
     * @param {*} to WE ASSUME THE TO NODE WILL ALWAYS EXIST IN THE PATH FROM 
     * @returns 
     */
    dijkstra(from, to) {
        const distances = {};
        const previous = {};
        const result = [];
        const pq = new PriorityQueue();
        const fromVal = from;
        const toVal = to;
        for (const vertexVal of this.adjacencyList) {

            if (vertexVal === fromVal) {
                const edge = new Edge(vertexVal, 0);
                pq.enqueue(edge);
                distances[vertexVal] = 0;
            } else {
                const edge = new Edge(vertexVal, Infinity);
                pq.enqueue(edge);
                distances[vertexVal] = Infinity;
            }
            previous[vertexVal] = null;
        }
        //console.log(JSON.stringify(pq.values))
        while (pq.size() > 0) {
            //console.log(`---------------${pq.size()}----------`)
            const { value: currentVal } = pq.dequeue();
            //console.log(`currentVal ${currentVal}`)
            if (currentVal === toVal) {
                //console.log(`result found previous ${JSON.stringify(previous)}`)
                let nextNode = currentVal;
                while (nextNode) {
                    result.push(nextNode);
                    nextNode = previous[nextNode];
                }
                break;
            }
            //console.log("after init")
            if (currentVal || distances[currentVal] !== Infinity) {
                const neighbours = this.adjacencyList[currentVal];
                const currentDistFrom = distances[currentVal];
                for (const n of neighbours) {
                    //console.log(`neighbour ${JSON.stringify(n)}`)
                    const { value: neighbourValue, priority: neighbourPriority } = n;
                    // IN THE DISTANCES KEEP ADDING THE CURRENT PRIORITY(DISTANCE) TO THE NEXT EDGE DISTANCE
                    const dist = parseInt(currentDistFrom) + parseInt(neighbourPriority);
                    //console.log(`${dist} distances ${JSON.stringify(distances)}`)
                    if (dist < distances[neighbourValue]) {
                        distances[neighbourValue] = dist;
                        pq.enqueue(new Edge(neighbourValue, neighbourPriority));
                        previous[neighbourValue] = currentVal;
                        //console.log(`${JSON.stringify(previous)}`)
                    }
                }
            }
        }

        return result.reverse();
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


console.log(graph.dijkstra("A", "E"));