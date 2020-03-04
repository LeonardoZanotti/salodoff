const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("Suave na nave :ok_hand:")
      .setColor("RANDOM")
      .attachFiles(['./imagens/suave.jpg'])
      .setDescription(`:sunglasses: :rabbit2: :womans_hat: :sunny:`)
      .setImage('attachment://suave.jpg')
      message.channel.send(embed);
}

exports.help = {
    name: "suave"
}