const findSecondLarge = (arr) => {
  if (arr.length < 2) {
    return "length should be grather than 2";
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
      secondLarge === -Infinity ? "all the element are same" : secondLarge,
    secondSmall:
      secondSmall === -Infinity ? "all the element are same" : secondSmall,
  };
};

const newArr = [1, 2, 3, 4];
const { secondLarge, secondSmall } = findSecondLarge(newArr);
console.log(secondLarge, secondSmall);

function flatternArr(arr) {
  let result = [];
  function flattern(subArr) {
    for (let i = 0; i < subArr.length; i++) {
      if (Array.isArray(subArr[i])) {
        flattern(subArr[i]);
      } else {
        result.push(subArr[i]);
      }
    }
  }
  flattern(arr);
  return result;
}
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flatArr = flatternArr(nestedArray);
console.log(flatArr);

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
    console.log("occurance of " + item + " " + exist[item]);
  }
};

const newstr = "ruchita sagalgile";
console.log(findOccurance(newstr));

const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8];
const findDuplicate = (arr) => {
  let seems = new Set();
  let duplicates = new Set();

  for (const item of arr) {
    if (seems.has(item)) {
      duplicates.add(item);
    } else {
      seems.add(item);
    }
  }
  return [...duplicates];
};
console.log(findDuplicate(arr));

console.warn(+true);
console.warn(typeof +true);
console.warn(!"anil"); //false
console.warn(!!"aniul"); //true
console.warn(typeof !"anil");

const arrNumber = [1, 9, 87, 65, 655];

const findMinMax = (arr) => {
  return arr.reduce((curr, acc) => {
    return curr < acc ? curr : acc;
  });
};
console.log(findMinMax(arrNumber));

const arrayNew = [1, 2, 3, 4, 5, 6, 9, 10];

const missing = [1, 2, 3, 7, 8, 9];
const missingArr = [];
const missingValue = (arr) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingArr.push(i);
    }
  }
  return missingArr;
};
console.log(missingValue(arrayNew));

const even = missing.filter((item) => item % 2 === 0);
const odd = missing.filter((item) => item % 2 !== 0);

const findSum = missing.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(findSum);

const reverseStr = (str) => {
  str = str + " ";
  let str1 = " ";
  let result = " ";
  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      result = result + str1;
      str1 = " ";
    }
  }
  return result;
};
console.log(reverseStr("hello world"));

const isPalindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse === str ? true : false;
};
console.log(isPalindrome("1234"));

const findtheLogenestWord = (sentence) => {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    const clearnWord = word.replace(/[^a-zA-Z]/, "");
    if (clearnWord.length > longestWord.length) {
      longestWord = clearnWord;
    }
  }
  return longestWord;
};

const sentence = "The quick brown fox jumped over the lazy dogs.";

console.log(findtheLogenestWord(sentence));

const isPlaind = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse === str ? true : false;
};

const findDuplicates = (arr) => {
  let seem = new Set();
  let duplie = new Set();

  for (let item of arr) {
    if (seem.has(item)) {
      duplie.add(item);
    } else {
      seem.add(item);
    }
  }
  return [...duplie];
};

const newAAR = [1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 88, 88];
console.log(findDuplicates(newAAR));

const findReverse = (str) => {
  str = str + " ";
  let str1 = " ";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    str1 = str[i] + str1;
    if (str[i] === " ") {
      result = result + str1;
      str1 = " ";
    }
  }
  return result;
};

console.log(findReverse("hello world"));

const findmergesotArr = (arr1, arr2) => {
  let j = 0;
  let i = 0;
  let mergeSort = [];

  while (i < arr1.length && j < arr2.length) {
    if (i < arr1[i]) {
      mergeSort.push(arr1[i]);
      i++;
    } else {
      mergeSort.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergeSort.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergeSort.push(arr2[j]);
    j++;
  }
  return mergeSort;
};
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

console.log(findmergesotArr(array1, array2));

const findPairFromTwoArrays = (arr1, arr2) => {
  let target = 10;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] + arr2[j] === target) {
        return [arr[i], arr2[j]];
      }
    }
  }
  return null;
};

const array11 = [0, 3, 4, 31];
const array22 = [4, 6, 30];
console.log(findPairFromTwoArrays(array11, array22)); // Output: [4, 6] or [6, 4]

const newss = [1, 2, 3, 4, 5];
const findMinMaxs = (arr) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  return { minValue, maxValue };
};
console.log(findMinMaxs(newss));

function findMinAndMax(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return { minValue, maxValue };
}

const array = [0, 3, 4, 4, 6, 30, 31];
const result = findMinAndMax(array);
console.log(result); // Output: { minValue: 0, maxValue: 31 }

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i = i + 2) {
    if (num % i === 0) return false;
  }
  return true;
}
