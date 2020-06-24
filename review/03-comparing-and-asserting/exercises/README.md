# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[03-comparing-and-asserting](../README.md)/exercises 

- [/1.js](#1js)  
- [/2.js](#2js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\03-comparing-and-asserting\exercises/1.js)

```js
'use strict';

// replace the _'s to pass the isTrues

const isTrue1 = true === true;
console.log(typeof isTrue1, isTrue1);
console.assert(isTrue1, 'Assertion 1');

const isTrue2 = 0.0 === 0.0;
console.log(typeof isTrue2, isTrue2);
console.assert(isTrue2, 'Assertion 2');

const isTrue3 = false === false;
console.log(typeof isTrue3, isTrue3);
console.assert(isTrue3, 'Assertion 3');

const isTrue4 = 'null' === 'null';
console.log(typeof isTrue4, isTrue4);
console.assert(isTrue4, 'Assertion 4');
```

[TOP](#debuggercises)

---

## /2.js 

>  
>
> [review source](..\..\..\exercises\03-comparing-and-asserting\exercises/2.js)

```js
'use strict';

// replace the _ to pass the asserts

const comparison1 = 4 === '4';
const isTrue1 = comparison1 === false;
console.assert(isTrue1, 'Assertion 1');

const comparison2 = Infinity === 'Infinity';
const isTrue2 = comparison2 === false;
console.assert(isTrue2, 'Assertion 2');

const comparison3 = "x" === `x`;
const isTrue3 = comparison3 === true;
console.assert(isTrue3, 'Assertion 3');

const comparison4 = 'null' === 'null';
const isTrue4 = comparison4 === true;
console.assert(isTrue4, 'Assertion 4');

const comparison5 = 'null' === null;
const isTrue5 = comparison5 === false;
console.assert(isTrue5, 'Assertion 5');

const comparison6 = 0.0 === 0;
const isTrue6 = comparison6 === true;
console.assert(isTrue6, 'Assertion 6');

const comparison7 = null === undefined;
const isTrue7 = comparison7 === false;
console.assert(isTrue7, 'Assertion 7');
```

[TOP](#debuggercises)

