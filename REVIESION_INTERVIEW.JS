const promise1 = new Promise((res, rej) => setTimeout(res, 500, "data1"));
const promise2 = new Promise((res, rej) => setTimeout(rej, 1500, "error"));

function myPromise(promiseArr) {
  let result = [];
  return new Promise((res, rej) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((data) => {
          result[index] = data;
          if (index === promiseArr.length - 1) {
            result.push(data);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
  return result;
}

function promiseSettled(promiseArr) {
  const promises = promiseArr.map((promise, index) => {
    return promise
      .then((data) => {
        return {
          value: data,
          status: "fullfil",
        };
      })
      .catch((err) => {
        return {
          reason: err,
          status: "rejected",
        };
      });
  });
  return Promise.all(promises);
}

function promiseAny(promiseArr) {
  let errors = [];
  return new Promise((res, rej) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((data) => res(data))
        .catch((err) => {
          errors[index] = err;
          if (index === promiseArr.length - 1) {
            rej(new AggregateError(err, "all promisese rejected"));
          }
        });
    });
  });
}

function promiseRace(promiseArr) {
  return new Promise((res, rej) => {
    promiseArr.forEach((promise) => {
      promise.then(res).catch(rej);
    });
  });
}

promiseRace([promise1, promise2])
  .then((data) => console.log("Promise Race", data))
  .catch((err) => console.log(err));

promiseAny([promise1, promise2])
  .then((data) => console.log("Promise Any", data))
  .catch((err) => console.log(err));

myPromise([promise1, promise2])
  .then((data) => console.log("Promise All", data))
  .catch((err) => console.log(err));

promiseSettled([promise1, promise2]).then((data) =>
  console.log("Promise allsettled", data)
);

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

const arr = [1, 2, 3, 4, 5];

const newMap = arr.myMap((item) => item * 2);
const newFilter = arr.myFilter((item) => {
  if (item > 2) {
    return item;
  }
});

const newReduce = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("map", newMap);
console.log("newFilter", newFilter);
console.log("newReduce", newReduce);

//closure: it is function bind together with its lexical scope form a closure

function x() {
  const name = "ruchita";
  function y() {
    console.log(name);
  }
  y();
}
x();

//promisees: its object represatation of js which eventually handle compltion or failture of js async operation

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

//call,apply,bind
//its is method basically use to control the execution context in js

//call- its invoke function with specific this context and add argment
//apply : its similaor to call invoke the function with specifies this context and add agrment in the list
//bind - which crete a new function with specific this context and pass argement

var person = {
  name: "ruchita",
  hello: function (thisng) {
    console.log(thisng + " " + this.name);
  },
};

var otherPerson = {
  name: "tina",
};

person.hello.call(otherPerson, "Hello call ");
person.hello.apply(otherPerson, ["hello apply"]);
const newBind = person.hello.bind(otherPerson);
newBind("hello bind");

const curryingFunc = (a) => (b) => (c) => a + b + c;

// const result1=curryingFunc(1)
// const result2=curryingFunc(1)(2)
const result3 = curryingFunc(1)(2)(3);

console.log(result3);

const user1 = {
  name: "ruchita",
  age: 20,
};

//pas by reference it doesnt create a new space in the memory but new variable adopt memory of inital value such as objects and functions are adopt memory of initial variable ie update 1 value will impact other value as well

const user2 = user1;
user2.name = "tina";
console.log(user2, user1);

//pass by value
let a = 10;
let b = a;
b++;
console.log(a, b);
// in the above code snippet the value of a is assigned to b
//  * and the valriable b has incremented since there is a new
//  * space created for variable b any update on this variable
//  * doesnt impact the variable a

let asd = {
  name: "ruch",
  age: 26,
};

let zxc = asd;
zxc.name = "carol";

console.log(asd.name, zxc.name); //carol carol

// Shallow Copy: Copies an object but maintains references to nested objects, meaning changes to those
// nested objects affect both the original and the copy.
// Deep Copy: Copies an object and all of its nested objects, creating a fully independent copy.
//Changes to the copy do not affect the original.

//in deep copy its na independednt object any change made in deep copy it not relect to orignial arr
//in shallow copy any changes made it reflect to original arr

//how the browser works in js
//  * parsing html to build the dom,
//  * parsing css to build to cssom
//  * and then these to create the render tree
//  * which is used to compute layouts and paints
//  * the content to the screen.
//  * js can dynamically modify the dom and cssom
//  * potentially triggering reflows and repaints

//  * what is the difference between spread oprator and rest opertaor
//  *
//  * rest operator collects all remaining element into an array
//  * whereas spread operator allows to iterares array /objects/
//  * string to be exapned into single argumnet/element ele rest
//  * parameneter is opposite to the spread operator
//  */

// 1.  What is different between undefined and nondefined in javascript?

// - in js if you try to use a variable that doesnt exit and has not been declared then js will throw an error
//   var name is not defined and script will stop executing. however if you use typeof undeclared_variable then it will return undefined

// 2. What will be the output of the code below?

// - var y = 1;
//   if (function f(){}) {
//   y += typeof f;
//   }
//   console.log(y);

// - undefined

// slice :

// - doesnt modify the original array
// - returns the subset of original array
// - used to pick the elements from array

// splice:

// - modify the original array
// - return the deleted element as an array
// - used to insert /delete element to from array



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
