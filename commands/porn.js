const Discord = require('discord.js');
const links = require('../json/porns.json');

exports.run = async (bot, message, args) => {
  try {
    if (!message.channel.nsfw) {
      return message.channel.send('Esse canal não é NSFW!');
    }

    let url = links[Math.floor(Math.random() * links.length)];
    await message.channel.send(url);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'porn',
  description: 'Você sabe o que isso faz',
};
