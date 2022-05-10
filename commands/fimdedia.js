const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle('OBRIGADO DEUS!')
      .setColor('RANDOM')
      .attachFiles(['./imagens/gabriel.jpg'])
      .setDescription(`:pray: :pray: :pray:`)
      .setImage('attachment://gabriel.jpg');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'fimdedia',
};
