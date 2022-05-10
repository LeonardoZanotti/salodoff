const Discord = require('discord.js');
const config = require('../json/config.json');

module.exports.run = async (bot, message, args) => {
  try {
    let embed = new Discord.RichEmbed()
      .setTitle('PING?')
      .setColor('ff0000')
      .addField(`O ping da API é de`, `${Math.round(bot.ping)} ms`)
      .setFooter('Comando de ping', bot.user.displayAvatarURL);

    const ms = await message.channel.send(embed);
    const clientms = ms.createdTimestamp - message.createdTimestamp; // tempo em que o ms foi criado - o que a message foi criada

    let embed1 = new Discord.RichEmbed()
      .setTitle('PONG!')
      .setColor('ff0000')
      .addField(`O ping da API é de `, `${Math.round(bot.ping)} ms`)
      .addField(`O ping do bot é de: `, `${clientms} ms`)
      .setFooter('Comando de ping', bot.user.displayAvatarURL);

    ms.edit(embed1);
  } catch (err) {
    console.error(err);
    return message.channel.send('Ocorreu um erro! Contate o administrador (Zanotto)!');
  }

  /*
	const moment = require('moment');
	require('moment-duration-format');
	
	...
	
	let startTime = Date.now();
	m.channel.send('Pong!');
	.then(msg => {
		let endTime = Date.now();
		msg.edit('Pong! (${endTime-startTime} ms))
	})
    */

  /*
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    */
};

module.exports.help = {
  name: 'ping',
  description: `\`${config.prefix}ping\` mostra a latência entre o envio/respota de mensagens (do bot) e a latência até o websocket (API)`,
};
