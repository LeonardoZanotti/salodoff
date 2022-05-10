const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle('rapasiada durmi q amanhã é dia de inte')
      .setColor('RANDOM')
      .attachFiles(['./imagens/rapasiada.jpg'])
      .setDescription(`:dog2: :yawning_face: :sleeping: `)
      .setImage('attachment://rapasiada.jpg');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'rapasiada',
};
