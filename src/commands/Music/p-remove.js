// Dependecies
const { PlaylistSchema } = require('../../database/models'),
	Command = require('../../structures/Command.js');

module.exports = class PRemove extends Command {
	constructor(bot) {
		super(bot, {
			name: 'p-remove',
			dirname: __dirname,
			aliases: ['playlist-remove'],
			botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'remove a song from the playlist',
			usage: 'p-remove <playlist name> <position> [position]',
			cooldown: 3000,
			examples: ['p-remove Songs 3', 'p-remove Songs 3 5'],
		});
	}

	async run(bot, message, args, settings) {
		// make sure something was entered
		if (!args[0]) return message.error(settings.Language, 'INCORRECT_FORMAT', settings.prefix.concat(this.help.usage)).then(m => m.delete({ timeout: 5000 }));

		PlaylistSchema.findOne({
			name: args[0],
			creator: message.author.id,
		}, async (err, p) => {
			// if an error occured
			if (err) {
				if (message.deletable) message.delete();
				bot.logger.error(`Command: '${this.help.name}' has error: ${err.message}.`);
				return message.error(settings.Language, 'ERROR_MESSAGE', err.message).then(m => m.delete({ timeout: 5000 }));
			}

			// playlist found
			if (p) {
				try {
					if (!isNaN(args[1]) && !isNaN(args[2])) {
						p.songs.splice(args[1] - 1, parseInt(args[2] - args[1] + 1));
					} else if (!isNaN(args[1])) {
						p.songs.splice(args[1] - 1, 1);
					} else {
						return message.channel.send('Not an option');
					}
					message.channel.send('Successfully updated playlist.');
					await p.save();
				} catch (err) {
					if (message.deletable) message.delete();
					bot.logger.error(`Command: '${this.help.name}' has error: ${err.message}.`);
					message.error(settings.Language, 'ERROR_MESSAGE', err.message).then(m => m.delete({ timeout: 5000 }));
				}
			} else {
				message.channel.send('No playlist found.');
			}
		});
	}
};
