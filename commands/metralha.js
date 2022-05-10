const Discord = require('discord.js');

var metralha = 2537;

exports.run = (bot, message, args) => {
  try {
    metralha++;
    // metralha += 1;
    message.channel.send(`O metralha já falou bosta ${metralha} vezes!`);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'metralha',
  description: 'Contador de quantas vezes o metralha já falou bosta',
};
