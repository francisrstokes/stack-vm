const { assertType } = require('../util');

const add = (a, b) => a + b;
const sub = (a, b, o = true) => o
  ? a - b
  : b - a;
const mul = (a, b) => a * b;
const div = (a, b, o = true) => o
  ? a / b
  : b / a;
const pow = (a, b, o = true) => o
  ? Math.pow(a, b)
  : Math.pow(b, a);

const stack2Op = (stack, psh, pop, op, o = true) =>
  () => {
    if (stack.length < 2) console.error('Not enough members on the stack');
    const [a, b] = [pop(), pop()];
    if (!(assertType(a, 'number') && assertType(b, 'number'))) {
      return undefined;
    }
    const result = op(a, b, o);
    psh(result);
    return result;
  };

module.exports = (stack, psh, pop) => ({
  add: stack2Op(stack, psh, pop, add),
  sub: stack2Op(stack, psh, pop, sub),
  subs: stack2Op(stack, psh, pop, sub, false),
  mul: stack2Op(stack, psh, pop, mul),
  div: stack2Op(stack, psh, pop, div),
  divs: stack2Op(stack, psh, pop, div, false),
  pow: stack2Op(stack, psh, pop, pow),
  pows: stack2Op(stack, psh, pop, pow, false)
});
