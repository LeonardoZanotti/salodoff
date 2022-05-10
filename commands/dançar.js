const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
  try {
    //for(i = 0; i < actions.danceP.length + 1; i++) {
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setImage(actions.danceP[Math.floor(Math.random() * actions.danceP.length)]);
    //.setImage(actions.danceP[i])
    return message.channel.send(embed);
    //}
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'dançar',
  description: 'Dancinha bonitinha foda',
};
