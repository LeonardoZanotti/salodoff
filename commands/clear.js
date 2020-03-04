const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (bot, message, args) => {
    // if (message.deletable) {
    //     message.delete();            Isso aqui tá dando problema no node.js
    // }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply('Você não possui permissão para limpar o chat!').then(m => m.delete(5000));
    }

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Eu não tenho permissão para limpar o chat!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply(`Isso aí nem pode ser um número de mensagens porra [${bot.config.prefix}clear (número de mensagens)]`).then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    }
    else {
        deleteAmount = parseInt(args[0]);
    }

    //const attachment = new Discord.Attachment('https://media.discordapp.net/attachments/417040965488869379/661039442869485599/223777-1565717063.png');

    message.channel.bulkDelete(deleteAmount, true)   // true faz com que vc só ignore as mensagens com mais de 2 semanas pq vc n consegue deletar elas
        .then(deleted => message.channel.send(`Deletei ${deleted.size} mensagens fodase`))
        .catch(err => message.reply(`Você fez bosta e não deletei porra nenhumakk [${err}]`))
}

exports.help = {
    name: 'clear',
    description: `'${config.prefix}clear [número x]' deleta x mensagens do chat (limite de 100 mensagens e apenas mensagens mais recentes do que 14 dias)`
}