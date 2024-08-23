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
 * 
 */