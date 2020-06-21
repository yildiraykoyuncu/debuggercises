'use strict';

let global = '<3';

function jazz(parameter) {
    global = `${global} jazzy`;
    return `${global} ${parameter}`;
}

const jazzReturn1 = jazz('hello');
const jazz1 = jazzReturn1 === '<3 jazzy hello';
console.assert(jazz1, 'Test 1: jazz');

global = `${global}!`;

const jazzReturn2 = jazz('boat');
const jazz2 = jazzReturn2 === '<3 jazzy! jazzy boat';
console.assert(jazz2, 'Test 2: jazz');

global = ':(';

const jazzReturn3 = jazz('tree');
const jazz3 = jazzReturn3 === ':( jazzy tree';
console.assert(jazz3, 'Test 3: jazz');