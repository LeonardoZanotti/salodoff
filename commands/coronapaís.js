const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const config = require('../json/config.json');

exports.run = async (bot,message, args) => {
    try {
        if (args.length === 0) {
            return message.reply("Mencione a sigla de um país (AU, BR, CN, DE, DK, ES, FI, FR, IE, IS, IT, NO, PL, PT, RU, SE, SZ, TR ou US)")
        };
        let country = args[0];
        let countries = ["au", "br", "cn", "de", "dk", "es", "fi", "fr", "ie", "is", "it", "no", "pl", "pt", "ru", "se", "sz", "tr", "us"];

        if (!countries.includes(country.toLowerCase())) {
            return message.reply("Essa sigla de país não existe não man")
        }

        const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${country}`);
        const body = text.body;

        let embed = new Discord.RichEmbed()
            .setColor('#ff1111')
            .setTitle('Corona Vírus')
            .setURL(`${body.countrydata[0].info.source}`)
            .setDescription(`Estatísticas do coronga em ${body.countrydata[0].info.title}`)
            .setThumbnail('https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2020/03/1800x1200_coronavirus_1.jpg')
            .addField('Total de casos:\u200B', body.countrydata[0].total_cases, true)
            .addField('Recuperados:\u200B', body.countrydata[0].total_recovered, true)
            .addField('Infectados:\u200B', body.countrydata[0].total_active_cases, true)
            .addField('Mortes:\u200B', body.countrydata[0].total_deaths, true)
            .addField('Novos casos hoje:\u200B', body.countrydata[0].total_new_cases_today, true)
            .addField('Novas mortes hoje:\u200B', body.countrydata[0].total_new_deaths_today, true)
            .addField('Casos graves:\u200B', body.countrydata[0].total_serious_cases, true)
            .setTimestamp()
            .setFooter('Corona Vírus', 'https://imagepng.org/wp-content/uploads/2018/08/alerta.png');
        
        message.channel.send(embed);
    } catch (err) {
        return message.channel.send('A API do corona está fora do ar, tente mais tarde.');
    };  
}

exports.help = {
    name: "coronapaís",
    description: `\`${config.prefix}coronapaís (AU, BR, CN, DE, DK, ES, FI, FR, IE, IS, IT, NO, PL, PT, RU, SE, SZ, TR ou US)\` mostra estatísticas do corona vírus nos países: Austrália, Brasil, China, Alemanha, Dinamarca, Espanha, Finlândia, França, Irlanda, Islândia, Itália, Noruega, Polônia, Portugal, Rússia, Suécia, Suíça, Turquia e EUA respectivamente, veja ainda o \`${config.prefix}corona\` e o \`${config.prefix}coronanews\``
}