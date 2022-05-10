const Discord = require('discord.js');
const alcorao = require('../json/alcorão.json');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
  try {
    if (args.length === 0) {
      args[0] = Math.floor(Math.random() * Object.keys(alcorao).length);
    }

    responseObject = alcorao;

    if (responseObject[args[0]]) {
      let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('ALCORÃO MENSAGENS')
        .setColor('RANDOM')
        .setThumbnail(
          'https://mensagens.culturamix.com/blog/wp-content/gallery/sabias-licoes-de-vida/sabias-licoes-de-vida-3.jpg'
        )
        .setDescription(`Mensagem de hoje: ${responseObject[args[0]]}`);

      message.channel.send(embed);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'alcorão',
  description: `\`${config.prefix}alcorão\` ou \`${config.prefix}alcorão ["número de 0-32"]\` mostra uma frase do alcorão`,
};
