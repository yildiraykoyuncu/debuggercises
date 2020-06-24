const mystery = (a, b) => {
    let result = '';
    if (typeof a === b) {
        result = 'path 1';
    } else if (a === typeof b) {
        result = 'path 2';
    } else {
        result = 'path 3';
    }
    return result;
};

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(1, 'number');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(true, 'boolean');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery('', 'string');
console.assert(_3_actual === _3_expect, 'Test 3');

// path 2
const _4_expect = 'path 2';
const _4_actual = mystery('number', 1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery('string', 'hi!');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery('boolean', true);
console.assert(_6_actual === _6_expect, 'Test 6');

// path 3
const _7_expect = 'path 3';
const _7_actual = mystery(1, 2);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(true, false);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery('hi!', 'bye!');
console.assert(_9_actual === _9_expect, 'Test 9');