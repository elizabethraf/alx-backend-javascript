const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);

  // End the program when the user enters a line
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
