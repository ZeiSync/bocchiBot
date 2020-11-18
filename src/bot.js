require('dotenv').config();
const { Client } = require('discord.js');
const Config = require('./config');
const fs = require('fs');
// const ping = require('./src/commands/ping.js');

class Bocchi extends Client {
	constructor(option) {
		super(option);
		this.config = new Config(option);
		this.run();
		this.commands = this.loadCommand();
		this.on('message', (mess) => {
			if (mess.author.bot) return;
			if (!mess.content.startsWith(this.config.prefix)) return;
			const cmd = mess.content.split(', ')[1];
			// this.load(cmd);
			if(this.commands.get(cmd)) {
				this.commands.get(cmd).fn(mess);
			}
			this.commands.get('conversation').fn(mess);
		});
	}
}

Bocchi.prototype.run = function() {
	try {
		this.login(this.config.token);
		this.once('ready', () => {
			console.log('Bocchi iz ready');
		});
	} catch (error) {
		console.log('Bocchi iz still sleepy');
		console.log(error);
	}
};

Bocchi.prototype.loadCommand = function() {
	const commandsList = fs.readdirSync('./src/commands/');
	const commands = new Map();
	for (const cmd of commandsList) {
		if (cmd.match(/\.js$/)) {
			delete require.cache[require.resolve(`./commands/${cmd}`)];
			const execution = require(`./commands/${cmd}`);
			const key = cmd.slice(0, -3);
			commands.set(key, execution);
		}
	}
	console.log(commands);
	return commands;
};

Bocchi.prototype.load = function(command) {
	if (command) {
		if (this.commandsList.indexOf(`${command}.js`) >= 0) {
			delete require.cache[require.resolve(`./commands/${command}`)];
			this.commands[command] = require(`./commands/${command}`);
		}
	} else {
		for (let i = 0; i < this.commandsList.length; i++) {
			const item = this.commandsList[i];
			if (item.match(/\.js$/)) {
				delete require.cache[require.resolve(`./src/commands/${item}`)];
				this.commands[item.slice(0, -3)] = require(`./src/commands/${item}`);
			}
		}
	}
	console.log(this.commands);
};

module.exports = Bocchi;
