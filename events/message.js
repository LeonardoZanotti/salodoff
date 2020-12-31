const Discord = require('discord.js');
const links = require('../json/links.json');

module.exports = (bot, message) => {
    // ping
    // pong
    if (message.content.startsWith('!ping')) {
        (message.channel.send('pong!'));
    };
    if (message.content.startsWith('!pong')) {
        (message.channel.send('ping!'));
    };

    // Estrutura alternativa de mensagens
    let words = message.content.split(' ');
    for (i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase().replace(',', '').replace('.', '');
        if (links[words[i]]) {
            message.channel.send(links[words[i]]);
        }
    }

    // zoar quem for escutar musickk
    if ((message.content.startsWith('!play')) || (message.content.startsWith('=play')) || (message.content.startsWith('p!play'))) {
        message.channel.send('Vai ouvir musiquinha ent? kkkkk tuts tuts');
    };

    // hater de dm e de outros bot
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(bot.config.prefix)) return;
    
    let messageArray = message.content.split(/ +/); // divide a mensagem a cada ' ' em várias strings (a frase vira várias palavras) e as armazena num array messageArray
    let command = messageArray[0];  // variável command é a primeira string do array
    let args = messageArray.slice(1);   // variável args engloba todas as outras strings --> slice fatia o array partindo do 2° termo até o final, sobrando o termo 0 pro command
    let arquivocmd = bot.commands.get(command.slice(bot.config.prefix.length));
        if (arquivocmd) {
            arquivocmd.run(bot, message, args);
        };        
};