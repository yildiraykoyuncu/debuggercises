# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[08-block-scope](../README.md)/4-declare-and-assign 

- [/1.js](#1js)  
- [/2.js](#2js)  
- [/3.js](#3js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\4-declare-and-assign/1.js)

```js
'use strict';

const a = false;
console.assert(a === false, 'Test 1'); {
    const a = null;
    console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');
```

[TOP](#debuggercises)

---

## /2.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\4-declare-and-assign/2.js)

```js
"use strict";

let x = "hi!";
console.assert(x === "hi!", "Test 1: x"); {
    x = "bye!";
    const y = "hi!";

    console.assert(x === "bye!", "Test 2: x");
    console.assert(y === "hi!", "Test 3: y");
}
console.assert(x === "bye!", "Test 4: x");
```

[TOP](#debuggercises)

---

## /3.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\4-declare-and-assign/3.js)

```js
"use strict";

let m = 1;
console.assert(m === 1, "Test 1: m"); {
    m = 2;
    const l = 3;
    console.assert(m === 2, "Test 2: m");
    console.assert(l === 3, "Test 3: l");
}
m = 4;
console.assert(m === 4, "Test 4: m");
```

[TOP](#debuggercises)

