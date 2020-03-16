const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("JESUS REBATEDOR FODASE")
      .setColor("RANDOM")
      .attachFiles(['./imagens/jesus-rebatedor-fodase.png'])
      .setDescription(`Pai tá de atacante`)
      .setImage('attachment://jesus-rebatedor-fodase.png')
      message.channel.send(embed);
}

exports.help = {
    name: "jesus"
}