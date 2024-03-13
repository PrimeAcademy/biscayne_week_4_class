# Functions!

Here's my mental model of a function:

![Play-Doh Machine](./playdoh.jpg)

## Some Definitions of a Function:

* Matt's: A function is a reusable tool **that you build for yourself** that will give you different outputs when you provide it with different inputs.
* MDN's: Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
* freeCodeCamp's: A function is a block of code that performs a specific task. JavaScript functions are basically used to encapsulate logic, making that code more reusable and easier to understand.

---

## You Should Think of Functions in Terms of Inputs, Outputs, and Side-Effects:

### Inputs

* Function parameters allow us to provide inputs to a given function.
* Function arguments are the actual inputs we provide when we run the function.

### Outputs

* `return` determines what the function **evaluates to**.
  * If you do not `return` a value from your function, it will implicitly **evaluate** to `undefined`.

### Side-Effects:

* Any observable behavior that a function enacts as a result of being called is a side-effect.
  * A `console.log` statement that runs when a function is called is an example of a side-effect.

---

## INPUTS: Parameters and Arguments

### Parameters:

Parameters exist within our function definition.

```js
// Here: colorOne, colorTwo, and shape are PARAMETERS.
//       This is where we define/configure what INPUTS
//       our function expects to receive.
function thePlayDohMachine(colorOne, colorTwo, shape) {
  
}
```

### Arguments:

Arguments are what we provide to our function when we call it.

```js
// Here: 'blue', 'green', and 'star' are PARAMETERS.
//       These are the INPUTS that we are providing to
//       the function for this instance of calling it.
thePlayDohMahine('blue', 'green', 'star');
```

### So:

It's accurate to say that *parameters are labeled placeholders*, and *arguments provide the values that are assigned to the labeled placeholders*.

* Parameter: A coin slot on a gumball machine.
* Argument: A quarter that you place in the coin slot.

---

## OUTPUTS: `return` Statements:


A `return` statements within a function specifies what value a given function call will **evaluate** to.

```js
// Here: 'I always return this.' is the RETURN STATEMENT.
//       This means that 'I always return this.' is the value
//       that this function will return.
function uselessFunction() {
  return 'I always return this.';
}

let a = uselessFunction();
let b = uselessFunction();
let c = uselessFunction();

console.log(a) // Would print: 'I always return this.'
console.log(b) // Would print: 'I always return this.'
console.log(c) // Would print: 'I always return this.'
```

Further, the moment you `return` something from a function, the function's execution ceases.

```js
function exampleOfExecutionCeasing() {
  return 22;
  console.log('I will never happen. 😕');
}

exampleOfExecutionCeasing(); // Will NOT console.log anything!
```

## SIDE-EFFECTS:

```js
// HERE: There are two side effects. This function will print
//       'Blargh.' in the browser console AND it will find an
//       HTML element whose id is #clown-facts and delete it.
function doSideEffects() {
  console.log('Blargh.');
  document.getElementById('clown-facts').remove();
  return '🤷‍♂️';
}
```

Note! This 👆 example has:
* Multiple side-effects.
* A `return` value.

It's totally ok for your functions to do both of these things (or just one thing). The only real rule here is that **a given function call can only `return` one value**. That said, a function can conditionally return different values, like so:

```js
function isNegativeNumber(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}

let a = isNegativeNumber(-2);
let b = isNegativeNumber(55);

console.log(a); // Would print: true
console.log(b); // Would print: false
```
