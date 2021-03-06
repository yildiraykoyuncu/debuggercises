# Debuggercises 

> 24/06/2020, 07:15:55 

## [exercises](../../README.md)/[10-conditional-statements](../README.md)/0-examples 

- [/1-if.js](#1-ifjs)  
- [/2-if-else.js](#2-if-elsejs)  
- [/3-if-else-if-else.js](#3-if-else-if-elsejs)  
- [/4-sequential-conditionals.js](#4-sequential-conditionalsjs)  
- [/5-nested-conditionals.js](#5-nested-conditionalsjs)  
- [/6-unreachable-paths.js](#6-unreachable-pathsjs)  
---

## /1-if.js 

>  
>
> [review source](..\..\..\exercises\10-conditional-statements\0-examples/1-if.js)

```js
'use strict';

/* a single conditional statement executes it's body if the condition is truthy

  if (condition) {
    statements1
  }

*/

const truthinessDecides = (value) => {
  let result = '';
  if (value) {
    result = 'path: truthy';
  }
  return result;
};

const _1_expect = 'path: truthy';
const _1_actual = truthinessDecides(1);
console.assert(_1_actual === _1_expect, 'Test 1: path');

const _2_expect = 'path: truthy';
const _2_actual = truthinessDecides('hi!');
console.assert(_2_actual === _2_expect, 'Test 2: path');

const _3_expect = 'path: truthy';
const _3_actual = truthinessDecides(true);
console.assert(_3_actual === _3_expect, 'Test 3: path');

const _4_expect = '';
const _4_actual = truthinessDecides(0);
console.assert(_4_actual === _4_expect, 'Test 4: path 2');

const _5_expect = '';
const _5_actual = truthinessDecides('');
console.assert(_5_actual === _5_expect, 'Test 5: path 2');

const _6_expect = '';
const _6_actual = truthinessDecides(false);
console.assert(_6_actual === _6_expect, 'Test 6: path 2');


```

[TOP](#debuggercises)

---

## /2-if-else.js 

>  
>
> [review source](..\..\..\exercises\10-conditional-statements\0-examples/2-if-else.js)

```js
'use strict';

/* conditionals decide which path to execute based on truthiness

  if (condition) {
    statements1
  } else {
    statements2
  }

*/

const truthinessDecides = (value) => {
  let result = '';
  if (value) {
    result = 'path 1: truthy';
  } else {
    result = 'path 2: falsy';
  }
  return result;
};

const _1_expect = 'path 1: truthy';
const _1_actual = truthinessDecides(1);
console.assert(_1_actual === _1_expect, 'Test 1: path 1');

const _2_expect = 'path 1: truthy';
const _2_actual = truthinessDecides('hi!');
console.assert(_2_actual === _2_expect, 'Test 2: path 1');

const _3_expect = 'path 1: truthy';
const _3_actual = truthinessDecides(true);
console.assert(_3_actual === _3_expect, 'Test 3: path 1');

const _4_expect = 'path 2: falsy';
const _4_actual = truthinessDecides(0);
console.assert(_4_actual === _4_expect, 'Test 4: path 2');

const _5_expect = 'path 2: falsy';
const _5_actual = truthinessDecides('');
console.assert(_5_actual === _5_expect, 'Test 5: path 2');

const _6_expect = 'path 2: falsy';
const _6_actual = truthinessDecides(false);
console.assert(_6_actual === _6_expect, 'Test 6: path 2');

const _7_expect = 'path 2: falsy';
const _7_actual = truthinessDecides(null);
console.assert(_7_actual === _7_expect, 'Test 7: path 2');

const _8_expect = 'path 2: falsy';
const _8_actual = truthinessDecides(undefined);
console.assert(_8_actual === _8_expect, 'Test 8: path 2');

```

[TOP](#debuggercises)

---

## /3-if-else-if-else.js 

>  
>
> [review source](..\..\..\exercises\10-conditional-statements\0-examples/3-if-else-if-else.js)

```js
'use strict';

/* create more than 2 possible paths

  it's impossible to execute more than one of these paths

  if (condition1)
    statement1
  else if (condition2)
    statement2
  else if (condition3)
    statement3
  ...
  else
    statementN

*/
const sameness = (val1, val2) => {
  let result = '';
  if (val1 === val2) {
    result = 'strictly equal';
  } else if (typeof val1 === typeof val2) {
    result = 'same type';
  } else {
    result = 'totally different';
  }
  return result;
};

const _1_expect = 'strictly equal';
const _1_actual = sameness(1, 1);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'strictly equal';
const _2_actual = sameness('hello', 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'strictly equal';
const _3_actual = sameness(null, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'same type';
const _4_actual = sameness(12, 21);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'same type';
const _5_actual = sameness(true, false);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'same type';
const _6_actual = sameness('hello', 'goodbye');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'totally different';
const _7_actual = sameness(null, true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'totally different';
const _8_actual = sameness(':(', 0);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'totally different';
const _9_actual = sameness(false, -1);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /4-sequential-conditionals.js 

>  
>
> [review source](..\..\..\exercises\10-conditional-statements\0-examples/4-sequential-conditionals.js)

```js
'use strict';

/* writing one conditional after another will evaluate both conditionals
  there are four possible paths
  both conditionals will always execute

  if (condition)
    statement1A
  [else
    statement2A]

  if (condition)
    statement1B
  [else
    statement2B]

*/

const describeIt = (value) => {
  let result = '';

  if (value) {
    result += 'truthy';
  } else {
    result += 'falsy';
  }

  if (typeof value === 'number') {
    result += ' number';
  } else {
    result += ' not-number';
  }

  return result;
};

const _1_expect = 'truthy number';
const _1_actual = describeIt(1);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'truthy number';
const _2_actual = describeIt(-1);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'truthy not-number';
const _3_actual = describeIt(true);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'truthy not-number';
const _4_actual = describeIt('hello');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'falsy number';
const _5_actual = describeIt(0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'falsy number';
const _6_actual = describeIt(NaN);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'falsy not-number';
const _7_actual = describeIt(null);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'falsy not-number';
const _8_actual = describeIt(false);
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

---

## /5-nested-conditionals.js 

>  
>
> [review source](..\..\..\exercises\10-conditional-statements\0-examples/5-nested-conditionals.js)

```js
'use strict';

/* nesting conditionals is also possible
  there are four possible paths
  and 3 conditional statements, but only 2 will ever execute!

  if (condition1)
    statement1
  else
    if (condition2)
      statement2
    else
      if (condition3)
  ...

*/

const nestedConditionals = (a, b, c) => {
  let result = '';

  if (a) {
    if (b) {
      result = 'a: truthy, b: truthy';
    } else {
      result = 'a: truthy, b: falsy';
    }
  } else {
    if (c) {
      result = 'a: falsy, c: truthy';
    } else {
      result = 'a: falsy, c: falsy';
    }
  }

  return result;
};


const _1_expect = 'a: truthy, b: truthy';
const _1_actual = nestedConditionals(true, true, true);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'a: truthy, b: truthy';
const _2_actual = nestedConditionals(true, true, false);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'a: truthy, b: falsy';
const _3_actual = nestedConditionals(true, false, true);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'a: truthy, b: falsy';
const _4_actual = nestedConditionals(true, false, false);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'a: falsy, c: truthy';
const _5_actual = nestedConditionals(false, true, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'a: falsy, c: truthy';
const _6_actual = nestedConditionals(false, false, true);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'a: falsy, c: falsy';
const _7_actual = nestedConditionals(false, true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'a: falsy, c: falsy';
const _8_actual = nestedConditionals(false, false, false);
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

---

## /6-unreachable-paths.js 

>  
>
> [review source](..\..\..\exercises\10-conditional-statements\0-examples/6-unreachable-paths.js)

```js
'use strict';

// it's possible to write conditionals paths that can never happen!
//  keep an eye out for this, it can cause bugs and makes your code hard to understand

const impossibleElse = (value) => {
  let result = '';
  if (value || !value) {
    result = 'path 1: truthy or falsy';
  } else {
    result = 'path 2: unreachable!';
  }
  return result;
};

const _1_actual = impossibleElse(1);
const _1_expect = 'path 1: truthy or falsy';
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_actual = impossibleElse('hi!');
const _2_expect = 'path 1: truthy or falsy';
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_actual = impossibleElse(true);
const _3_expect = 'path 1: truthy or falsy';
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_actual = impossibleElse(0);
const _4_expect = 'path 1: truthy or falsy';
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_actual = impossibleElse('');
const _5_expect = 'path 1: truthy or falsy';
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_actual = impossibleElse(false);
const _6_expect = 'path 1: truthy or falsy';
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_actual = impossibleElse(null);
const _7_expect = 'path 1: truthy or falsy';
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_actual = impossibleElse(undefined);
const _8_expect = 'path 1: truthy or falsy';
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

