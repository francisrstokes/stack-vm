const getPsh = require('./psh');
const getMath = require('./math');
const getStackOps = require('./stack-ops');

module.exports = (stack) => {
  const psh = getPsh(stack);
  const pop = () => stack.pop();

  return Object.assign({
      psh,
      pop
    },
    getMath(stack, psh, pop),
    getStackOps(stack, psh, pop)
  );
};
