const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("OBRIGADO DEUS!")
      .setColor("RANDOM")
      .attachFiles(['./imagens/gabriel.jpg'])
      .setDescription(`:pray: :pray: :pray:`)
      .setImage('attachment://gabriel.jpg')
      message.channel.send(embed);
}

exports.help = {
    name: "fimdedia"
}