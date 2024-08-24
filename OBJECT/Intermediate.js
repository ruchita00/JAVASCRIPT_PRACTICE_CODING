//Question 1: Object Destructuring

const obj = { a: 1, b: 2, c: 3 };

const { a, b } = obj;
console.log(a); //1
console.log(b); //2

//Question 2: Default Values in Destructuring

const obj1 = { aa: 1 };
const { aa, bb = 2 } = obj1;

console.log(aa); // 1
console.log(bb); // 2

//Question 3: Renaming Properties in Destructuring

const { a: x, b: y } = obj;
console.log(x); //1
console.log(y); //2

//Question 4: Deep Destructuring

const newObj = { a: 1, ab: { cc: 2, dd: 3 } };

const {
  ab: { cc, dd },
} = newObj;

console.log(cc); // 2
console.log(dd); // 3

//Question 5: Merging Nested Objects

const obj11 = { a: 1, b: { x: 2 } };
const obj2 = { b: { y: 3 }, c: 4 };

const merge = { ...obj11, b: { ...obj11.b, ...obj2.b } };
console.log(merge); // { a: 1, b: { x: 2, y: 3 }, c: 4 }

//Question 6: Copying an Object Deeply

const nobj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(nobj));
deepCopy.b.c = 3;
console.log(nobj.b.c); //2
console.log(deepCopy.b.c); //3

//Question 8: Array to Object Conversion

const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

const newO = Object.fromEntries(arr);
console.log(newO);

//Question 7: Object to Array Conversion

const objA = { a: 1, b: 2, c: 3 };

const keys = Object.keys(objA);
console.log(keys); // ['a', 'b', 'c']

//Question 9: Finding Common Keys Between Objects

const obj21 = { a: 1, b: 2, c: 3 };
const obj12 = { b: 4, c: 5, d: 6 };

const commonKeys = Object.keys(obj21).filter((key) => key in obj21);
console.log(commonKeys);

//Question 10: Counting Object Properties

const count = Object.keys(obj).length;
console.log(count); // 3

//Question 11: Object Property Values as Array
const objVal = { a: 1, b: 2, c: 3 };

const values = Object.values(objVal);
console.log(values); // [1, 2, 3]

//Question 12: Creating an Object from Two Arrays

const keyss = ["a", "b", "c"];
const val = [1, 2, 3];
const objss = Object.fromEntries(
  keyss.map((key, index) => [key, values[index]])
);
console.log(obj); // { a: 1, b: 2, c: 3 }

//Question 13: Swapping Object Keys and Values

const swapp = Object.fromEntries(
  Object.entries(objVal).map(([key, value]) => [value, key])
);
console.log(swapp);

//Questions 14: Filtering Object Properties

const obj111 = { a: 1, b: 2, c: 3 };
const filtered = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);
console.log(filtered); // { b: 2, c: 3 }

//Question 17: Object Property Enumeration

/**
 * What is the difference between for...in and
 * Object.keys() when iterating over object properties?
 *
 * for...in loops over all enumerable properties of an object
 * , including inherited ones.Oject.keys() returns only
 * the object's own enumerable properties.
 */

const objqa = Object.create({ inherited: 1 });
objqa.a = 2;

for (let key in objqa) {
  console.log(key); // 'inherited', 'a'
}

console.log(Object.keys(objqa)); // ['a']

//Question 22: Creating Immutable Objects

function deepFreeze(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}

const objsss = deepFreeze({ a: 1, b: { c: 2 } });

//Question 20: Sealing an Object

// const obj = { a: 1 };
// Object.seal(obj);

// obj.a = 2; // Modifies existing property
// delete obj.a; // Doesn't delete property
// obj.b = 3; // Doesn't add new property

// console.log(obj); // { a: 2 }

//Question 19: Preventing Extensions on Objects
//const obj = { a: 1 };
// Object.preventExtensions(obj);

// obj.b = 2; // Doesn't add new property

// console.log(obj); // { a: 1 }

//Question 18: Object-Freezing

// const obj = { a: 1 };
// Object.freeze(obj);

// obj.a = 2; // Doesn't change
// obj.b = 3; // Doesn't add new property

// console.log(obj); // { a: 1 }

//asking in interview
const newObjjj = { 10: "11", 11: "19", 12: "3" };

let sum = 0;
for (let key in newObjjj) {
  const numKey = +key;
  const numValue = +newObjjj[key];
  if (numKey > 10 && numValue > 10) {
    sum += numValue;
  }
}
console.log(sum);
