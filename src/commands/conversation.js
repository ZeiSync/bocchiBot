const axios = require('axios');

module.exports = {
	help: 'talking with bocchi',
	fn: (message) => {
		const endpoint = 'https://wsapi.simsimi.com/190410/talk';
		const config = {
			headers: {
				'x-api-key': process.env.SIM_TOKEN,
				'Content-Type':'application/json',
			},
		};

		const mess = message.content.split(', ')[1];
		axios.post(endpoint, { utext: mess, lang: 'vn' }, config).then(({ data }) => {
			message.channel.send(data.atext);
		}).catch((error) => {
			console.error(error);
		});

		// message.channel.send('Pinging...').then((newMessage) => {
		// 	newMessage.edit(Date.now() - newMessage.createdTimestamp + 'ms');
		// });
	},
};
