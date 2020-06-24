# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[12-functions-301](../README.md)/1-fill-in-the-blanks 

- [/1-write-tests.js](#1-write-testsjs)  
- [/2-write-tests.js](#2-write-testsjs)  
- [/3-pass-tests.js](#3-pass-testsjs)  
- [/4-pass-tests.js](#4-pass-testsjs)  
---

## /1-write-tests.js 

>  
>
> [review source](..\..\..\exercises\12-functions-301\1-fill-in-the-blanks/1-write-tests.js)

```js
'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange numbers like
//  NaN, Infinity, -0.0, 1.0003, -Infinity, -NaN, ...

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
const add = (x, y) => {
    if (typeof x !== 'number') { throw new TypeError('x'); }
    if (typeof y !== 'number') { throw new TypeError('y'); }

    const result = x + y;

    if (typeof result !== 'number') { throw new TypeError('result'); }
    return result;
};

const _1_expect = 3;
const _1_actual = add(1, 2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 4;
const _2_actual = add(2, 2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 0;
const _3_actual = add(0, 0);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 1.0004;
const _4_actual = add(1.0003, 0.0001);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 13;
const _5_actual = add(6, 7);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 17;
const _6_actual = add(8, 9);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 0;
const _7_actual = add(0, 0);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = -7;
const _8_actual = add(-57, 50);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 64;
const _9_actual = add(30, 34);
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /2-write-tests.js 

>  
>
> [review source](..\..\..\exercises\12-functions-301\1-fill-in-the-blanks/2-write-tests.js)

```js
'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange values?

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
const strictEqual = (a, b) => {
    // no need to check a or b, they can be any type

    const result = a === b;

    if (typeof result !== 'boolean') { throw new TypeError('result'); }
    return result;
};


const _1_expect = false;
const _1_actual = strictEqual(3, 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = strictEqual(NaN, NaN);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = strictEqual(null, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = strictEqual(12, '12');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = true;
const _5_actual = strictEqual(-0, 0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = strictEqual(undefined, undefined);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = strictEqual('', ' ');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = strictEqual(5, 5);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = strictEqual(6, 6);
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

>  
>
> [review source](..\..\..\exercises\12-functions-301\1-fill-in-the-blanks/3-pass-tests.js)

```js
'use strict';

// write the logic to pass these tests

/**
 * checks if two values have the same truthiness
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const sameTruthiness = (a, b) => {
    // no need to check a or b, they can be any type

    const result = Boolean(a) === Boolean(b);

    if (typeof result !== 'boolean') { throw new TypeError('result'); }
    return result;
};


const _1_expect = false;
const _1_actual = sameTruthiness(1, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = sameTruthiness('', ' ');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = sameTruthiness(null, 'null');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = sameTruthiness(false, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = sameTruthiness(NaN, 'false');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = sameTruthiness(2, '2');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = sameTruthiness('true', true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = sameTruthiness(-1, 1);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = sameTruthiness('hi!', 'bye :(');
console.assert(_9_actual === _9_expect, 'Test 9');
```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

>  
>
> [review source](..\..\..\exercises\12-functions-301\1-fill-in-the-blanks/4-pass-tests.js)

```js
"use strict";

// write the logic to pass the tests
// describe the function's behavior in the comment

/**
 * _
 * @param {any} a
 * @returns {boolean}
 */
const mystery = a => {
    // no need to check a , they can be any type

    const result = isNaN(Number(a)) ? true : false;
    if (typeof result !== "boolean") {
        throw new TypeError("result");
    }
    return result;
};

const _1_expect = false;
const _1_actual = mystery("1");
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = false;
const _3_actual = mystery(null);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = false;
const _4_actual = mystery(8.5);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = false;
const _5_actual = mystery("Infinity");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = false;
const _6_actual = mystery("");
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = true;
const _7_actual = mystery(undefined);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = true;
const _8_actual = mystery("four");
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = true;
const _9_actual = mystery("hi!");
console.assert(_9_actual === _9_expect, "Test 9");
```

[TOP](#debuggercises)

