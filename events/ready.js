const Discord = require('discord.js');

module.exports = (bot => {
// ready
    console.log(`Launched ${bot.user.username}`);
    bot.user.setActivity(`de tititititi kk [${bot.config.prefix}help]`, {type: "PLAYING"});
    console.log('Yo estoy prontitito kk')
});