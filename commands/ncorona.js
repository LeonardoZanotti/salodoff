const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const moment = require('moment');
const config = require('../json/config.json');

exports.run = async (bot,message, args) => {
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=BR`);
    const body = text.body;
    let max = Object.keys(body.countrynewsitems[0]).length - 1;
    let min = max - 200;
    let number = Math.floor(Math.random() * (max - min)) + min + 1;
    let embed = new Discord.RichEmbed()
    .setColor('#ff1111')
	.setTitle('Notícias Corona Vírus')
	.setURL(`${body.countrynewsitems[0][number].url}`)
	.setDescription(body.countrynewsitems[0][number].title)
	.setThumbnail('https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg')
    .addField('Publicado em:', moment(body.countrynewsitems[0][number].time).format('DD/MM/YYYY'))
    .setImage(body.countrynewsitems[0][number].image)
	.setTimestamp()
    .setFooter('Corona Vírus', 'https://imagepng.org/wp-content/uploads/2018/08/alerta.png');

    message.channel.send(embed);
}

exports.help = {
    name: "ncorona",
    description: `Mostra uma notícia sobre o corona vírus, veja ainda o ${config.prefix}corona e o ${config.prefix}pcorona`
}