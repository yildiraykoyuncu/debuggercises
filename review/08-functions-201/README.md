# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../README.md)/08-functions-201 

- [/0-example.js](#0-examplejs)  
- [/1-exercise.js](#1-exercisejs)  
- [/2-exercise.js](#2-exercisejs)  
---

## /0-example.js 

>  
>
> [review source](..\..\exercises\08-functions-201/0-example.js)

```js
'use strict';

/* BEHAVIOR vs. IMPLEMENTATION:

  BEHAVIOR: this is what your function DOES
    - behavior does not care about what's inside your function body
    - all that matters to behavior is what goes in and what goes
    - the comments you learned to write in part 1 describe behavior only
    - testing is all about describing and verifying the behavior of your function

  IMPLEMENTATION: this is HOW your function does what it does
    - implementation is all about the lines of code in your function body
    - what language features did you use?
    - how does the data change step by step inside your function?
    - your comments comments should not mention the implementation
    - debugging is all about understanding and fixing the implementation of your code

  Two functions can have the same behavior (tests), and different implementation (source code)

  Check it out:
*/


const reverseStringArray = (str) => {
  return str.split('').reverse().join('');
};

const reverseStringLoop = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};


const _1_arg = 'abcde';
const _1_expect = 'edcba';
const _1_actualArray = reverseStringArray(_1_arg);
const _1_actualLoop = reverseStringLoop(_1_arg);
console.assert(_1_actualArray === _1_expect, 'Test 1 Array');
console.assert(_1_actualLoop === _1_expect, 'Test 1 Loop');

const _2_arg = 'racecar';
const _2_expect = 'racecar';
const _2_actualArray = reverseStringArray(_2_arg);
const _2_actualLoop = reverseStringLoop(_2_arg);
console.assert(_2_actualArray === _2_expect, 'Test 2 Array');
console.assert(_2_actualLoop === _2_expect, 'Test 2 Loop');

const _3_arg = '-<=>-';
const _3_expect = '->=<-';
const _3_actualArray = reverseStringArray(_3_arg);
const _3_actualLoop = reverseStringLoop(_3_arg);
console.assert(_3_actualArray === _3_expect, 'Test 3 Array');
console.assert(_3_actualLoop === _3_expect, 'Test 3 Loop');



```

[TOP](#debuggercises)

---

## /1-exercise.js 

>  
>
> [review source](..\..\exercises\08-functions-201/1-exercise.js)

```js
"use strict";

// write two different implementations with the same behavior
//  hint: demorgan

const notAndA = (x, y) => {
    return !x && !y;
};

const notAndB = (x, y) => {
    if (!x) {
        if (!y) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;
const _1_actualA = notAndA(_1_arg1, _1_arg2);
const _1_actualB = notAndB(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, "Test 1 A");
console.assert(_1_actualB === _1_expect, "Test 1 B");

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = false;
const _2_actualA = notAndA(_2_arg1, _2_arg2);
const _2_actualB = notAndB(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, "Test 2 A");
console.assert(_2_actualB === _2_expect, "Test 2 B");

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = false;
const _3_actualA = notAndA(_3_arg1, _3_arg2);
const _3_actualB = notAndB(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, "Test 3 A");
console.assert(_3_actualB === _3_expect, "Test 3 B");

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;
const _4_actualA = notAndA(_4_arg1, _4_arg2);
const _4_actualB = notAndB(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, "Test 4 A");
console.assert(_4_actualB === _4_expect, "Test 4 B");
```

[TOP](#debuggercises)

---

## /2-exercise.js 

>  
>
> [review source](..\..\exercises\08-functions-201/2-exercise.js)

```js
'use strict';

// write two different implementations with the same behavior
//  hint: demorgan

const notAndA = (x, y) => {
    return !x || !y;
};

const notAndB = (x, y) => {
    if (!x) {
        return true;
    } else {
        if (!y) {
            return true;
        } else {
            return false;
        }
    }

};


const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;
const _1_actualA = notAndA(_1_arg1, _1_arg2);
const _1_actualB = notAndB(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = true;
const _2_actualA = notAndA(_2_arg1, _2_arg2);
const _2_actualB = notAndB(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = true;
const _3_actualA = notAndA(_3_arg1, _3_arg2);
const _3_actualB = notAndB(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;
const _4_actualA = notAndA(_4_arg1, _4_arg2);
const _4_actualB = notAndB(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');
console.assert(_4_actualB === _4_expect, 'Test 4 B');
```

[TOP](#debuggercises)

