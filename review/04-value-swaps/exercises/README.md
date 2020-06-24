# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[04-value-swaps](../README.md)/exercises 

- [/1-double-swap.js](#1-double-swapjs)  
- [/2-triple-swap.js](#2-triple-swapjs)  
- [/3-triple-swap.js](#3-triple-swapjs)  
- [/4-quadruple-swap.js](#4-quadruple-swapjs)  
- [/5-quadruple-swap.js](#5-quadruple-swapjs)  
- [/6-let-and-const.js](#6-let-and-constjs)  
- [/7-let-and-const.js](#7-let-and-constjs)  
---

## /1-double-swap.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/1-double-swap.js)

```js
'use strict';

let a = 2;
let b = 1;
let temp = null;

// write some code!
temp = a;
a = b;
b = temp;


// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === 2;
console.assert(isTrue3, 'Test 3');
```

[TOP](#debuggercises)

---

## /2-triple-swap.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/2-triple-swap.js)

```js
'use strict';

let a = 3;
let b = 1;
let c = 2;
let temp = null;

// write some code!
temp = a;
a = b;
b = c;
c = temp;


// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 3;
console.assert(isTrue4, 'Test 4');
```

[TOP](#debuggercises)

---

## /3-triple-swap.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/3-triple-swap.js)

```js
'use strict';

let a = 2;
let b = 3;
let c = 1;
let temp = null;

// write some code!
temp = a;
a = c;
c = b;
b = temp;



// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 2;
console.assert(isTrue4, 'Test 4');
```

[TOP](#debuggercises)

---

## /4-quadruple-swap.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/4-quadruple-swap.js)

```js
'use strict';

let a = 3;
let b = 4;
let c = 1;
let d = 2;
let temp = null;

// write some code!
temp = a;
a = c;
c = temp;
temp = b;
b = d;
d = temp;


// fill in the _ to pass the final assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 4;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 4;
console.assert(isTrue5, 'Test 5');
```

[TOP](#debuggercises)

---

## /5-quadruple-swap.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/5-quadruple-swap.js)

```js
'use strict';

let a = 3;
let b = 1;
let c = 4;
let d = 2;
let temp = null;

// write some code
temp = a;
a = b;
b = d;
d = c;
c = temp;



// fill in the final _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 4;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 3;
console.assert(isTrue5, 'Test 5');
```

[TOP](#debuggercises)

---

## /6-let-and-const.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/6-let-and-const.js)

```js
'use strict';

// write code to pass asserts a and b
// fill in the blanks for c and temp

// leave this code as it is
let a = 2;
let b = 1;
let temp = null;

temp = a;
const c = temp;

// write your code below here, and above the assertions
a = b;
b = temp;



// replace the _ with a value to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, "Test 1");

const isTrue2 = b === 2;
console.assert(isTrue2, "Test 2");

const isTrue3 = c === 2;
console.assert(isTrue3, "Test 3");

const isTrue4 = temp === 2;
console.assert(isTrue4, "Test 4");
```

[TOP](#debuggercises)

---

## /7-let-and-const.js 

>  
>
> [review source](..\..\..\exercises\04-value-swaps\exercises/7-let-and-const.js)

```js
'use strict';

// write code to pass asserts a, b, c
// fill in the blanks for d and temp

// leave this code as it is
let a = 2;
let b = 3;
let c = 1;
let temp = null;

temp = a;
a = b;
const d = a;
// write your code below here
a = c;
c = b;
b = temp;



// fill in in the _'s to pass the final assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 3;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 2;
console.assert(isTrue5, 'Test 5');
```

[TOP](#debuggercises)

