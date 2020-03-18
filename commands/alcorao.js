const Discord = require('discord.js');
const alcorao = require('../json/alcorao.json');
const superagent = require("snekfetch");
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
    if (args.length === 0) {
        args[0] = Math.floor(Math.random() * 24);
    }
    
    responseObject = alcorao
    
    if (responseObject[args[0]]) {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("ALCORÃO MENSAGENS")
      .setColor("RANDOM")
      .setThumbnail('https://mensagens.culturamix.com/blog/wp-content/gallery/sabias-licoes-de-vida/sabias-licoes-de-vida-3.jpg')
      .setDescription(`Mensagem de hoje: ${responseObject[args[0]]}`)

      message.channel.send(embed);
    }  
}

exports.help = {
    name: "alcorao",
    description: `'${config.prefix}alcorao' ou '${config.prefix}alcorao ["número de 0-32"]' mostra uma frase do alcorão`
}
