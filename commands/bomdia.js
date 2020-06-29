const Discord = require('discord.js');
const superagent = require('snekfetch');

exports.run = (bot, message, args) => {
    if (!message.channel.nsfw) {
        return message.channel.send('Esse canal não é NSFW!');
    }
    
    let links = ["anal", "blowjob", "classic", "cum", "ero", "erofeet", "erokemo", "eroyuri", "feet", "femdom", "fox_girl", "futanari", "Random_hentai_gif", "holoero", "hentai", "hololewd", "keta", "les", "lewd", "lizard", "neko", "nsfw_neko_gif", "pussy", "solo", "tits", "trap", "wallpaper", "yuri"];
    superagent.get(`https://nekos.life/api/v2/img/${links[Math.floor(Math.random() * links.length)]}`) 
        .end(async (err, response) => {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("BOM DIA CARAIOOO")
      .setColor("RANDOM")
      .setDescription("Hoje muita paz e alegria!")
      .setURL(response.body.url)
      .setImage(response.body.url)
      .setAuthor('Bom dia!', `${response.body.url}`)
      await message.channel.send(embed);
    });
}

exports.help = {
    name: "bomdia"
}