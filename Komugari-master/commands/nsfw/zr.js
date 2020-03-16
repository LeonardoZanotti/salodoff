const { Command } = require('../../commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

//remember to return before every promise
module.exports = class ZrCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'zr',
            aliases: ['zettairyouiki'],
            group: 'nsfw',
            memberName: 'zr',
            guildOnly: true,
            description: '"Absolute Territory" (絶対領域, zettai ryouiki) describes the amount of bare thigh skin between the skirt and stockings or socks for female characters.',
            examples: ['~zr'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        randomPuppy('ZettaiRyouiki')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`ZettaiRyouiki`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}