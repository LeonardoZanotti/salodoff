const Discord = require('discord.js');
const boobsP = require('../json/boobs.json');

exports.run = async (bot, message, args) => {
  try {
    //for(i = 0; i < (boobsP.length + 1); i++) {
    if (!message.channel.nsfw) {
      return message.channel.send('Esse canal não é NSFW!');
    }

    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      //.setImage(boobsP[i]);
      .setImage(boobsP[Math.floor(Math.random() * boobsP.length)]);
    return message.channel.send(embed); //.then(m => m.delete(2000));
    //}
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'boobs',
  description: 'Peitchola',
};
