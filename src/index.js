const createCommands = require('./commands');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commands = createCommands([]);

rl.setPrompt('> ');
rl.on('line', (command) => {
  if (command && command !== '') {
    const splitCom = command.split(' ', 2);
    const op = splitCom[0].toLowerCase();
    const rest = splitCom[1];

    if (typeof commands[op] === 'undefined') {
      console.error(`Invalid operation ${op}`);
    } else {
      const output = commands[op](rest);
      if (typeof output !== 'undefined') process.stdout.write(`${output.toString()}\n`);
    }
  }
});
