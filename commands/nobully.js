const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
    const recipient = args[0];
    let nb = actions.nobullyP[Math.round(Math.random() * (actions.nobullyP.length - 1))];

    if (!recipient) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(nb);
        return message.channel.send(embed);

    } else if (message.mentions.users.first() == bot.user) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(nb);
        return message.channel.send(`(✿´ ꒳ \` ) Fica flinston ae caralho!!`, embed);

    } else {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(nb);
        return message.channel.send(`${recipient}, Não faça bullying!!`, embed);
    }   
}

exports.help = {
    name: "nobully",
    description: "Prender o amigo atrás do gol e chutar bolas de futebol nele não é legal! :thumbsup: "
}