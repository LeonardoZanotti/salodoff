const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle(`ALERTA DE PITBULL LINGUICINHA!!`)
      .setColor('RANDOM')
      .attachFiles(['./imagens/pl.png'])
      .setDescription(` :bangbang: :dog: :hotdog: :bangbang: `)
      .setImage('attachment://pl.png');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'pl',
  description: 'PITBULL LINGUICINHA!!!',
};
