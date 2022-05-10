const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
  try {
    // if (message.deletable) {
    //     message.delete();            Isso aqui tá dando problema no node.js
    // }

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('Você não possui permissão para limpar o chat!').then((m) => m.delete(5000));
    }

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('Eu não tenho permissão para limpar o chat!').then((m) => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message
        .reply(
          `Isso aí nem pode ser um número de mensagens porra, use \`${bot.config.prefix}apagar (número de mensagens)\``
        )
        .then((m) => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    //const attachment = new Discord.Attachment('https://media.discordapp.net/attachments/417040965488869379/661039442869485599/223777-1565717063.png');

    message.channel
      .bulkDelete(deleteAmount, true) // true faz com que vc só ignore as mensagens com mais de 2 semanas pq vc n consegue deletar elas
      .then((deleted) => message.channel.send(`Deletei ${deleted.size} mensagens fodase`))
      .then((m) => m.delete(2000))
      .catch((err) => message.reply(`Você fez bosta e não deletei porra nenhumakk [${err}]`));
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'apagar',
  description: `\`${config.prefix}apagar [número x]\` deleta x mensagens do chat (limite de 100 mensagens e apenas mensagens mais recentes do que 14 dias)`,
};
