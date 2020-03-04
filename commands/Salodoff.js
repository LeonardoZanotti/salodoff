const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`${bot.user.username}: Bot criado por Leonardo Zanotti`);
}

exports.help = {
    name: "Salodoff"
}