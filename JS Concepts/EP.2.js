/**
 * how js code is executed & callstack
 *
 * first the global execution context is created with memory and
 * code component
 *
 * execution context is created in 2 phases
 * memory creation phase
 * code execution phase
 *
 * in the memory creation phase js allocated memory to all
 * variables and functions
 * n: undefined
 * square: fn{...}
 *
 * initially varaibles stored with special keywords undefined
 * and in case of function it stored whole code in the function
 *
 * also allocated memory to
 * square2:undefined
 * square4:undefined
 *
 *
 * in the second code execution phase:
 * in the second phase the value of n is 2
 * n: 2
 * line 30 to 33 nothing to execution
 * line 35 here function invokation
 *
 * when ever the fucntion invoke in js again the new
 * execution context is being created
 *
 * this new execution context again have memory and code execution
 * component
 *
 * phase1:
 * num: undefined
 * ans:undefined
 *
 * phase2: code execution
 * num:2
 * ans: 4
 *
 * now we encounter return ans so function done with its work
 *  return the control to where the function was invoke
 * so the control goes to line number 57 again
 * and that whole execution context is deleted as soon as we return
 * the value
 *
 * so the value of ans assign to
 * square2=4
 *
 * then control goes to next line again the brand new execution
 * context is created and same process repeat again as we
 * see above
 * then as soon as we return value
 * so value of ans assign to
 * square4 = 16
 * and the execution context is deleted
 *
 * now js done with its work
 * program finished here also the global execution conext is also
 * deleted
 *
 *
 *
 */
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
