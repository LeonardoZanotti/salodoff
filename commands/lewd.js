const Discord = require('discord.js');
const actions = require("../json/actions.json");

exports.run = (bot, message, args) => {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(actions.lewdP[Math.round(Math.random() * (actions.lewdP.length - 1))]);
        return message.channel.send('Taporrakkkkkkkkkk sexokkkkkkkkkkkkkk', embed);
}

exports.help = {
    name: "lewd",
    description: "Eita bixo sexokkkkkkkkkkkkkkkkkkkkkkkkkk"
}