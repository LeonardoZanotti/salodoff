const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const { readdirSync } = require('fs')
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.login(config.token);

// tornando config universal
bot.config = config

const evtFiles = readdirSync('./events/')
console.log(`Carregando o total de ${evtFiles.length} eventos`)
fs.readdir('./events', (err, files) => {
    if (err) console.error(err);
    
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Evento ${file} carregado com sucesso`);
        bot.on(eventName, event.bind(null, bot));
    });
});

const cmdFiles = readdirSync('./commands/')
console.log(`Carregando o total de ${cmdFiles.length} comandos`)
fs.readdir('./commands/', (err, files) => {
    if (err) {
        console.error(err);
    }

    let arquivojs = files.filter(f => f.split('.').pop() == 'js');    // seleciona todos os arquivos .js (split divide eles a cada '.', e pop seleciona o que vem depois do ., daí se for igual a js dá boa)
    arquivojs.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(`Comando ${f} carregado com sucesso`);
        bot.commands.set(props.help.name, props);
    });
});


// fazer uns áudio xingando o rigs e um comando que o bot entra na sala, xinga o gordo pelo áudio e mete o pé
// fazer comandos de bot de música