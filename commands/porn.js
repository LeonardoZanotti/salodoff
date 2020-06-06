const Discord = require ('discord.js');
const links = require('../json/porns.json');

exports.run = async (bot, message, args) => {
    //for(i = 0; i < links.length + 1; i++){
        //let url = links[i];
        //message.channel.send(i);
        //await message.channel.send(url);
        let url = links[Math.floor(Math.random() * links.length)]
        await message.channel.send(url);
    //}
};

exports.help = {
    name: 'porn',
    description: 'Você sabe o que isso faz'
};