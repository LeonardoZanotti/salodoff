const Discord = require('discord.js');
const actions = require('../json/actions.json');

exports.run = async (bot, message, args) => {
  try {
    var recipient = args[0];
    var noSwear = actions.noswearP[Math.round(Math.random() * (actions.noswearP.length - 1))];

    if (!recipient) {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(noSwear);
      return message.channel.send(
        `Mano faz favor ae, fala palavrão não po, isso aq é um grupo de cristãos que jogam minecraft!`,
        embed
      );
    } else {
      var embed = new Discord.RichEmbed().setColor('#FBCFCF').setImage(noSwear);
      return message.channel.send(`${recipient}, Ô SEU FILHO DA PUTA NÃO FALA PALAVRÃO, PORRA`, embed);
    }
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'sempalavrão',
  description: 'Ado Ado Ado quem falar palavrão é gay',
};
