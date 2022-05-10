const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
  try {
    const recipient = args[0];
    const wasted = actions.wastedP[Math.round(Math.random() * (actions.wastedP.length - 1))];

    if (!recipient) {
      const embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(wasted);
      return message.channel.send(`${message.author} tomo dormindo!`, embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(wasted);
      return message.channel.send(`${message.author} tomo deitado!`, embed);
    } else if (message.mentions.users.first() == bot.user) {
      const embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(wasted);
      return message.channel.send(`${message.author}... filho da puta de luva! (๑◕︵◕๑)`, embed);
    } else {
      const embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(wasted);
      return message.channel.send(`${recipient} foi de baise!`, embed);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'tomou',
  description: 'vadia se fudeu',
};
