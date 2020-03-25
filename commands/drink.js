const Discord = require('discord.js');
const config = require('../json/config.json');
const drinks = require('../json/drinks.json');

exports.run = async (bot, message, args) => {
    let bebida = args[0];
    let bebidas = Object.keys(drinks);
    
    if (!bebida) {
        const embed = new Discord.RichEmbed()
            .setColor("#ff1111")
            .attachFiles(['./imagens/drinks/barman.jpg'])
            .setImage('attachment://barman.jpg')
        return message.channel.send(`Use ${bot.config.prefix}drink (nome da bebida). Bebidas que temos hoje: agua, azul, blood, burguesa, cafe, cha, choc, chopp, coca, leite, margarita, martini, mojito, pina, vinho e whisk.`, embed)
    }

    else if(!bebidas.includes(bebida.toLowerCase())) {
        const embed = new Discord.RichEmbed()
            .setColor("#ff1111")
            .attachFiles(['./imagens/drinks/barman.jpg'])
            .setImage('attachment://barman.jpg')
        return message.channel.send("Desculpe, mas a casa não possui esta bebida. Bebidas que temos hoje: agua, azul, blood, burguesa, cafe, cha, choc, chopp, coca, leite, margarita, martini, mojito, pina, vinho e whisk.", embed)
    }

    else {
        for(i = 3; i > 0;) {
        const embed = new Discord.RichEmbed()
            .setTitle(drinks[bebida])
            .setColor("#ff1111")
            .attachFiles([`./imagens/drinks/${bebida}${i}.png`])
            .setImage(`attachment://${bebida}${i}.png`)
        let ms = await message.channel.send(embed)
        
	    await ms.react('🥤');

        const filter = (reaction, user) => {
            return reaction.emoji.name === '🥤' && user.id === message.author.id;
        };
        
        let reaction = new Discord.ReactionCollector(ms, filter, 5000);
        
        if(reaction) {
            i--
            const nembed = new Discord.RichEmbed()
                .setTitle(drinks[bebida])
                .setColor("#ff1111")
                .attachFiles([`./imagens/drinks/${bebida}${i}.png`])
                .setImage(`attachment://${bebida}${i}.png`)
            ms.edit(nembed)
        }
        }
    }


}

exports.help = {
    name: "drink",
    description: `Use ${config.prefix}drink (nome da bebida) para beber algo. Bebidas que temos hoje: agua, azul, blood, burguesa, cafe, cha, choc, chopp, coca, leite, margarita, martini, mojito, pina, vinho e whisk.`
}