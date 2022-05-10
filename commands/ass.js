const Discord = require('discord.js');
const assP = require('../json/ass.json');

exports.run = async (bot, message, args) => {
  try {
    //for(i = 0; i < (assP.length + 1); i++) {
    if (!message.channel.nsfw) {
      return message.channel.send('Esse canal não é NSFW!');
    }

    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      //.setImage(assP[args[0]])
      .setImage(assP[Math.floor(Math.random() * assP.length)]);
    return message.channel.send(embed);
    //}
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'ass',
  description: 'Cú',
};
