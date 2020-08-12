class Config {
	constructor(option) {
		option = option || {};
		this.prefix = option.prefix || 'bocchi, ';
		this.token = option.token || process.env.BOT_TOKEN;
		this.ownerId = option.ownerId || '221657168896720896';
	}
}

module.exports = Config;
