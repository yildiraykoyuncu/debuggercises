# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[20-operator-precedence](../README.md)/2-variables 

- [/1-coercing-and-comparing.js](#1-coercing-and-comparingjs) - _incomplete_ 
- [/2-arithmetic.js](#2-arithmeticjs)  
- [/3-logical-operators.js](#3-logical-operatorsjs)  
- [/4-all-together.js](#4-all-togetherjs)  
- [/5-all-together.js](#5-all-togetherjs)  
---

## /1-coercing-and-comparing.js 

> incomplete 
>
> [review source](..\..\..\exercises\20-operator-precedence\2-variables/1-coercing-and-comparing.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  \exercises\20-operator-precedence\2-variables\1-coercing-and-comparing.js:17:15)
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

// write lots of comments!  explain your thinking at each step

const a = 'asdf';
const b = '14';

const expected = false;

// the original expression
const step0 = Boolean(a) !== Boolean(b);
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = _;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = _;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = _;
console.assert(step3 === expected, 'Step 3');

```

[TOP](#debuggercises)

---

## /2-arithmetic.js 

>  
>
> [review source](..\..\..\exercises\20-operator-precedence\2-variables/2-arithmetic.js)

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = true;
const b = 12;
const c = '12';

const expected = -1;

// the original expression
const step0 = -a / b * +c;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?

```

[TOP](#debuggercises)

---

## /3-logical-operators.js 

>  
>
> [review source](..\..\..\exercises\20-operator-precedence\2-variables/3-logical-operators.js)

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = null;
const b = 'null';

const expected = true;

// the original expression
const step0 = !!a || !!b;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?


```

[TOP](#debuggercises)

---

## /4-all-together.js 

>  
>
> [review source](..\..\..\exercises\20-operator-precedence\2-variables/4-all-together.js)

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = '';

const expected = false;

// the original expression
const step0 = typeof a == 'number' + +a;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?


```

[TOP](#debuggercises)

---

## /5-all-together.js 

>  
>
> [review source](..\..\..\exercises\20-operator-precedence\2-variables/5-all-together.js)

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = false;

const expected = true;

// the original expression
const step0 = !!+a == Boolean(Number(a));
console.assert(step0 === expected, 'Step 0');

// how many steps are there?


```

[TOP](#debuggercises)

