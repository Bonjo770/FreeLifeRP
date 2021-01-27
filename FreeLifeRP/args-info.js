module.exports = {
	name: 'Information',
	description: 'Server Information',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Test ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};