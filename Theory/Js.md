# what is the difference between splice and slice

slice :

- doesnt modify the original array
- returns the subset of original array
- used to pick the elements from array

splice:

- modify the original array
- return the deleted element as an array
- used to insert /delete element to from array

# What is curring function?

- currying the the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

const multipArgFunction (a,b,c)=>a+b+c

console.log(multipArgFunction(1,2,3)) //6

const curryUnaryFunction=(a)=>(b)=>(c)=>a+b+c;

curryUnaryFunction(1) // b=>c-> 1+b+c
curryUnaryFunction(1)(2) // c= 3+c
curryUnaryFunction(1)(2)(3) //6
