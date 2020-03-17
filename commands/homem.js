const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("HOMEM NEGRO FODASE")
      .setColor("RANDOM")
      .attachFiles(['./imagens/homem-negro-fodase.jpg'])
      .setDescription(`Só os artilheiro`)
      .setImage('attachment://homem-negro-fodase.jpg')
      message.channel.send(embed);
}

exports.help = {
    name: "homem"
}