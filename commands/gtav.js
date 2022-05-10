const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle(`:eight: **dias** :bangbang:`)
      .setColor('RANDOM')
      .attachFiles(['./imagens/gtav.jpeg'])
      .setDescription(`:gun: :cowboy: :oncoming_police_car: :video_game:`)
      .setImage('attachment://gtav.jpeg');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'gtav',
};
