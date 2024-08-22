/** 1 find duplicate arr */

const arr = [1, 2, 8, 2, 9, 8];
const duplicate = arr.filter((ele, index, arr) => arr.indexOf(ele) !== index);

function findDuplicate(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return [...duplicates];
}

console.log(findDuplicate(arr));

/**2 find second large and second small  */

const findSecondSmallSecondLarge = (arr) => {
  if (arr > 2) {
    return "arr length should grether than 2";
  }

  let large = -Infinity;
  let secondLarge = -Infinity;
  let small = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
  }
  return {
    secondLarge:
      secondLarge === -Infinity ? "all element are same" : secondLarge,
    secondSmall: secondSmall === Infinity ? "all element are sae" : secondSmall,
  };
};

const newa = [1, 2, 3, 4, 5];

const { secondLarge, secondSmall } = findSecondSmallSecondLarge(newa);
console.log(secondLarge, secondSmall);

const findOccurance = (str) => {
  let exist = {};
  for (let i = 0; i < str.length; i++) {
    if (exist[str[i]]) {
      exist[str[i]] = exist[str[i]] + 1;
    } else {
      exist[str[i]] = 1;
    }
  }
  for (let item in exist) {
    console.log("occurance " + item + " of " + exist[item]);
  }
};
const str = "ruchita sagalgile";

console.log(findOccurance(str));
