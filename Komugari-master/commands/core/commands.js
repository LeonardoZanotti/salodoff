const { Command } = require('../../commando');
const Discord = require('discord.js');

module.exports = class CommandsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'commands',
            aliases: ['command', 'cmds', 'cmd'],
            group: 'core',
            memberName: 'commands',
            description: 'Sends a list of all commands!',
            details: 'Use the reactions to scroll through the panels!',
            examples: ['~commands'],
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    };

    async run(message) {
        const mainCommands = new Discord.MessageEmbed()
            .setAuthor("Commands", 'https://a.safe.moe/Tr9Jr.png')
            .setDescription(`Use \`~help [command]\` for more details.`)
            .setColor('727293')
            .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
            .setFooter(`(${this.client.registry.commands.size}) | Page 1 of 3`)
            .addField("__Core:__", "`commands` `nsfwcommands` `help` `invite` `ping` `support`", true)
            .addField("__Utility:__", "`color` `time` `trans` `weather` `math`\n\`img` `jisho` `osu` `wiki` `urban` `yt`", true)
            .addField("__Info:__", "`avatar` `discrim` `edits` `channel`\n\`inrole` `role` `server` `user`", true)
            .addField("__Fun:__", "`8ball` `advice` `big` `cat` `dog` `dadjoke` `f` `fortune` `horoscope` `magik` `meme` `mock` `pickup` `rate` `say` `sayd` `skyrim` `talk` `tsundere`\n\`bonzi` `disabled` `retarded` `shit` `shits` `thesearch` `triggered`")
            .addField("__Anime:__", "`anime` `neko` `manga` `moe` `booru` `waifu`", true)
            //.addField("__Music:__", "`listen` `np` `stop`", true)
            .addBlankField(true)
            .addField("__Action:__", "`action` `cry` `grope` `gross` `hand` `hug` `kiss` `lewd` `nobully` `noswear` `nom` `nyan` `owo` `pat` `pout` `slap` `smug` `slap` `stare` `tickle` `wasted`", true);

        const secretCommands = new Discord.MessageEmbed()
            .setAuthor("Extra Commands", 'https://a.safe.moe/Tr9Jr.png')
            .setDescription(`Moderation and Added Fun!`)
            .setColor('727293')
            .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
            .setFooter("These are only here to de-clutter the main commands interface... | Page 2 of 3")
            .addField("__Core:__", "`botinfo` `iku` `howtonsfw` `nonsfw` `ping`", true)
            .addField('__Moe-Deration:__', '`addrole` `delrole` `delete` `ban` `hackban` `bulkban` `kick` `lockdown` `nickname` `nuke` `massadd` `massrem` `mute` `unmute` `prune` `pruneuser` `pruneword` `softban` `unban`', true)
            .addField("__Utility:__", "`emoji` `github` `remindme` `steam` `temperature`", true)
            .addField("__Fun:__", "`b` `bird` `garfield` `giphy` `kaomoji` `lizard` `pasta` `react` `rightthere` `zalgo`", true);

        const nsfwCommands = new Discord.MessageEmbed()
            .setAuthor("NSFW Commands", 'https://a.safe.moe/Tr9Jr.png')
            .setDescription(`Use \`~help [command]\` for more details.`)
            .setColor('727293')
            .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
            .setFooter("Any message from me can be removed by reacting with a 🎴 emoji! | Page 3 of 3")
            .addField("__2D NSFW:__", "`ecchi` `hentai` `hentaigif`\n\`hentaiirl` `neko` `pantsu`\n\`oppai` `yaoi` `yuri` `zr   `", true)
            .addField("__2D Fetish:__", "`ahegao` `bara` `bondage`\n\`futa` `monstergirl` `paizuri`\n\`sukebei` `tentacle` `trap`", true)
            .addField("__3D NSFW:__", "`4knsfw` `artsyporn` `ass` `boobs`\n\`nsfw` `nsfwgif` `pornhub` `pussy`", true)
            .addField("__3D Fetish:__", "`asian` `amateur` `bdsm`\n\`cosplay` `grool` `lingerie`", true)
            .addField("__NSFW Image Boards:__", "`danbooru` `gelbooru` `hypno` `konachan` `paheal` `rule34` `tbib` `yandere` `xbooru` `e621`");

        return new Promise(async(resolve, reject) => {

            const interactiveMessage = await message.channel.send({ embed: mainCommands });
            const collector = await interactiveMessage.createReactionCollector((reaction, user) => user.id === message.author.id);

            //Add the reactions
            let reactions = ['◀', '▶', '🍆', '❌'];
            for (let i = 0; i < reactions.length; i++) await interactiveMessage.react(reactions[i]);

            //Launch timeout countdown
            let timeout = setTimeout(function() {
                return collector.stop('timeout');
            }, 120000);

            //----------------------------------On collector collect------------------------------
            collector.on('collect', async(r) => {
                clearTimeout(timeout); //Reset timeout

                if (r.emoji.name === "◀") { //main commands page

                    await interactiveMessage.edit({ embed: mainCommands });

                } else if (r.emoji.name === "▶") { //more commands page

                    await interactiveMessage.edit({ embed: secretCommands });

                } else if (r.emoji.name === '🍆') { //nsfw commands wow

                    await interactiveMessage.edit({ embed: nsfwCommands });

                } else if (r.emoji.name === "❌") {

                    setTimeout(async function() {
                        await interactiveMessage.edit('This message will now be deleted in 5 seconds!')

                        setTimeout(async function() {
                            await interactiveMessage.edit('This message will now be deleted in 4 seconds!')

                            setTimeout(async function() {
                                await interactiveMessage.edit('This message will now be deleted in 3 seconds!')

                                setTimeout(async function() {
                                    await interactiveMessage.edit('This message will now be deleted in 2 seconds!')

                                    setTimeout(async function() {
                                        await interactiveMessage.edit('This message will now be deleted in 1 second!')

                                        setTimeout(async function() {
                                            await interactiveMessage.delete()
                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                    return null;
                }

                await r.remove(message.author.id); //Delete user reaction
                timeout = setTimeout(function() {
                    collector.stop('timeout');
                }, 120000);
            });
            //--------------------------On collector end-----------------------------------------------
            collector.on('end', async(collected, reason) => {
                interactiveMessage.clearReactions()
                return resolve(interactiveMessage.edit('⏏ | This message is no longer active! Use `~commands` to generate a new one!', { embed: mainCommands }));
            });
        });

    }
}