const Discord = require('discord.js');
const config = require("../json/config.json");
const actions = require("../json/actions.json");

exports.run = (bot, message, args) => {
        var recipient = args[0];
        var hand = actions.handP[Math.round(Math.random() * (actions.handP.length - 1))];

        if (!recipient) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hand)
            return message.channel.send(`Você não pode ficar de mãos dadas com você mesmo, mas eu fico de mãos dadas com você ^^, ${message.author}!`, embed)

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hand)
            return message.channel.send(`Você não pode ficar de mãos dadas com você mesmo, mas eu fico de mãos dadas com você ^^, ${message.author}!`, embed)

        } else if (message.mentions.users.first() == bot.user) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hand);
            return message.channel.send(`K-Kya~~ Eu acho .. que seguro sua mão, senpai! (〃・ω・〃)ノ`, embed);

        } else {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hand)
            return message.channel.send(`${message.author} está de mãos dadas com ${recipient}!`, embed)
        }
}

exports.help = {
    name: "hand",
    description: `"${config.prefix}hand @membro" faz você ficar de mãos dadas com um membro`
}