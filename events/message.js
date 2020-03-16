const Discord = require('discord.js');
const links = require('../links.json');

module.exports = (bot, message) => {
    // ping
    // pong
    if (message.content.startsWith('!ping')) {
        (message.channel.send('pong!'));
    };
    if (message.content.startsWith('!pong')) {
        (message.channel.send('ping!'));
    };


    // rip
    if (message.content === '!rip') {
        const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
        message.channel.send("Rest in pussy");
        // const attachment = new Discord.Attachment('./rip.png');
        // message.channel.send(`${message.author},`, attachment);

        // const buffer = fs.readFileSync('./memes.txt');
        // const attachment = new Discord.Attachment(buffer, 'memes.txt');
        // message.channel.send(`${message.author}, here are your memes!`, attachment);
    };


    // Estrutura alternativa de mensagens
    responseObject = links;
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }; 


    /*
    if(comando === "!ping") {
        message.channel.send("pong!");
    }

    switch (comando) {
        case "fb" :
            message.channel.send("facebook.com/######");
        break;

        case "google" :
            message.channel.send("www.google.com.br");
        break;
    }
    */


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

        
    // Exemplo
    // if (command = `${prefix}Salodoff`) {
    //    message.channel.send('Salodoff: Bot criado por Leonardo Zanotti');
    // }
};