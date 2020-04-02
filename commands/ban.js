const Discord = require('discord.js');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('KKKK c n pode bani ngm n man, fica flinston ae');
    if (args.length === 0) return message.reply(`Utilize \`${bot.config.prefix}ban @membro [motivo]\``);
    
    let banMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!banMember) return message.reply("Não foi possível encontrar esse membro!");
    
    let banReason = args.slice(1).join(" ");
        if (!banReason) return message.reply("O motivo do ban não foi informado!");

    if (message.mentions.members.first().id === bot.user.id) return message.channel.send('Vo me banir n kkkkkk');
    if (message.mentions.members.first().id === message.author.id) return message.channel.send('Não desista. Geralmente é a última chave no chaveiro que abre a porta.');
    if (message.mentions.members.first().id === message.guild.owner.id) return message.channel.send('Mano? KKKKKKKK vo bani o dono do server n sifude')
    if (message.mentions.members.first().highestRole.calculatedPosition + 1 > message.member.highestRole.calculatedPosition) return message.channel.send(`Você não pode banir **${banMember}**! A rola dele é muito grande!`);

    try {
        message.guild.member(banMember).ban(banReason);
        message.channel.send(`${banMember} foi **banzido(a)** pelo **motivo**: ${banReason}`);
    } catch(error) {
        message.reply(`${error}`);
    }
}

exports.help = {
    name: "ban",
    description: `\`${config.prefix}ban @membro [motivo]\` bane um mebro por um motivo`
}