# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[15-while](../README.md)/examples 

- [/1-while.js](#1-whilejs)  
- [/2-while-infinite.js](#2-while-infinitejs) - _too much iteration_ 
---

## /1-while.js 

>  
>
> [review source](..\..\..\exercises\15-while\examples/1-while.js)

```js
// 1: use strict
'use strict';

// 2: declare and assign a
let a = 0;
// 3: declare and assign b
const b = 8;

// 4, 6, 8, 10, 12: check the condition
while (a !== b) {
  // 5, 7, 9, 11: increment a
  a += b / 4;
}

// 13: assert a
console.assert(a === 8, 'Test 1');

/* anatomy of a while loop: https://javascript.info/while-for#the-while-loop
  while (condition) {
    // ... loop body ...
  }
*/

/* variables analysis:

  a: accumulator, number, strategy
    a also holds the final result
    it accumulates b/4
    declared in global scope
    reassigned in the while loop
    read in the assertion
  b: constant, number, strategy
    it's value is used to create the final result
    it's also read in the loop while condition
    declared in global scope
    read in while body

  this is a simple analysis, what would you want to add?
*/

```

[TOP](#debuggercises)

---

## /2-while-infinite.js 

> too much iteration 
>
> [review source](..\..\..\exercises\15-while\examples/2-while-infinite.js)

```txt
UNCAUGHT: Error: Loop exceeded 50 iterations
    at Object.<anonymous> (  ...  \exercises\15-while\examples\2-while-infinite.js:22:51)
    at Module._compile (internal/modules/cjs/loader.js:1176:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1196:10)
    at Module.load (internal/modules/cjs/loader.js:1040:32)
    at Function.Module._load (internal/modules/cjs/loader.js:929:14)
    at Module.require (internal/modules/cjs/loader.js:1080:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at evaluate (  ...  \scripts\lib\evaluate.js:28:7)
    at Object.<anonymous> (  ...  \scripts\review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1176:30) 
```

```js
'use strict';

// it is possible to write loops that will never end
//  using 'evaluate code' stops your loops after 1000 iterations
//  and throws a custom error (so googling it won't help)
// using '.. with max iterations = X' will run your code for the debugger
//  with guards against your loops exceeding X iterations

let a = 0;
while (1 < a) {
  a++;
  console.log('A.', a);
}

let b = 0;
while (0 < b) {
  b++;
  console.log('B.', b);
}

let c = 0;
while (-1 < c) {
  c++;
  console.log('C.', c);
}


/* note about this repository

  JavaScript does not have a built-in protection against infinite loops
  this is why if you ever run one in your browser it freezes and you have to close the tab

  however, this repository has some protections against infinite loops
  - when studying in the browser using localhost:3000, the loop exercises have an extra button
    "maxIterations: X" - click this button to see a simple way to avoid infinite loops
    the LiveStudy app uses regular expressions to inject guards into your loops
    if the loop exceeds the allowed iterations it will throw an error: "Loop exceeded X iterations"
    this is a custom error, it's not part of JavaScript so googling it won't help to understand it
  - when `npm run review` is executed, the script will use the same technique to try preventing infinite loops
    the only difference is that it will inject it all on one line like this:
      let loop1 = 0; while (true) { if (maxIterations < ++loop1) { throw new Error('Loop exceeded X iterations); }
    when you read the callstacks in your review files, the line numbers should be correct
    but the character numbers will be too high.  now you know why :)

*/

```

[TOP](#debuggercises)

