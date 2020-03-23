const Discord = require('discord.js');
const actions = require("../json/actions.json");

exports.run = async (bot, message, args) => {
    //for(i = 0; i < actions.winkP.length; i++) {    
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            //.setImage(actions.winkP[args[0]]);
            .setImage(actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))]);
        return message.channel.send(embed);
    //}
}

exports.help = {
    name: "disgust",
    description: "Isso é repugnante!"
}