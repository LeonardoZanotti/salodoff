const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("PRAY")
      .setColor("RANDOM")
      .attachFiles(['./imagens/pray.jpg'])
      .setDescription(`:sob: :pray: :sob: :pray:`)
      .setImage('attachment://pray.jpg')
      message.channel.send(embed);
}

exports.help = {
    name: "pray"
}