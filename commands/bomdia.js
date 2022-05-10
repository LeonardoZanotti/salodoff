const Discord = require('discord.js');
const superagent = require('node-fetch');

exports.run = async (bot, message, args) => {
  try {
    if (!message.channel.nsfw) {
      return message.channel.send('Esse canal não é NSFW!');
    }

    let links = [
      '4k',
      'bellevid',
      'cum',
      'gif',
      'laugh',
      'pat',
      'spank',
      'anal',
      'bj',
      'feed',
      'hentai',
      'lesbian',
      'poke',
      'tickle',
      'animalears',
      'blowjob',
      'feet',
      'holo',
      'lewd',
      'pussy',
      'waifu',
      'baka',
      'boobs',
      'foxgirl',
      'hug',
      'lick',
      'slap',
      'wallpapers',
      'belle',
      'cuddle',
      'gasm',
      'kiss',
      'neko',
      'smug',
    ];
    const response = await superagent(
      `http://api.nekos.fun:8080/api/${links[Math.floor(Math.random() * links.length)]}`
    );
    const json = await response.json();
    json.image.includes('.mp4')
      ? message.channel.send(json.image)
      : message.channel.send(
          new Discord.RichEmbed()
            .setTimestamp()
            .setTitle('BOM DIA CARAIOOO')
            .setColor('RANDOM')
            .setDescription('Hoje muita paz e alegria!')
            .setURL(json.image)
            .setImage(json.image)
            .setAuthor('Bom dia!', `${json.image}`)
        );
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }
};

exports.help = {
  name: 'bomdia',
};
