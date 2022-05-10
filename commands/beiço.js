const Discord = require('discord.js');
const actions = require('../json/actions.json');
const superagent = require('node-fetch');

exports.run = async (bot, message, args) => {
  try {
    var recipient = args[0];

    var text = await superagent(`https://rra.ram.moe/i/r?type=pout`);
    var body = await text.json();

    if (!recipient) {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(`https://rra.ram.moe${body.path}`);
      return message.channel.send(`${message.author} tá de beiçola!`, embed);
    } else {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(`https://rra.ram.moe${body.path}`);
      return message.channel.send(`${message.author} tá chatiadinho tristinhozinho com ${recipient}!`, embed);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'beiço',
  description: 'beiçola',
};
