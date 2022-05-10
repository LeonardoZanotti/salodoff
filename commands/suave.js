const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle('Suave na nave :ok_hand:')
      .setColor('RANDOM')
      .attachFiles(['./imagens/suave.jpg'])
      .setDescription(`:sunglasses: :rabbit2: :womans_hat: :sunny:`)
      .setImage('attachment://suave.jpg');
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'suave',
};
