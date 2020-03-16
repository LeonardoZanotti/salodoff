const Discord = require ('discord.js');
const porn = require('../porns.json');

exports.run = (bot, message, args) => {
    let links = porn
    let url = links[Math.floor(Math.random() * links.length)]
    message.channel.send(url);
};

exports.help = {
    name: 'porn',
    description: 'Você sabe o que isso faz'
};