const Discord = require('discord.js');
const moment = require('moment');

exports.run = (bot, message, args) => {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let year = random(1990, 2016);
    let day = random(0, 366);
    let date = moment().year(year).dayOfYear(day);
    let dateFormat = date.format('YYYY-MM-DD');
    let dateYear = date.year();

    const embed = new Discord.RichEmbed()
        .setColor('#E16935')
        .setFooter(`Publicado em ${dateYear}`)
        .setDescription(`[URL da imagem](https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${dateYear}/${dateFormat}.gif)`)
        .setImage(`https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${dateYear}/${dateFormat}.gif`)
    message.channel.send(embed)
}

exports.help = {
    name: "garfield",
    description: "Manda uma tirinha mt humor do garfield"
}