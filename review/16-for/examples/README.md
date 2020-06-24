# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[16-for](../README.md)/examples 

- [/1-for-many-lines.js](#1-for-many-linesjs)  
- [/2-for-one-line.js](#2-for-one-linejs)  
- [/3-for-infinite.js](#3-for-infinitejs) - _too much iteration_ 
---

## /1-for-many-lines.js 

>  
>
> [review source](..\..\..\exercises\16-for\examples/1-for-many-lines.js)

```js
// 1: use strict
'use strict';

// 2: declare and assign result
let result = 0;

for (
  // 3: declare and assign i
  let i = 0; // begin

  // 4, 7, 10, 13, 16: check the condition
  i < 4; // condition

  // 6, 9, 12, 15: increment i
  i++ // step
) {

  // 5, 8, 11, 14: run the body
  result += i;
}

// step: 17
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/

```

[TOP](#debuggercises)

---

## /2-for-one-line.js 

>  
>
> [review source](..\..\..\exercises\16-for\examples/2-for-one-line.js)

```js
// 1: declare and assign result
let result = 0;


// 2: declare and assign i
// 3, 6, 9, 12, 15: check the condition
// 5, 8, 11, 14: increment i
for (let i = 0; i < 4; i++) {
  // 4, 7, 10, 13: run the body
  result += i;
}

// step: 16
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/

/* variables analysis:

  result: accumulator, number, strategy
    this is the final result of the program
    it accumulates all of i's values using addition
    declared in global scope
    reassigned in the while loop
    read in the assertion
  i: stepper, number, strategy
    it's value is used to create the final result
    it's reassigned incremental values in the for loop declaration
    declared in for loop, not available in global scope
    read in the for loop ...
      to accumulate the result
      to check if the loop has stepped enough times

  this is a simple analysis, what would you want to add?
*/

```

[TOP](#debuggercises)

---

## /3-for-infinite.js 

> too much iteration 
>
> [review source](..\..\..\exercises\16-for\examples/3-for-infinite.js)

```txt
UNCAUGHT: Error: Loop exceeded 50 iterations
    at Object.<anonymous> (  ...  \exercises\16-for\examples\3-for-infinite.js:18:65)
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


for (let i = 0; 1 < i; i++) {
  console.log('A.', i);
}

for (let i = 0; 0 < i; i++) {
  console.log('B', i);
}

for (let i = 0; -1 < i; i++) {
  console.log('C', i);
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

