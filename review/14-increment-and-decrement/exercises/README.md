# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[14-increment-and-decrement](../README.md)/exercises 

- [/1.js](#1js)  
- [/2.js](#2js)  
- [/3.js](#3js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\14-increment-and-decrement\exercises/1.js)

```js
'use strict';

let x = 0;

let y = ++x;
console.assert(x === 1, 'Test 1 x');
console.assert(y === 1, 'Test 1 y');

x = y--;
console.assert(x === 1, 'Test 2 x');
console.assert(y === 0, 'Test 2 y');

let z = x++;
console.assert(x === 2, 'Test 3 x');
console.assert(y === 0, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

y = --x;
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');
```

[TOP](#debuggercises)

---

## /2.js 

>  
>
> [review source](..\..\..\exercises\14-increment-and-decrement\exercises/2.js)

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = ++y;
console.assert(x === 1, 'Test 2 x');
console.assert(y === 1, 'Test 2 y');

let z = y++;
console.assert(x === 1, 'Test 3 x');
console.assert(y === 2, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

x = --z;
console.assert(x === 0, 'Test 4 x');
console.assert(y === 2, 'Test 4 y');
console.assert(z === 0, 'Test 4 z');
```

[TOP](#debuggercises)

---

## /3.js 

>  
>
> [review source](..\..\..\exercises\14-increment-and-decrement\exercises/3.js)

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = y--;
console.assert(x === 0, 'Test 2 x');
console.assert(y === -1, 'Test 2 y');

let z = x++;
console.assert(x === 1, 'Test 3 x');
console.assert(y === -1, 'Test 3 y');
console.assert(z === 0, 'Test 3 z');

y = --z;
console.assert(x === 1, 'Test 4 x');
console.assert(y === -1, 'Test 4 y');
console.assert(z === -1, 'Test 4 z');
```

[TOP](#debuggercises)

