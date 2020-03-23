const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var smugID = Math.floor(Math.random() * 58) + 1

    var embed = new Discord.RichEmbed()
        .setColor('#727293')
        .setImage(`http://smug.moe/smg/${smugID}.png`);
    return message.channel.send(embed);
}

exports.help = {
    name: "smug",
    description: "Google Translate: presunçoso (??)"
}