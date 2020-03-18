const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const config = require('../json/config.json');

exports.run = async (bot, message, args) => {
    const text = await snekfetch.get("https://thevirustracker.com/free-api?global=stats");
    const body = text.body;

    let embed = new Discord.RichEmbed()
    .setColor('#ff1111')
	.setTitle('Corona Vírus')
	.setURL('https://thevirustracker.com/')
	.setDescription('Estatísticas globais do coronga')
	.setThumbnail('https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg')
    .addField('Total de casos:\u200B', body.results[0].total_cases, true)
    .addField('Recuperados:\u200B', body.results[0].total_recovered, true)
    .addField('Infectados:\u200B', body.results[0].total_active_cases, true)
    .addField('Mortes:\u200B', body.results[0].total_deaths, true)
    .addField('Novos casos hoje:\u200B', body.results[0].total_new_cases_today, true)
    .addField('Novas mortes hoje:\u200B', body.results[0].total_new_deaths_today, true)
    .addField('Casos graves:\u200B', body.results[0].total_serious_cases, true)
    .addField('Status geral:\u200B', body.stat, true)
	.setImage('https://cdn.startupi.com.br/wp-content/uploads/2018/09/startup-global.jpg')
	.setTimestamp()
    .setFooter('Corona Vírus', 'https://imagepng.org/wp-content/uploads/2018/08/alerta.png');
    
    message.channel.send(embed);
}

exports.help = {
    name: "corona",
    description: `Mostra estatísticas globais sobre o corona vírus (https://thevirustracker.com/), veja ainda o ${config.prefix}ncorona e o ${config.prefix}pcorona`
}