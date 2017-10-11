const convertString = require('./convert-string');

module.exports = (stack) =>
  (x) => {
    const converted = convertString(x);
    if (typeof converted !== 'undefined') stack.push(converted);
    return converted;
  };
