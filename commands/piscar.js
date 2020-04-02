const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
    var recipient = args[0];
    var wink = actions.winkP[Math.round(Math.random() * (actions.winkP.length - 1))]

    if (!recipient) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(wink);
        return message.channel.send(`Você não pode piscar para si mesmo, então deixe-me piscar para você, ${message.author}!`, embed);

    } else if (message.mentions.users.first() == message.author) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(wink);
        return message.channel.send(`Você não pode piscar para si mesmo, então deixe-me piscar para você, ${message.author}!`, embed);
            
    } else if (message.mentions.users.first() == bot.user) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(wink);
        return message.channel.send(`(´ω｀*) S-Sim?`, embed);

    } else {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(wink);
        return message.channel.send(`${message.author} piscou para ${recipient}!`, embed);
    }
}

exports.help = {
    name: "piscar",
    description: "piscadinha marota"
}