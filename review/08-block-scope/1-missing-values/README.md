# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[08-block-scope](../README.md)/1-missing-values 

- [/1.js](#1js)  
- [/2.js](#2js)  
- [/3.js](#3js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\1-missing-values/1.js)

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
> [review source](..\..\..\exercises\08-block-scope\1-missing-values/2.js)

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

---

## /3.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\1-missing-values/3.js)

```js
'use strict';

let m = 3;
console.assert(m === 3, 'Test 1: m'); {
    let l = 10;
    const m = 5;
    l = 0;
    console.assert(m === 5, 'Test 2: m');
    console.assert(l === 0, 'Test 3: l');
}
m = 20;
console.assert(m === 20, 'Test 4: m');
```

[TOP](#debuggercises)

