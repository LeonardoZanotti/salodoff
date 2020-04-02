const Discord = require('discord.js');

var metralha = 1087;
// var metralha = 0

exports.run = (bot, message, args) => {
    metralha++;
    // metralha += 1;
    message.channel.send(`O metralha já falou bosta ${metralha} vezes!`);
} 

exports.help = {
    name: "metralha",
    description: "Contador de quantas vezes o metralha já falou bosta"
}