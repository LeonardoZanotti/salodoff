const Discord = require('discord.js');
const actions = require('../json/actions.json');
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
    var recipient = args[0];
    var disgust = actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))]

    if (!recipient) {
        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(disgust);
        return message.channel.send(`${message.author} está fazendo cócegas... em si mesmo? pescotapa`, embed);

    } else if (message.mentions.users.first() == message.author) {
        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(disgust);
        return message.channel.send(`${message.author} está fazendo cócegas... em si mesmo? pescotapa`, embed);

    } else if (message.mentions.users.first() == bot.user) {

        var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=tickle`);
        var body = text.body;

        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send(`NyaAhaha! ⊂(( ^ ▽ ^ ))⊃`, embed);

    } else {

        var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=tickle`);
        var body = text.body;

        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send(`${message.author} fez cócegas em ${recipient}!`, embed);

    }
}

exports.help = {
    name: "cocegas",
    description: "cócegas kkk mt massa mesmo me mata"
}