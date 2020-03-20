const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
    //for(i = 0; i < actions.cryP.length + 1; i++){
        const embed = new Discord.RichEmbed()
            .setColor('#FBCFCF')
            //.setImage(actions.cryP[i])
            .setImage(actions.cryP[Math.round(Math.random() * (actions.cryP.length - 1))]);
        return message.channel.send(`${message.author} está chorando tristinho foda!`, embed);
        //await message.channel.send(i, embed);
    //}
}

exports.help = {
    name: "cry",
    description: "Declara que você está chorando e envia um gif"
}