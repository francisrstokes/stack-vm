const NUMBER = /^-?[0-9]+?\.?[0-9]*$/;
module.exports = (x) => {
  if (NUMBER.test(x)) return Number(x);
  if (x === 'true' || x === 'false') return Boolean(x);
  if (x.startsWith('"') && x.endsWith('"')) return x.substring(1, x.length - 1);
  console.error(`Couldn't detect a type for input: ${x}`);
};
