const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
  try {
    let user = message.mentions.users.first() || message.author;
    if (!user.avatar) return message.channel.send('Esse membro não tem avatar!');
    const avatar = user.displayAvatarURL;

    const embed = new Discord.RichEmbed()
      .setAuthor(`${user.tag}`, avatar)
      .setColor(user.displayHexColor ? user.displayHexColor : '#D0C7FF')
      .setDescription(`[Avatar URL](${avatar})`)
      .setImage(avatar);
    return message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'avatar',
  description: `\`${config.prefix}avatar @membro\` mostra o avatar de um membro`,
};
