//cloning an object
const obj = { a: "1", b: "2", c: "3" };

//using spread operator
const obj2 = { ...obj };
console.log(obj2);

//using Object.assign
const obj3 = Object.assign({}, obj);
console.log(obj3);

//using deep copy
const deepCopy = structuredClone(obj);
console.log(deepCopy);

const deepCopy1 = JSON.parse(JSON.stringify(obj));
console.log(deepCopy1);

//merge the 2 object in js without modifies the original obj
const newObj1 = { a: "1", b: "2", c: "3" };

const newObj2 = { d: "1", e: "2", f: "3" };

const merge = { ...newObj1, ...newObj2 };
console.log(merge);

//check the quality of object

//1reference equality

const newObj11 = { a: "1", b: "2", c: "3" };
const newObj111 = newObj11;
const newObj22 = { d: "1", e: "2", f: "3" };

console.log(newObj11 === newObj22); //false {different obje}
console.log(newObj111 === newObj11); //true (same reference)

//2 shallow comparison
/**
 * Use Case: Use this when you only need to compare
 * objects at a single level, without considering nested
 * structures.
 * */

function areObjectsEqual(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
const objA = { name: "Alice", age: 25 };
const objB = { name: "Alice", age: 25 };
const objC = { name: "Alice", age: 30 };
console.log(areObjectsEqual(objA, objB)); // true (same keys and values)
console.log(areObjectsEqual(objA, objC)); // false (age differs)

/**
 * deep comparison
 * Use Case: This method is ideal for complex objects
 *  that may contain nested structures, ensuring a thorough
 *  comparison.
 */

function deepCompare(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    typeof obj1 === null ||
    typeof obj2 === null
  ) {
    return false; //hnadle primitive type and null
  }

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (!key2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const obj11A = {
  name: "alice",
  details: {
    city: "new yourk",
    age: 25,
  },
};
const obj11B = {
  name: "alice",
  details: {
    city: "new yourk",
    age: 25,
  },
};

console.log(deepCompare(obj11A, obj11B)); //true
