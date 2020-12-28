const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const moment = require('moment');
const config = require('../json/config.json');

exports.run = async (bot,message, args) => {
    try {
        return message.channel.send('A porra da API de noticias morreu');
        const text = await snekfetch.get(`https://documenter.getpostman.com/view/10808728/SzS8rjbcfree-api?countryTotal=BR`);
        const body = text.body;
        let max = Object.keys(body.countrynewsitems[0]).length - 1;
        let min = parseInt(max) - Math.floor(max/2);
        let number = Math.floor(Math.random() * (max - min)) + min;
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
    } catch (err) {
        return message.channel.send('A API do corona está fora do ar, tente mais tarde.');
    };  
}

exports.help = {
    name: "coronanews",
    description: `Mostra uma notícia sobre o corona vírus, veja ainda o \`${config.prefix}corona\` e o \`${config.prefix}coronapaís\``
}