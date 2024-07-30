//hoisting example

console.log("value of age is", age); //undefined
var age = 20;
console.log("value of age is", age); //20

/*

 this particular process known as hoisting

*/

// age = 100;
// console.log("value of age is", age);
// let age = 30;

//reference error cannot access age before initilization

age = 100;
console.log("value of age is", age); //100
var age = 30;
console.log("value of age is", age); //30

//var ke case me hositing working fine

/**
 * in case of let and const there is concept known as temporal dead zone
 * let and const is hosited but it is hosited in the temporal
 * dead zone
 * when ever we try to access variables before initilization
 * using let and const then temporal dead zone occur
 * and we are getting error cannot access age before initilization
 */
