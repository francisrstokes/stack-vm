module.exports = (stack) => ({
  len: () => {
    const l = stack.length + 1;
    stack.push(l);
    return l;
  }
});
