module.exports = {
  assertType: (x, type) => {
    if (typeof x !== type) {
      console.error(`Assertion error: x (${typeof x}) should be of type ${type}`);
      return false;
    }
    return true;
  }
};
