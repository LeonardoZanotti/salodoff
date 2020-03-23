const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
    //for(i = 0; i < actions.danceP.length + 1; i++) {
        const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setImage(actions.danceP[Math.floor(Math.random() * actions.danceP.length)]);
            //.setImage(actions.danceP[i])
        return message.channel.send(embed);
    //}
}

exports.help = {
    name: "dance",
    description: "Dancinha bonitinha foda"
}