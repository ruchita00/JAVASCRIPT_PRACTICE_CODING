//1 object property existence

const obj = { a: 1, b: 2, c: 3 };
console.log("a" in obj); //true
console.log(obj.hasOwnProperty("b")); //true
console.log(obj.hasOwnProperty("cd")); //true

//2 accessing nested properties
/**
 * You can use optional chaining (?.) to safely access
 * nested properties. This prevents errors if any part
 *  of the chain is undefined or null.
 */

const obj1 = { a: { b: { c: 3 } } };

console.log(obj1?.a?.b?.c); //3

/**
 * 3 cloning an object
 *You can use the Object.assign() method or the spread 
 operator (...) to create a shallow copy of an object.
 */

const obj3 = { a: 1, b: 2 };

//using Object.assign
const copy1 = Object.assign({}, obj3);
console.log(copy1);

//using spread operator
let copy2 = { ...obj3 };
console.log(copy2);

/**
 * 4 Iterating over object properties
 * You can use a for...in loop or Object.keys(),
 *  Object.values(), or Object.entries() methods to
 * iterate over object properties.
 */
const obj4 = { a: 1, b: 2, c: 3 };

for (let key in obj4) {
  console.log(key, obj4[key]); // a 1, b 2, c 3
}

Object.keys(obj).forEach((key) => console.log(key, obj[key]));

//using object.entires
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

/**
 * 5 merging 2 objects
 * You can merge two objects using Object.assign() or
 *  the spread operator.
 */

const obj11 = { a: 1 };
const obj22 = { b: 2 };

const mergeObj = { ...obj11, ...obj22 };
console.log(mergeObj);

const mergeObj1 = Object.assign({}, obj22, obj11);
console.log(mergeObj1);

/**
 * 6 deleting a property
 *
 */
const obj12 = { a: 1, b: 2, c: 3 };

delete obj12.b;
console.log(obj12);

/**
 * 7 checking for empty object
 *
 *  How can you check if an object is empty
 * (has no properties)?
 */
const object = {};
const object1 = { a: 1 };

console.log(Object.keys(object).length === 0); //true
console.log(Object.keys(object1).length === 0); //false

/**
 * defualt values for object properties
 * undefined
 */
const newObj = { a: 1, b: undefined };

const a = newObj.a || 10;
console.log(a); //1
const b = newObj.b || 20;
console.log(b); //20

// Using nullish coalescing operator (handles `undefined` and `null`)

const c = newObj.c ?? 30;
console.log(c); //30
