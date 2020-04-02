const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
    const data = []
    if (!args.length) {    
    comandos = bot.commands.map(r => `${bot.config.prefix}${r.help.name}`).join(", ");
    
    message.channel.send(`Lista de comandos: ${comandos}`);
    message.channel.send(`Se quiser ajuda sobre um determinado comando use \`${bot.config.prefix}help [comando]\``);
    }
    else {
    const name = args[0];
    const comando = bot.commands.get(name);

    if (!comando) return message.reply("Esse não é um comando válido!");

    data.push(`Nome: ${comando.help.name}`);
    
    if (!comando.help.description) {
        comando.help.description = "Impossível descrever!"
    }
    
    data.push(`Descrição: ${comando.help.description}`);

    message.channel.send(data, {split : true})  // split true permite mandar mais de uma mensagem se data for muito grande
    }
}

exports.help = {
    name: "help",
    description: `\`${config.prefix}help\` lista todos os comandos do bot e \`${config.prefix}help (comando)\` descreve um comando específico`
}