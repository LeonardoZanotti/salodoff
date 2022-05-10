const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = async (bot, message, args) => {
  try {
    var color = args[0];

    if (!color) {
      var genColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const embed = new Discord.RichEmbed()
        .setColor(genColour)
        .setImage(`https://dummyimage.com/50/${genColour.slice(1)}/&text=%20`)
        .setFooter(genColour);
      return message.channel.send(embed);
    }

    if ((color.indexOf('#') === 0 && color.length === 7) || (!isNaN(color) && color.length <= 8 && color < 16777215)) {
      const embed = await new Discord.RichEmbed()
        .setColor(color)
        .setImage(`https://dummyimage.com/50/${color.slice(1)}/&text=%20`)
        .setFooter(color);
      return message.channel.send(embed);
    } else {
      return message.channel.send(`Você fez algo errado lekão, use \`${config.prefix}cor #RRGGBB\``);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'cor',
  description: `\`${config.prefix}cor\` mostra uma cor aleatória e \`${config.prefix}cor #RRGGBB\` mostra o preview da cor informada`,
};
