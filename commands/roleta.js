const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
  try {
    if (isNaN(args[0]) || args[0] <= 0) {
      message.reply(
        `Isso ai não é um número de balas seu animal, use \`${bot.config.prefix}roleta (número de balas)\``
      );
    } else {
      n1 = Math.floor(Math.random() * args[0]);
      n2 = Math.floor(Math.random() * args[0]);
      if (n1 == n2) {
        message.reply('Você perdeu!');
      } else {
        message.reply('Você ganhou!');
      }
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'roleta',
  description: `\`${config.prefix}roleta [número x]\` tem a ideia de uma roleta russa e funciona como um revólver com x slots de bala (não apenas 6) mas possuindo apenas uma. Por exemplo \`${config.prefix}roleta 10\` faz você ter 1/10 de chance de perder, sendo que esta probabilidade não varia nos próximos \`${config.prefix}roleta 10\``,
};
