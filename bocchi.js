// /** @format */

// require('dotenv').config();
// const { client, config } = require('./src/bot');
// const bot = require('./src/bot');

// client.login(process.env.BOT_TOKEN).then(
// 	client.once('ready', () => {
// 		console.log('Bocchi is ready desu!');
// 	}),
// );

// client.on('message', (message) => {
// 	if (message.author.bot) return;
// 	if (message.content.startsWith('Bocchi')) {
// 		message.channel.send({
// 			embed: { color: 3447003, description: 'Bruh' },
// 		});
// 	}
// 	if (!message.content.startsWith(config.prefix)) return;
// 	// ping
// 	if (message.content.startsWith(config.prefix + 'ping')) {
// 		message.channel.send('Pinging...').then(function (newMessage) {
// 			newMessage.edit(Date.now() - newMessage.createdTimestamp + 'ms');
// 		});
// 	}
// 	// code end

// 	// flip a coin
// 	if (message.content.startsWith(config.prefix + 'flip')) {
// 		// message.channel.send('coin Fly~!')
// 		const random = Math.floor(Math.random() * (1 - 0 + 1) + 0);
// 		if (random === 1) {
// 			message.channel.send('Head');
// 		} else {
// 			message.channel.send('Tail');
// 		}
// 	}
// 	// code end;

// 	// eval
// 	const clean = (text) => {
// 		if (typeof text === 'string')
// 			return text
// 				.replace(/`/g, '`' + String.fromCharCode(8203))
// 				.replace(/@/g, '@' + String.fromCharCode(8203));
// 		else return text;
// 	};
// 	const args = message.content.split(' ').slice(1);

// 	if (message.content.startsWith(config.prefix + 'eval')) {
// 		if (message.author.id !== config.ownerID) return;
// 		try {
// 			const code = message.content.substring(
// 				config.prefix.length + 'eval'.length + 1,
// 			);
// 			let evaled = eval(code);

// 			if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
// 			// message.channel.send('input');
// 			message.channel.send('Input:\n' + code, { code: 'js' });
// 			// message.channel.send('output');
// 			message.channel.send('Output:\n' + clean(evaled), { code: 'xl' });
// 		} catch (err) {
// 			message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
// 		}
// 	}
// 	// code end
// });

const Bocchi = require('./src/bot');
new Bocchi();