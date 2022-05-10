const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
  try {
    //for(i = 0; i < actions.winkP.length; i++) {
    const embed = new Discord.RichEmbed()
      .setColor('#FBCFCF')
      //.setImage(actions.winkP[args[0]]);
      .setImage(actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))]);
    return message.channel.send(embed);
    //}
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'disgust',
  description: 'Isso é repugnante!',
};
