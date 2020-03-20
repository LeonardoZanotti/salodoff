const Discord = require('discord.js');
const ncage = require('../json/ncage.json');

exports.run = async (bot, message, args) => {
    if (message.author.id === "326836884665794571") return message.reply(`"Gordo boiola não pode usar esse comando nãokkkkkkkkkkkkkkkkk" - Nicolas Cage`)

    //for(i = 0; i < ncage.length + 1; i++){
        const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            //.setImage(ncage[args[0]]);
            .setImage(ncage[Math.floor(Math.random() * ncage.length)]);
        return message.channel.send(embed);
        // await message.channel.send(embed)//.then(m => m.delete(5000));
    //}
}

exports.help = {
    name: "cage",
    description: "Nicolas Cage seja louvado!"
}