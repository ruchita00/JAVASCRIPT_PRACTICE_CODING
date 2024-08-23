/**
 * what is promise
 * promise is object representation of eventually success or failed
 * of  js asychronouse
 *
 *
 */

const cart = ["shirt", "tshirt", "jeans"];
const promise = creatOrder(cart);
promise.then((orderId) => {
  console.log("orderId", orderId);
});

function creatOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("promise rejected");
      reject(err);
    }
    const orderId = "123";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 1000);
    }
  });
  return pr;
}
function validateCart() {
  return true;
}
/**promise chain
 *
 * promise.all
 * promise.settled
 * promise.any -it will wait for the first success (aggregate error)
 * promise.race= first promise to settle whether it success or fail
 */

/**
 * shallow copy and deep copy:
 *
 * shallow copy create  new object butit still point to the same
 * memory location
 * it means if your making any changes to the new object
 * it will reflect to the original object
 *
 * deep copy create a new object with new memeory location
 * means it will create a new obejct and any changes make any in newq
 * object it wont reflect to the original obj
 *
 *
 */

let dev1 = {
  name: "ruhci",
  skills: {
    primary: "js",
  },
};

// let dev2 = dev1;
// dev2.name = "abc";
// console.log(dev2);

// let dev2 = { ...dev1 };
//with the spread operator we get the 1 level deep shallow copy
// let dev2 = Object.assign({}, dev1);
// let dev2 = JSON.parse(JSON.stringify(dev1));
let dev2 = structuredClone(dev1);
dev2.name = "abcdcjn";
dev2.skills.primary = "raect";
console.log(dev2);
