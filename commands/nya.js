const Discord = require('discord.js');
const actions = require('../json/actions.json');
//const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
  try {
    //var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=nyan`);
    //var body = text.body;
    let nya = actions.nyaP[Math.floor(Math.random() * actions.nyaP.length)];

    var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(nya);
    return message.channel.send(`Nya!`, embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'nya',
  description: 'Gif de menininha gato anime Nya! Rigoni fagala',
};
