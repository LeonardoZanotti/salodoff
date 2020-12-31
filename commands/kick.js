const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('Você n pode kickar ninguém n mano kkkkkkkk');
    if (args.length === 0) return message.reply(`Utilize \`${bot.config.prefix}kick @membro [motivo]\``);
    
    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!kickMember) return message.reply("Não foi possível encontrar esse membro!");
    
    let kickReason = args.slice(1).join(" ");
        if (!kickReason) return message.reply("O motivo do kick não foi informado!");

    if (message.mentions.members.first().id === bot.user.id) return message.channel.send('Vo me kickar n kkkkkk');
    if (message.mentions.members.first().id === message.author.id) return message.channel.send('Ta com depressão? Come um dogão');
    if (message.mentions.members.first().id === message.guild.ownerID) return message.channel.send('Mano? KKKKKKKK vo kickar o dono do server n sifude');
    if (message.mentions.members.first().highestRole.calculatedPosition + 1 > message.member.highestRole.calculatedPosition) return message.channel.send(`Você não pode kickar **${kickMember}**! A rola dele é muito grande!`);

    try {
        message.guild.member(kickMember).kick(kickReason);
        message.channel.send(`${kickMember} foi **kickado(a)** pelo **motivo**: ${kickReason}`);
    } catch(error) {
        message.reply(`${error}`);
    }
}

exports.help = {
    name: "kick",
    description: `\`${config.prefix}kick @membro [motivo]\` expulsa um membro por um motivo`
}