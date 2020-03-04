const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não vai anunciar nada não!")
    message.channel.send('Em qual canal você quer enviar o anúncio?').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {time: 60000 * 20, max: 1})
            .on('collect', c => {
                canal = c.mentions.channels.first();
                if(!canal) return message.reply('Este canal não existe!');
                
                    message.channel.send('Escreva o título do anúncio.').then(msg1 => {
                        let t1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {time: 60000 * 20, max: 1})
                        .on('collect', t => {
                            titulo = t.content;

                            message.channel.send('Escreva o anúncio.').then(msg1 => {
                                let a1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {time: 60000 * 20, max: 1})
                                .on('collect', a => {
                                    anuncio = a.content;


                                    let embed = new Discord.RichEmbed()
                                    .setTimestamp()
                                    .setTitle(titulo)
                                    .setColor("RANDOM")
                                    .setThumbnail("https://images.emojiterra.com/mozilla/512px/1f4e2.png")
                                    .setDescription(anuncio)
                                    .setFooter(`Anunciado por ${message.author.username}`, message.author.avatarURL)

                                    canal.send(`@everyone`, embed)
                                });
                            });
                        });
                    });
            });
    });
};

exports.help = {
    name: "anunciar",
    description: "Permite anunciar uma mensagem em um canal de texto"
}