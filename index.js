const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const command = args._[0];

  switch (command) {
    case 'today':
      return require('./commands/today')(args);
    default:
      return console.log(`"${command}" is not a valid command.`);
  }
};
