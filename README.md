# JAVASCRIPT_PRACTICE_CODING

1.  What is different between undefined and nondefined in javascript?

- in js if you try to use a variable that doesnt exit and has not been declared then js will throw an error
  var name is not defined and script will stop executing. however if you use typeof undeclared_variable then it will return undefined

2. What will be the output of the code below?

- var y = 1;
  if (function f(){}) {
  y += typeof f;
  }
  console.log(y);

- undefined

