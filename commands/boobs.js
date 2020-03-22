const Discord = require('discord.js');
const boobsP = require("../json/boobs.json");

exports.run = async (bot, message, args) => {
    //for(i = 0; i < (boobsP.length + 1); i++) {  
        const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            //.setImage(boobsP[i]);
            .setImage(boobsP[Math.floor(Math.random() * boobsP.length)]);
        return message.channel.send(embed)//.then(m => m.delete(2000));
    //}
}

exports.help = {
    name: "boobs",
    description: "Peitchola"
}