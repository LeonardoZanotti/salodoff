const Discord = require('discord.js');
const assP = require("../json/ass.json");

exports.run = async (bot, message, args) => {
    //for(i = 0; i < (assP.length + 1); i++) {
        const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            //.setImage(assP[args[0]])
            .setImage(assP[Math.floor(Math.random() * assP.length)]);
        return message.channel.send(embed);
    //}
}

exports.help = {
    name: "ass",
    description: "Cú"
}