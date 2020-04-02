const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
    function selfSlap() {
        var rand = ['http://cdn.awwni.me/mz98.gif', 'https://media.giphy.com/media/UxFtCk3f62uGI/200.gif'];
        return rand[Math.floor(Math.random() * rand.length)];
    }

    const recipient = args[0];
    var slap = actions.slapP[Math.round(Math.random() * (actions.slapP.length - 1))];

    if (!recipient) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(selfSlap());
        return message.channel.send(`${message.author}, está se batendo?? wtf man`, embed);

    } else if (message.mentions.users.first() == message.author) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(selfSlap());
        return message.channel.send(`${message.author}, está se batendo?? wtf man`, embed);

    } else if (message.mentions.users.first() == bot.user) {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(slap);
        return message.channel.send(`(；︿ ；✿) M-Me desculpe... por favor não bata em mim...`, embed);

    } else {
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(slap);
        return message.channel.send(`${message.author} bateu em ${recipient}!`, embed);
    }
}

exports.help = {
    name: "tapa",
    description: "tapaço na boca fodase"
}