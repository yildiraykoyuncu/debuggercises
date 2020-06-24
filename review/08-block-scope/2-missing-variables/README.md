# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[08-block-scope](../README.md)/2-missing-variables 

- [/1.js](#1js)  
- [/2.js](#2js)  
- [/3.js](#3js)  
---

## /1.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\2-missing-variables/1.js)

```js
'use strict';

const a = 3;
let b = 3; {
    const a = 5;
    b = a;
}
console.assert(b === 5, 'Test 1');
```

[TOP](#debuggercises)

---

## /2.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\2-missing-variables/2.js)

```js
'use strict';

let x = 'hi!';
let y = 'hi!'; {
    x = 'hi!';
    let y = 'bye!';
}
x = 'bye!';
console.assert(y === 'hi!', 'Test 1');
console.assert(x === 'bye!', 'Test 2');
```

[TOP](#debuggercises)

---

## /3.js 

>  
>
> [review source](..\..\..\exercises\08-block-scope\2-missing-variables/3.js)

```js
'use strict';

let m = 0; {
    let l = 10;
    const m = 1;
    l = 0;
}
console.assert(m === 0, 'Test 1');
```

[TOP](#debuggercises)

