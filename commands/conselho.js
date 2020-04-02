const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
    var res = await snekfetch.get("http://api.adviceslip.com/advice");
    var advice = JSON.parse(res.body);

    try {
        const embed = new Discord.RichEmbed()
            .setAuthor(`Toma aqui um conselho`)
            .setThumbnail( 'https://pa1.narvii.com/6497/a5b7bd7c82b3209bfb7bb844584d23f56c4ec545_00.gif')
            .setDescription(advice.slip.advice)
            .setColor('#727684');
        return message.channel.send(embed);

    } catch (err) {
        return message.channel.send(`Sorry! My API isn't working!`)
    }    
}

exports.help = {
    name: "conselho",
    description: "Receba um conselho"
}