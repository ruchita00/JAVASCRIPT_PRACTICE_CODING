"use strict";
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

// polyfill for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

/**
 * What is a service worker
 * 
 * A Service worker is basically a script (JavaScript file) 
 * that runs in the background, separate from a web page and
 *  provides features that don't need a web page or user
 *  interaction. Some of the major features of service workers 
 * are Rich offline experiences(offline first web application 
 * development), periodic background syncs, push notifications,
 *  intercept and handle network requests and programmatically
 *  managing a cache of responses.


 *  */

/**
 * call apply and bind
 *
 * are methods available on functions that control execution
 * context and augrement of the function
 *
 * call: invoke the function with specifies this context and pass
 * individual argument
 *
 * apply : invoke the function with specifies this context
 * and pass argumnets individually
 *
 * bind: create a new function with specifies this context
 * and optionally predefined argument
 */

var person = {
  name: "ruchi",
  hello: function (thing) {
    console.log(this.name + " say hello" + thing);
  },
};
var otherName = {
  name: "tina",
};

person.hello.call(otherName, "world");
person.hello.apply(otherName, ["world"]);
const newBind = person.hello.bind(otherName);
newBind("world");

/**
 * closure:
 * is the combination of functions bind together with its
 * lexical scope
 * it form a closure
 */

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}

x();

/** this
 * this is work differently with this keywords
 *
 * this in global space
 *
 * this inside a function
 *
 */
this;
console.log(this); //window
//this keyword in global space represent global object

function x() {
  //this
  console.log(this);
  //with strict mode --undefined
  //without strict mode - window
  //this substitution: if the value of this is undefined or null
  //

  /** this will be replace with global object only in
   * non strict mode
   *
   */
}
x();
/**
 * the value of this depends on how this is called
 *
 * in the arrow functions
 * the value of this is window obj
 * but in normal function the value of this is reference to
 * nearest obj
 *
 * in bind it sharing methods
 */

/**
 * in the
 */

/**
 * - How rendering works in the browser.
 *
 * rendering in broswer involves serveral steps to convert raw
 * html,css and js into visual representation that user can interact
 * with
 *
 * 1. rendering in the browser invloves
 * parsing html to build the dom,
 * parsing css to build to cssom
 * and then these to create the render tree
 * which is used to compute layouts and paints
 * the content to the screen.
 * js can dynamically modify the dom and cssom
 * potentially triggering reflows and repaints
 */
