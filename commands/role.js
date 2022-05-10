const Discord = require('discord.js');
const moment = require('moment');
const perms = require('../json/permissions.json');
const config = require('../json/config.json');

exports.run = (bot, message, args) => {
  try {
    let cargos = message.guild.roles
      .sort((a, b) => a.position - b.position)
      .map((role) => role.toString())
      .slice(1)
      .reverse()
      .join(' ');

    if (args.length === 0) {
      const embed = new Discord.RichEmbed()
        .setAuthor(`Roles de ${message.guild.name}`, message.guild.iconURL)
        .setColor('RANDOM')
        .setDescription(cargos);
      return message.channel.send(embed);
    }

    if (!cargos.includes(args[0])) {
      return message.reply('Isso aí não é uma role não');
    }

    const role = message.mentions.roles.first();

    let permissoes = new Discord.Permissions(role.permissions).serialize();
    const allowed = Object.entries(permissoes)
      .filter(([perm, allowed]) => allowed)
      .map(([perm]) => perms[perm])
      .join(', ');

    const embed = new Discord.RichEmbed()
      .setAuthor(role.name, message.guild.iconURL)
      .setDescription(`**Server:** ${message.guild.name} (ID: ${message.guild.id})`)
      .setColor(role.hexColor)
      .setThumbnail(message.guild.iconURL)
      .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL)
      .addField(
        '❯\u2000Informação',
        `•\u2000\**ID:** ${role.id}\n\•\u2000\**Criada em:** ${moment(role.createdAt).format(
          'DD/MM/YYYY'
        )}\n\•\u2000\**Posição:** ${message.guild.roles.size - role.position} de ${
          message.guild.roles.size
        }\n\•\u2000\**Membros com a role:** ${role.members.size}`,
        true
      )
      .addField(
        '❯\u2000Diversos',
        `•\u2000\**Cor:** ${role.hexColor}\n\•\u2000\**Hoisted:** ${
          role.hoist ? 'Yes' : 'No'
        }\n\•\u2000\**Mencionável:** ${role.mentionable ? 'Yes' : 'No'}\n\•\u2000\**Manipulável:** ${
          role.managed ? 'Yes' : 'No'
        }`,
        true
      )
      .addField('❯\u2000Permissions', allowed);
    return message.channel.send(`Informações da role **${role.name}**!`, embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'role',
  description: `\`${config.prefix}role\` lista as roles e \`${config.prefix}role @role\` mostra detalhes da role`,
};
