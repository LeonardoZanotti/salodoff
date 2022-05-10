const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
  try {
    //for(i = 0; i < actions.smokeP.length + 1; i++) {
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setImage(actions.smokeP[Math.floor(Math.random() * actions.smokeP.length)]);
    //.setImage(actions.smokeP[args[0]])
    return message.channel.send(embed);
    //}
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'fumar',
  description: 'boca de fumaça',
};
