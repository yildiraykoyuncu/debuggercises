# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[09-block-scope](../README.md)/3-assign-values 

- [/1.js](#1js)  
- [/2.js](#2js)  
- [/3.js](#3js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\09-block-scope\3-assign-values/1.js)

```js
'use strict';

const a = '12';
console.assert(a === '12', 'Test 1'); {
    const a = true;
    console.assert(a === true, 'Test 2');
}
console.assert(a === '12', 'Test 3');
```

[TOP](#debuggercises)

---

## /2.js 

>  
>
> [review source](..\..\..\exercises\09-block-scope\3-assign-values/2.js)

```js
'use strict';

let x = null;
console.assert(x === null, 'Test 1: x'); {
    x = false;
    const y = null;

    console.assert(x === false, 'Test 2: x');
    console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');
```

[TOP](#debuggercises)

---

## /3.js 

>  
>
> [review source](..\..\..\exercises\09-block-scope\3-assign-values/3.js)

```js
'use strict';

let m = 'tall';
console.assert(m === 'tall', 'Test 1: m'); {
    let l = 'mini';
    const m = 'short';
    l = 'mini';
    console.assert(m === 'short', 'Test 2: m');
    console.assert(l === 'mini', 'Test 3: l');
}
m = 'medium';
console.assert(m === 'medium', 'Test 4: m');
```

[TOP](#debuggercises)

