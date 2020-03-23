const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
    //for(i = 0; i < actions.smokeP.length + 1; i++) {
        const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setImage(actions.smokeP[Math.floor(Math.random() * actions.smokeP.length)]);
            //.setImage(actions.smokeP[args[0]])
        return message.channel.send(embed);
    //}
}

exports.help = {
    name: "smoke",
    description: "boca de fumaça"
}