const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let a = ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'];
    let b = a[Math.floor(Math.random() * a.length)];
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle('ANÁLISE!')
      .setColor('RANDOM')
      .attachFiles([`./imagens/analise/${b}.jpg`])
      .setDescription(`:face_with_monocle: `)
      .setImage(`attachment://${b}.jpg`);
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'análise',
  description: 'análise',
};
