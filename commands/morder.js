const Discord = require('discord.js');
const actions = require('../json/actions.json');
const superagent = require('node-fetch');

exports.run = async (bot, message, args) => {
  try {
    var disgust = actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))];
    let recipient = args[0];

    if (!recipient) {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(disgust);
      return message.channel.send(`${message.author} você... está se moidendo..?`, embed);
    } else if (message.mentions.users.first() == message.author) {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(disgust);
      return message.channel.send(`${message.author} você... está se moidendo..?`, embed);
    } else if (message.mentions.users.first() == bot.user) {
      var text = await superagent(`https://rra.ram.moe/i/r?type=nom`);
      var body = await text.json();

      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(`https://rra.ram.moe${body.path}`);
      return message.channel.send(`Nyaa~ s-senpai... (´Å\`∗)... `, embed);
    } else {
      var text = await superagent(`https://rra.ram.moe/i/r?type=nom`);
      var body = await text.json();

      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(`https://rra.ram.moe${body.path}`);
      return message.channel.send(`${message.author} está moidendo ${recipient}!`, embed);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'morder',
  description: 'Moidi nom nom nom',
};
