# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[16-for](../README.md)/exercises 

- [/1-write-tests.js](#1-write-testsjs)  
- [/2-fix-the-bugs.js](#2-fix-the-bugsjs)  
- [/3-pass-tests.js](#3-pass-testsjs)  
- [/4-pass-tests.js](#4-pass-testsjs)  
---

## /1-write-tests.js 

>  
>
> [review source](..\..\..\exercises\16-for\exercises/1-write-tests.js)

```js
'use strict';

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number}
 * @returns {number}
 */
const mystery = (x) => {
    if (typeof x !== 'number') { throw new TypeError('x'); }

    let result = 0;
    for (let i = 0; i !== Math.abs(x); i++) {
        if (x > 0) {
            result += 1;
        } else {
            result += -1;
        }
    }

    if (typeof result !== 'number') { throw new TypeError('result'); }
    return result;
};


const _1_actual = mystery(-4);
const _1_expect = -4;
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_actual = mystery(-3);
const _2_expect = -3;
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_actual = mystery(-2);
const _3_expect = -2;
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_actual = mystery(-1);
const _4_expect = -1;
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = 0;
const _5_actual = mystery(0);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 1;
const _6_actual = mystery(1);
console.assert(_6_actual === _6_expect, 'Test  6');

const _7_expect = 2;
const _7_actual = mystery(2);
console.assert(_7_actual === _7_expect, 'Test  7');

const _8_expect = 3;
const _8_actual = mystery(3);
console.assert(_8_actual === _8_expect, 'Test  8');

const _9_expect = 4;
const _9_actual = mystery(4);
console.assert(_9_actual === _9_expect, 'Test  9');
```

[TOP](#debuggercises)

---

## /2-fix-the-bugs.js 

>  
>
> [review source](..\..\..\exercises\16-for\exercises/2-fix-the-bugs.js)

```js
'use strict';

/**
 * repeat a string once for every character in the string
 * @param {string} toRepeat
 * @returns {string}
 */
const repeatLengthTimes = (toRepeat) => {
    if (typeof toRepeat !== 'string') { throw new TypeError('toRepeat'); }

    let result = '';
    for (let i = 1; i <= toRepeat.length; i++) {
        result += `${toRepeat}`;
    }

    if (typeof result !== 'string') { throw new TypeError('result'); }
    return result;
};


const _1_expect = '3232';
const _1_actual = repeatLengthTimes('32');
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '';
const _2_actual = repeatLengthTimes('');
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = '321321321';
const _3_actual = repeatLengthTimes('321');
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = '-<>--<>--<>--<>-';
const _4_actual = repeatLengthTimes('-<>-');
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '.';
const _5_actual = repeatLengthTimes('.');
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '5432154321543215432154321';
const _6_actual = repeatLengthTimes('54321');
console.assert(_6_actual === _6_expect, 'Test  6');
```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

>  
>
> [review source](..\..\..\exercises\16-for\exercises/3-pass-tests.js)

```js
"use strict";

/**
 * repeats a string, separated by spaces
 * each repetition is labeled with it's repetition number
 * @param {string} text - text to repeat
 * @param {number} repeats - number of times to repeat
 * @returns {string}
 */
const repeater = (text, repeats) => {
    if (typeof text !== "string") {
        throw new TypeError("text");
    }
    if (typeof repeats !== "number") {
        throw new TypeError("repeats");
    }
    let result = "";
    for (let i = 0; i < repeats; i++) {

        result += `${i}${text} `
    }

    if (typeof result !== "string") {
        throw new TypeError("result");
    }
    return result;
};

const _1_expect = "018 118 218 ";
const _1_actual = repeater("18", 3);
console.assert(_1_actual === _1_expect, "Test  1");

const _2_expect = "0 1 2 ";
const _2_actual = repeater("", 3);
console.assert(_2_actual === _2_expect, "Test  2");

const _3_expect = "";
const _3_actual = repeater("", 0);
console.assert(_3_actual === _3_expect, "Test  3");

const _4_expect = "";
const _4_actual = repeater("asdf", 0);
console.assert(_4_actual === _4_expect, "Test  4");

const _5_expect = "0_ 1_ ";
const _5_actual = repeater("_", 2);
console.assert(_5_actual === _5_expect, "Test  5");

const _6_expect = "0-<=>- 1-<=>- 2-<=>- 3-<=>- ";
const _6_actual = repeater("-<=>-", 4);
console.assert(_6_actual === _6_expect, "Test  6");
```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

>  
>
> [review source](..\..\..\exercises\16-for\exercises/4-pass-tests.js)

```js
'use strict';

/**
 * alternately appends str1 and str2 a given number of times
 * @param {number} range - the number of times to repeat
 * @param {string} str1 - the first string to alternate
 * @param {string} str2 - the second string to alternate
 * @returns {string}
 */
const alternator = (range, str1, str2) => {
    if (typeof range !== 'number') { throw new TypeError('range'); }
    if (typeof str1 !== 'string') { throw new TypeError('str1'); }
    if (typeof str2 !== 'string') { throw new TypeError('str2'); }


    let result = '';

    for (let i = 0; i < range; i++) {
        result += i % 2 === 0 ? `${str1}` : `${str2}`;
    };

    if (typeof result !== 'string') { throw new TypeError('result'); }
    return result;
};


const _1_expect = '_-_';
const _1_actual = alternator(3, '_', '-');
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '';
const _2_actual = alternator(0, 'x', 'y');
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = 'y';
const _3_actual = alternator(3, '', 'y');
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = 'xx';
const _4_actual = alternator(3, 'x', '');
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '0:0:';
const _5_actual = alternator(4, '0', ':');
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '#######';
const _6_actual = alternator(7, '#', '#');
console.assert(_6_actual === _6_expect, 'Test  6');
```

[TOP](#debuggercises)

