const Discord = require('discord.js');
const superagent = require('node-fetch');
const moment = require('moment');
moment.locale('pt-BR');
const config = require('../json/config.json');

exports.run = async (bot, message, args) => {
  try {
    await superagent('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((json) => {
        const global = json.Global;

        let embed = new Discord.RichEmbed()
          .setColor('#ff1111')
          .setTitle('Corona Vírus')
          .setURL('https://documenter.getpostman.com/view/10808728/SzS8rjbc')
          .setDescription('Estatísticas globais do coronga')
          .setThumbnail('https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg')
          .addField('Novos casos:\u200B', global.NewConfirmed, true)
          .addField('Total de casos:\u200B', global.TotalConfirmed, true)
          .addField('Novas mortes:\u200B', global.NewDeaths, true)
          .addField('Total de mortes:\u200B', global.TotalDeaths, true)
          .addField('Novas recuperações:\u200B', global.NewRecovered, true)
          .addField('Total de recuperados:\u200B', global.TotalRecovered, true)
          .addField('Data de publicação:\u200B', moment(json.Date).format('DD/MM/YYYY'), true)
          .setImage('https://cdn.startupi.com.br/wp-content/uploads/2018/09/startup-global.jpg')
          .setTimestamp()
          .setFooter('Corona Vírus', 'https://imagepng.org/wp-content/uploads/2018/08/alerta.png');

        return message.channel.send(embed);
      });
  } catch (err) {
    return message.channel.send('A API do corona está fora do ar, tente mais tarde.');
  }
};

exports.help = {
  name: 'corona',
  description: `Mostra estatísticas globais sobre o corona vírus (https://documenter.getpostman.com/view/10808728/SzS8rjbc), veja ainda o \`${config.prefix}coronapaís\``,
};
