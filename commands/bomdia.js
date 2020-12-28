const Discord = require('discord.js');
const superagent = require('node-fetch');

exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) {
        return message.channel.send('Esse canal não é NSFW!');
    }
    
    let links = ["anal", "blowjob", "classic", "cum", "ero", "erofeet", "erokemo", "eroyuri", "feet", "femdom", "fox_girl", "futanari", "Random_hentai_gif", "holoero", "hentai", "hololewd", "keta", "les", "lewd", "lizard", "neko", "nsfw_neko_gif", "pussy", "solo", "tits", "trap", "wallpaper", "yuri"];
    const response = await superagent(`https://nekos.life/api/v2/img/${links[Math.floor(Math.random() * links.length)]}`);
    const json = await response.json();

    let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("BOM DIA CARAIOOO")
        .setColor("RANDOM")
        .setDescription("Hoje muita paz e alegria!")
        .setURL(json.url)
        .setImage(json.url)
        .setAuthor('Bom dia!', `${json.url}`)
    message.channel.send(embed);
}

exports.help = {
    name: "bomdia"
}