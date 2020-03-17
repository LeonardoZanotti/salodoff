const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle(`ALERTA DE PITBULL LINGUICINHA!!`)
      .setColor("RANDOM")
      .attachFiles(['./imagens/pl.png'])
      .setDescription(` :bangbang: :dog: :hotdog: :bangbang: `)
      .setImage('attachment://pl.png')
      message.channel.send(embed);
}

exports.help = {
    name: "pl",
    description: "PITBULL LINGUICINHA!!!"
}