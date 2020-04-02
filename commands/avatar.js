const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    if (!user.avatar) return message.channel.send('Esse membro não tem avatar!');
    const avatar = user.displayAvatarURL;

    const embed = new Discord.RichEmbed()
        .setAuthor(`${user.tag}`, avatar)
        .setColor(user.displayHexColor ? user.displayHexColor : '#D0C7FF')
        .setDescription(`[Avatar URL](${avatar})`)
        .setImage(avatar)
    return message.channel.send(embed);    
}

exports.help = {
    name: "avatar",
    description: `\`${config.prefix}avatar @membro\` mostra o avatar de um membro`
}