# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[04-value-swaps](../README.md)/example-swap-in-steps 

- [/0-setup.js](#0-setupjs)  
- [/1-store-y.js](#1-store-yjs)  
- [/2-reassign-a.js](#2-reassign-ajs)  
- [/3-use-stored-y.js](#3-use-stored-yjs)  
---

## /0-setup.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\example-swap-in-steps/0-setup.js)

```js
'use strict';

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /1-store-y.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\example-swap-in-steps/1-store-y.js)

```js
'use strict';

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /2-reassign-a.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\example-swap-in-steps/2-reassign-a.js)

```js
'use strict';

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /3-use-stored-y.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\example-swap-in-steps/3-use-stored-y.js)

```js
'use strict';

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;
b = temp;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

