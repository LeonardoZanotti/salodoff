const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("MESSI!")
      .setColor("RANDOM")
      .attachFiles(['./imagens/messi.jpg'])
      .setDescription(`:regional_indicator_m: :regional_indicator_e: :regional_indicator_s: :regional_indicator_s: :regional_indicator_i:  `)
      .setImage('attachment://messi.jpg')
      message.channel.send(embed);
}

exports.help = {
    name: "messi"
}