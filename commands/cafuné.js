const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = (bot, message, args) => {
    var pat = actions.patP[Math.round(Math.random() * (actions.patP.length - 1))];
    recipient = args[0];

    if (!recipient) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(pat);
        return message.channel.send(`${message.author}, você não pode fazer cafuné em você mesmo, então deixe-me fazer em você (´꒳\`)`, embed);

    } else if (message.mentions.users.first() == message.author) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(pat);
        return message.channel.send(`${message.author}, você não pode fazer cafuné em você mesmo, então deixe-me fazer em você (´꒳\`)`, embed);

    } else if (message.mentions.users.first() == bot.user) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(pat);
        return message.channel.send(`H-Haa.. (✿´ ꒳ \` ) por favor não pare... Nya!`, embed);

    } else {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(pat);
        return message.channel.send(`${message.author} está fazendo cafuné em ${recipient}! (✿´ ꒳ \` )`, embed);
    }    
}

exports.help = {
    name: "cafuné",
    description: "Cafunézin fodase vadia puta"
}