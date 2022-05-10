const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  try {
    var ms = await message.channel.send(
      'Os códigos do bot estão no meu repositório do github. Acesse: https://github.com/LeonardoZanotti/salodoff.'
    );
    await ms.react('🍉');
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'src',
  description:
    'Mostra o repositório no github do bot, onde todos os códigos estão, aproveite para ver meu github também',
};
