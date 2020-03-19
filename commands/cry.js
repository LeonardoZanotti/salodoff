const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = (bot, message, args) => {
    const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(actions.cryP[Math.floor(Math.random() * (actions.cryP.length))]);
        return message.channel.send(`${message.author} está chorando tristinho foda!`, embed);
}

exports.help = {
    name: "cry",
    description: "Declara que você está chorando e envia um gif"
}