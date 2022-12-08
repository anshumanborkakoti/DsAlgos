let count = 1;
const log = throttle(async (payload) => {
    const endPoint = 'https://example.com';
    // window.navigator.sendBeacon(endPoint,payload);
    if (count === 10) {
        return Promise.resolve("success");
    }
    ++count;
    const pl = { payload };
    return fetch(endPoint, { method: 'POST', body: JSON.stringify(pl) });
});

async function test() {
    let p = await log({ "a": 123 });
    console.log(p);
}

function throttle(fn, opts = { "MAX_RETRIES": 10 }) {
    let prev = 0;
    let counter = 1;
    return function () {
        return new Promise((resolve, reject) => {
            (function r() {
                //const self=this;
                //.log(`args ${JSON.stringify(arguments)} ${self}`)
                setTimeout(async () => {
                    let result = null;
                    try {
                        console.log(`try ${counter}`);
                        result = await fn.apply(fn, Array.from(arguments));
                        resolve(result);
                        console.log(`success ${counter}`);
                    } catch (e) {
                        console.log(`error ${counter}`);
                        if (counter === opts.MAX_RETRIES) {
                            console.error("failed");
                            reject("failed");
                            return;
                        }
                        ++counter;
                        prev += 1000;
                        //console.log(`self ${self}`)
                        r.apply(r, Array.from(arguments));
                    }
                }, prev);
            })();
        }) //end of P
    }
}

test();





