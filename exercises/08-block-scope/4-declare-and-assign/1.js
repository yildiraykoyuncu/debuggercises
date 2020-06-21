'use strict';

const a = false;
console.assert(a === false, 'Test 1'); {
    const a = null;
    console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');