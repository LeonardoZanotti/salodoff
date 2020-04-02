const Discord = require('discord.js');
const actions = require('../json/actions.json');
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
    var recipient = args[0];

    var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=pout`);
    var body = text.body;

    if (!recipient) {
        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send(`${message.author} tá de beiçola!`, embed);

    } else {
        var embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send(`${message.author} tá chatiadinho tristinhozinho com ${recipient}!`, embed);
    }
}

exports.help = {
    name: "beiço",
    description: "beiçola"
}