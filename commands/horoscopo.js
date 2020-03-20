const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const moment = require('moment');
const config = require('../json/config.json');
const signs = [
    "capricorn",
    "aquarius",
    "pisces",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius"
]

exports.run = async (bot, message, args) => {
        const sign = args[0];
        if (!sign) return message.channel.send("Insira um signo depois do comando! (capricorn, aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius)");

        if (!signs.includes(sign.toLowerCase())) return message.channel.send('Isso aí nem é um signo (capricorn, aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius)');

        const text = await snekfetch.get(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today`);
        const body = JSON.parse(text.body);

        var horoscope = body.horoscope
        var replaced = horoscope.replace('(c) Kelli Fox, The Astrologer, http://new.theastrologer.com', '')

        const embed = new Discord.RichEmbed()
            .setColor('#5D7B9D')
            .setAuthor(`Horóscopo para ${body.sunsign} em ${moment(body.date).format('DD/MM/YYYY')}`, 'http://images.indianexpress.com/2017/01/zodiac-love-2017-main_820_thinkstockphotos-481896132.jpg?w=820')
            .setDescription(replaced)
            .setTimestamp()
            .setFooter(`Horóscopo de ${message.author.username}`)
            .addField('Humor: ', body.meta.mood, true)
            .addField("Intensidade: ", body.meta.intensity, true);
        return message.channel.send(embed);
}

exports.help = {
    name: "horoscopo",
    description: `Envia informações do horóscopo. Uso: ${config.prefix} (capricorn, aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius)`
}