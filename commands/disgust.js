const Discord = require('discord.js');
const actions = require("../json/actions.json");

exports.run = (bot, message, args) => {
    const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))]);
        return message.channel.send({ embed });
}

exports.help = {
    name: "disgust",
    description: "Isso é repugnante!"
}