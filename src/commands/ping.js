module.exports = {
	help: 'send a Ping time',
	fn: (message) => {
		message.channel.send('Pinging...').then((newMessage) => {
			newMessage.edit(Date.now() - newMessage.createdTimestamp + 'ms');
		});
	},
};
