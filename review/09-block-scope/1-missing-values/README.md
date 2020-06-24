# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[09-block-scope](../README.md)/1-missing-values 

- [/1.js](#1js)  
- [/2.js](#2js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\09-block-scope\1-missing-values/1.js)

```js
'use strict';

const a = 3;
console.assert(a === 3, 'Test 1'); {
    const a = 5;
    console.assert(a === 5, 'Test 2');
}
console.assert(a === 3, 'Test 3');
```

[TOP](#debuggercises)

---

## /2.js 

>  
>
> [review source](..\..\..\exercises\09-block-scope\1-missing-values/2.js)

```js
'use strict';

let x = 3;
console.assert(x === 3, 'Test 1: x'); {
    x = 10;
    const y = 5;

    console.assert(x === 10, 'Test 2: x');
    console.assert(y === 5, 'Test 3: y');
}
console.assert(x === 10, 'Test 4: x');
```

[TOP](#debuggercises)

