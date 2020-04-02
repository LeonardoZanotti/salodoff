const Discord = require('discord.js');
const config = require('../json/config.json');
const drinks = require('../json/drinks.json');

exports.run = async (bot, message, args) => {
    let bebida = args[0];
    let bebidas = Object.keys(drinks);
    let copo1 = ['margarita', 'martini'];
    let copo2 = ['pinacolada', 'vinho'];
    let copo3 = ['chopp'];
    let copo4 = ['agua', 'curaçau', 'bloodymary', 'coca', 'mojito', 'tequila', 'whisky'];
    let copo5 = ['burguesa'];
    let copo6 = ['monster'];
    let copo7 = ['redbull'];
    let copo8 = ['corote'];
    let copo9 = ['vodka'];
    let xicara = ['cafe', 'cha', 'chocolate', 'leite'];
    
    if (!bebida) {
        const embed = new Discord.RichEmbed()
            .setColor("#ff1111")
            .attachFiles(['./imagens/drinks/barman.jpg'])
            .setImage('attachment://barman.jpg')
        return message.channel.send(`Use \`${bot.config.prefix}beber (nome da bebida)\`. Bebidas que temos hoje: agua, bloodymary, burguesa, cafe, cha, chocolate, chopp, coca, corote, curaçau, leite, margarita, martini, mojito, monster, pinacolada, redbull, tequila, vinho, vodka e whisky.`, embed);
    }

    else if(!bebidas.includes(bebida.toLowerCase())) {
        const embed = new Discord.RichEmbed()
            .setColor("#ff1111")
            .attachFiles(['./imagens/drinks/barman.jpg'])
            .setImage('attachment://barman.jpg')
        return message.channel.send("Desculpe, mas a casa não possui esta bebida. Bebidas que temos hoje: agua, bloodymary, burguesa, cafe, cha, chocolate, chopp, coca, corote, curaçau, leite, margarita, martini, mojito, monster, pinacolada, redbull, tequila, vinho, vodka e whisky.", embed);
    }

    else {
        const embed = new Discord.RichEmbed()
                .setTitle(`[3/3] ${drinks[bebida]}`)
                .setColor("#ff1111")
                .attachFiles([`./imagens/drinks/${bebida}3.png`])
                .setImage(`attachment://${bebida}3.png`)
            let ms = await message.channel.send(embed);
            
            await ms.react('🥤');
        
            const filter = (reaction, user) => {
                if(user.id === bot.user.id) return;
                return reaction.emoji.name === '🥤' && user.id === message.author.id;
            };

            const collector2 = await ms.createReactionCollector(filter, { time: 900000 })
                
                collector2.on('collect', async() => {
                    const nembed = new Discord.RichEmbed()
                        .setTitle(`[2/3] ${drinks[bebida]}`)
                        .setColor("#ff1111")
                        .attachFiles([`./imagens/drinks/${bebida}2.png`])
                        .setImage(`attachment://${bebida}2.png`)
                    let mss = await message.channel.send(nembed).then(ms.delete());

                    await mss.react('🥤');

                    const collector1 = await mss.createReactionCollector(filter, { time: 900000 })
                
                        collector1.on('collect', async() => {
                            const nnembed = new Discord.RichEmbed()
                                .setTitle(`[1/3] ${drinks[bebida]}`)
                                .setColor("#ff1111")
                                .attachFiles([`./imagens/drinks/${bebida}1.png`])
                                .setImage(`attachment://${bebida}1.png`)
                            let msss = await message.channel.send(nnembed).then(mss.delete());

                            await msss.react('🥤');

                            const collector = await msss.createReactionCollector(filter, { time: 900000 })
                
                                collector.on('collect', async() => {
                                    if(copo1.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo1.png`])
                                                .setImage(`attachment://copo1.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo2.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo2.png`])
                                                .setImage(`attachment://copo2.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo3.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo3.png`])
                                                .setImage(`attachment://copo3.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo4.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo4.png`])
                                                .setImage(`attachment://copo4.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo5.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo5.png`])
                                                .setImage(`attachment://copo5.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo6.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo6.png`])
                                                .setImage(`attachment://copo6.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo7.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo7.png`])
                                                .setImage(`attachment://copo7.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo8.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo8.png`])
                                                .setImage(`attachment://copo8.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(copo9.includes(bebida)) {
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/copo9.png`])
                                                .setImage(`attachment://copo9.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    } else if(xicara.includes(bebida)) { 
                                        const eembed = new Discord.RichEmbed()
                                                .setTitle(`Sua bebida ${drinks[bebida]} acabou :/`)
                                                .setColor("#ff1111")
                                                .attachFiles([`./imagens/drinks/xicara.png`])
                                                .setImage(`attachment://xicara.png`)
                                            return message.channel.send(eembed).then(msss.delete());
                                    };   
                                });
                                collector.on('end', (collected) => {
                                    if (collected.size === 0) {
                                        return message.reply(`Tua bebida ${drinks[bebida]} foi roubada porque tu moscou`)
                                        .then(msss.delete());
                                    };
                                });
                        });
                        collector1.on('end', (collected) => {
                            if (collected.size === 0) {
                                return message.reply(`Tua bebida ${drinks[bebida]} foi roubada porque tu moscou`)
                                .then(mss.delete());
                            };
                        });
                });
                collector2.on('end', (collected) => {
                    if (collected.size === 0) {
                        return message.reply(`Tua bebida ${drinks[bebida]} foi roubada porque tu moscou`)
                        .then(ms.delete());
                    };
                });
    };
};

exports.help = {
    name: "beber",
    description: `Use \`${config.prefix}beber (nome da bebida)\` para beber algo. Bebidas que temos hoje: agua, bloodymary, burguesa, cafe, cha, chocolate, chopp, coca, corote, curaçau, leite, margarita, martini, mojito, monster, pinacolada, redbull, tequila, vinho, vodka e whisky.`
}