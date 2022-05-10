const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle('JESUS REBATEDOR FODASE')
      .setColor('RANDOM')
      .attachFiles(['./imagens/jesus-rebatedor-fodase.png'])
      .setDescription(`Pai tá de atacante`)
      .setImage('attachment://jesus-rebatedor-fodase.png');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'jesus',
};
