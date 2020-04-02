const Discord = require('discord.js');
const config = require("../json/config.json");
const actions = require("../json/actions.json");

exports.run = (bot, message, args) => {
        var recipient = args[0];
        var hug = actions.hugP[Math.round(Math.random() * (actions.hugP.length - 1))]

        if (!recipient) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hug);
            return message.channel.send(`Você não pode se abraçar, mas eu te abraço!, ${message.author}!`, embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hug);
            return message.channel.send(`Você não pode se abraçar, mas eu te abraço!, ${message.author}!`, embed);

        } else if (message.mentions.users.first() == bot.user) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hug);
            return message.channel.send(`ల(\*´= ◡ =｀\*) ~~ Nyaa~~`, embed);

        } else {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(hug);
            return message.channel.send(`${message.author} abraçou ${recipient}!`, embed);
        }
}

exports.help = {
    name: "abraçar",
    description: `\`${config.prefix}abraçar @membro\` faz você abraçar um membro`
}