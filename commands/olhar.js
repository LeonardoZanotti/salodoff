const Discord = require('discord.js');
const actions = require('../json/actions.json');
const superagent = require('node-fetch');

exports.run = async (bot, message, args) => {
    var recipient = args[0];
    var disgust = actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))];

    if (!recipient) {
        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(disgust);
        return message.channel.send(`${message.author} olhou fixamente para... si mesmo..?`, embed);

    } else if (message.mentions.users.first() == message.author) {
        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(disgust);
        return message.channel.send(`${message.author} olhou fixamente para... si mesmo..?`, embed);

    } else if (message.mentions.users.first() == bot.user) {
        var text = await superagent(`https://rra.ram.moe/i/r?type=stare`);
        var body = await text.json();

        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send(`O-Oi?? (๑´•ω • \`๑)`, embed);


    } else {

        var text = await superagent(`https://rra.ram.moe/i/r?type=stare`);
        var body = await text.json();

        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send(`${message.author} olhou muito pucto para ${recipient}...`, embed);

    }
}

exports.help = {
    name: "olhar",
    description: "olha pra quem te fudeu"
}