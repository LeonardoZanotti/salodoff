const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    message.channel.send(`${bot.user.username}: Bot criado por ░█ ɀДฒØ†‡Ø ▒ Ӈ∆₡₶€Ɽ ”¶ ▓│`);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'salodoff',
};
