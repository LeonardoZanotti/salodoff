const Discord = require('discord.js');
const config = require("../json/config.json");
const actions = require("../json/actions.json");


exports.run = (bot, message, args) => {
        const recipient = args[0];
        var kiss = actions.kissP[Math.round(Math.random() * (actions.kissP.length - 1))]

        if (!recipient) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(kiss);
            return message.channel.send(`Tá se beijando mano? kkk beija aqui ó, ${message.author}!`, embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(kiss);
            return message.channel.send(`Tá se beijando mano? kkk beija aqui ó, ${message.author}!`, embed);

        } else if (message.mentions.users.first() == bot.user) {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(kiss);
            return message.channel.send(`Nananinanão! B-BAKA!! ...・:*(〃・ｪ・〃人)*:・`, embed);

        } else {
            const embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(kiss);
            return message.channel.send(`${message.author} beijou ${recipient}!`, embed);
        }
}

exports.help = {
    name: "beijar",
    description: `\`${config.prefix}beijar @membro\` dá uma bitoquinha`
}