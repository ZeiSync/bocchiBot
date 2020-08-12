require('dotenv').config();
const { Client } = require('discord.js');
const Config = require('./config');

class Bocchi extends Client {
	constructor(option) {
		super(option);
		this.config = new Config(option);
		this.run();
	}
}

Bocchi.prototype.run = async function() {
	try {
		await this.login(this.config.token);
		this.once('ready', () => {
			console.log('Bocchi iz ready');
		});
	} catch (error) {
		console.log('Bocchi iz still sleepy');
		console.log(error);
	}
};


module.exports = Bocchi;
