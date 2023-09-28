// Exporting Module

const now = 'Wednesday';
export const cart = [];

////////////////////////
/// There are 2 types of export
// I} Named Export

// i) Export Before Declaration
// export const now = 'Wednesday';
// export const addToCart = function (dish, quantity) {
//   cart.push(dish);
//   console.log(`${quantity} ${dish} added to cart`);
// }
export { now };

// II] Default Export
// NOTE: Only pass VALUE and NOT the varaible
// Only one default export can be there in 1 module
export default function (dish, quantity) {
  cart.push({ dish, quantity });
  console.log(cart);
  console.log(`${quantity} ${dish} added to cart`);
}

// 2. When one module imports another module which has top-level await then the importing module waits for the imported module to finish 'block-level code'
// console.log('Start Fetching');
// const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(resp);
// console.log('End Fetching');

console.log('Start Fetching');
fetch('https://jsonplaceholder.typicode.com/posts').then(data =>
  console.log(data)
);
console.log('End Fetching');

// Multiple exports
// export { now, addToCart };
