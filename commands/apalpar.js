const Discord = require('discord.js');
const config = require("../json/config.json");
const actions = require("../json/actions.json");

exports.run = (bot, message, args) => {
        var disgust = actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))];
        var grope = actions.gropeP[Math.round(Math.random() * (actions.gropeP.length - 1))];
        let recipient = args[0];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(disgust);
            return message.channel.send(`${message.author} está ... se apalpando ..?`, embed);

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(disgust);
            return message.channel.send(`${message.author} está ... se apalpando ..?`, embed);

        } else if (message.mentions.users.first() == bot.user) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(grope);
            return message.channel.send(`Eu corto teu pinto se tentar isso denovo!`, embed);

        } else {
            var embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(grope);
            return message.channel.send(`${message.author} tá dando uma apalpadinha em ${recipient}`, embed);
        }
}

exports.help = {
    name: "apalpar",
    description: `\`${config.prefix}apalpar @membro\` dá uma apalpadinha num membro`
}