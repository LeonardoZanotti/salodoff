const Discord = require ('discord.js');
const links = require('../json/porns.json');

exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) {
        return message.channel.send('Esse canal não é NSFW!');
    }
    
    let url = links[Math.floor(Math.random() * links.length)]
    await message.channel.send(url);
};

exports.help = {
    name: 'porn',
    description: 'Você sabe o que isso faz'
};