// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let fib = [0, 1];
//   for (let count = 2; count <= n; count++) {
//     fib[count] = fib[count - 1] + fib[count - 2];
//   }
//   return fib[n];
// }

// function fib(n = 0, fibseries = [0, 1]) {
//   if (fibseries.length > n) {
//     return fibseries[n];
//   }
//   fibseries[fibseries.length] =
//     fibseries[fibseries.length - 1] + fibseries[fibseries.length - 2];

//   return fib(n, fibseries);
// }
// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const invoke = fn.apply(this, args);
//     cache[args] = invoke;
//     return invoke;
//   };
// }
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// fib = memoize(fib);

function memoize(fn) {
  const cache = [];
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
fib = memoize(fib);
module.exports = fib;
