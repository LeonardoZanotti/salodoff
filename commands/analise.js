const Discord = require ('discord.js');

exports.run = (bot, message, args) => {
    let a = ["a1", "a2", "a3", "a4", "a5", "a6"];
    let b = a[Math.floor(Math.random() * a.length)]
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("ANÁLISE!")
      .setColor("RANDOM")
      .attachFiles([`./imagens/analise/${b}.jpg`])
      .setDescription(`:face_with_monocle: `)
      .setImage(`attachment://${b}.jpg`)
      message.channel.send(embed);
}

exports.help = {
    name: 'analise',
    description: 'análise'
}