const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = async (bot, message, args) => {
    if (!args[0] || (args[0] !== 'start' && args[0] !== 'stop')) {
        return message.channel.send(`\`${config.prefix}lockdown start\` proibe a plebe de enviarem mensagens em um canal e \`${config.prefix}lockdown stop\` permite o envio de mensagens`);
    }
    const type = args[0];
    if (type === 'start') {
        await message.channel.overwritePermissions(message.guild.defaultRole, { SEND_MESSAGES: false }, `Envio de mensagens bloqueado por ${message.author.tag}`);
        return message.channel.send(`Bloqueio de mensagens iniciado! A maioria da rapaziada tomou nisso aí!\n\Se quiser fazer a boa use \`lockdown stop\` pra permitir mensagens denovo!`);

    } else if (type === 'stop') {
        await message.channel.overwritePermissions(message.guild.defaultRole, { SEND_MESSAGES: null }, `Bloqueio de mensagens encerrado por ${message.author.tag}`);
        return message.channel.send('Bloqueio de mensagens encerrado!');
    }
}

exports.help = {
    name: "lockdown",
    description: `\`${config.prefix}lockdown start\` proibe a plebe de enviarem mensagens em um canal e \`${config.prefix}lockdown stop\` permite o envio de mensagens`
}