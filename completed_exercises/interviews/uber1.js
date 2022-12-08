const input = {
    'A': {
        task() {
            return new Promise(resolve => {
                //console.log("started A")
                setTimeout(() => { console.log("resolved A"); resolve('A') }, 1000)
            })
        },
        dependencies: []
    },
    'B': {
        task() {
            return new Promise(resolve => {
                //console.log("started B")
                setTimeout(() => { console.log("resolved B"); resolve('B') }, 2000)
            })
        },
        dependencies: []
    },
    'C': {
        task() {
            return new Promise(resolve => {
                //console.log("started C")
                setTimeout(() => { console.log("resolved C"); resolve('C') }, 5000)
            })
        },
        dependencies: ['A', 'B']
    },
    'D': {
        task() {
            return new Promise(resolve => {
                //console.log("started D")
                setTimeout(() => { console.log("resolved D"); resolve('D') }, 3000)
            })
        },
        dependencies: ['C']
    },
    'E': {
        task() {
            return new Promise(resolve => {
                //console.log("started E")
                setTimeout(() => { console.log("resolved E"); resolve('E') }, 50)
            })
        },
        dependencies: ['A', 'D']
    },
    'F': {
        task() {
            return new Promise(resolve => {
                //console.log("started F")
                setTimeout(() => { console.log("resolved F"); resolve('F') }, 500)
            })
        },
        dependencies: []
    }
}

const runTasks = async (tasks, aCallback) => {
    let finalPromises = [];

    const promiseMap = {};
    for (let key of Object.keys(tasks)) {
        //console.log(`key ${key}`)
        finalPromises.push(runTask(tasks, key, promiseMap));
    }

    let result = await Promise.all(finalPromises.map(fn => fn()));
    aCallback(result);
}

const runTask = (tasks, key, promiseMap) => {
    if (promiseMap[key]) {
        return promiseMap[key];
    }
    const t = tasks[key];
    let p = null;
    if (t.dependencies.length === 0) {
        p = t.task;
    } else {
        p = () => new Promise(async resolve => {
            let promisesToAwait = [];
            for (let dependency of t.dependencies) {
                if (promiseMap[dependency]) {
                    promisesToAwait.push(promiseMap[dependency])
                } else {
                    const r = runTask(tasks, dependency, promiseMap);
                    promisesToAwait.push(r);
                }
            }
            await Promise.all(promisesToAwait.map(fn => fn()));
            let result = await t.task();
            resolve(result);
        });
    }
    let x = null;
    //prevent the promise from being created twice
    const fn = function () {
        if (x) {
            return x;
        }
        x = p();
        return x;
    };
    promiseMap[key] = fn;
    return fn;
}

runTasks(input, (result) => console.log(result));