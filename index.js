const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let command = args._[0] || 'help';

  if (args.help || args.h) {
    command = 'help';
  }
  if (args.version || args.v) {
    command = 'version';
  }

  switch (command) {
    case 'today':
      return require('./commands/today')(args);
    case 'help':
      return require('./commands/help')(args);
    case 'version':
      return require('./commands/version')(args);
    case 'forecast':
      return require('./commands/forecast')(args);
    default:
      return console.log(`"${command}" is not a valid command.`);
  }
};
