const Discord = require('discord.js');
const actions = require('../json/actions.json');
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
  try {
    var recipient = args[0];
    var pog = actions.pogP[Math.round(Math.random() * (actions.pogP.length - 1))];

    if (!recipient) {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(pog);
      return message.channel.send(`${message.author} CHUPOU O PRÓPRIO PAU!!!! :sunglasses: :sunglasses: `, embed);
    } else if (message.mentions.users.first() == message.author) {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(pog);
      return message.channel.send(`${message.author} CHUPOU O PRÓPRIO PAU!!!! :sunglasses: :sunglasses: `, embed);
    } else if (message.mentions.users.first() == bot.user) {
      var lic = await snekfetch.get(`https://rra.ram.moe/i/r?type=lick`);
      var body = lic.body;

      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(`https://rra.ram.moe${body.path}`);
      return message.channel.send(`Nyaa..♡(｡￫ˇ艸￩) ${message.author} mamou a minha caceta! >///<`, embed);
    } else {
      var lic = await snekfetch.get(`https://rra.ram.moe/i/r?type=lick`);
      var body = lic.body;

      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(`https://rra.ram.moe${body.path}`);
      return message.channel.send(`${message.author} mamou ${recipient}!`, embed);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'lamber',
  description: 'Lamber o pau de alguém, mt foda',
};
