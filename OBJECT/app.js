/**
 * 1program to swap two numbers without using third
 * variable in js
 *
 */
//length
var a = [10, 20, 30];
console.log(a.length);

var sh = [10, 20, 30, 40];
console.log(sh.shift()); //remove the first arr element
console.log(sh); //20,30,40

var sha = [];
console.log(sha.shift()); //undefined becuase arr is undefined

//unshift - use to add element at the begining of array

console.log(sha.unshift("55"));
