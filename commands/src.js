const Discord = require ('discord.js');

exports.run = async (bot, message, args) => {
    message.channel.send("Os códigos do bot estão no meu repositório do github. Acesse: https://github.com/LeonardoZanotti/salodoff.")   
    message.react('🍉');
}

exports.help = {
    name: 'src',
    description: 'Mostra o repositório no github do bot, onde todos os códigos estão, aproveite para ver meu github também'
}