import { strict as assert } from 'assert';

let name: string = "Reilly";
console.log(`Hello ${name}`)

assert.equal(increment(2), 3)
assert(name.length == 6);

function increment(i: number) {
  return i + 1;
}