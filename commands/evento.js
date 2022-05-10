const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const moment = require('moment');

exports.run = async (bot, message, args) => {
  try {
    const res = await snekfetch.get('http://history.muffinlabs.com/date');
    const data = res.body;
    const source = data.data['Events'];
    const event = source[Math.round(Math.random() * (source.length - 1))];
    const embed = new Discord.RichEmbed()
      .setAuthor(`Eventos históricos em ${moment(data.date, 'LL').format('DD/MM')}, ${event.year}`)
      .setColor('#6fd47a')
      .setDescription(event.text)
      .addField(
        '❯\u2000Informação',
        `•\u2000\**Ano:** ${event.year}\n\•\u2000\**Links externos${
          event.links.length !== 1 ? 's' : ''
        }:** ${event.links.map((l) => `[${l.title}](${l.link})`).join(', ')}`
      );
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'evento',
  description: 'Encontra um evento histórico para o dia de hoje',
};
