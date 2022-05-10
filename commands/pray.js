const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle('PRAY')
      .setColor('RANDOM')
      .attachFiles(['./imagens/pray.jpg'])
      .setDescription(`:sob: :pray: :sob: :pray:`)
      .setImage('attachment://pray.jpg');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'pray',
};
