const { Colors } = require('discord.js');

const config = {
	ownerID: [process.env.ownerId],
	token: process.env.token,
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://genius.com/developers
		genius: 'genuisAPI-KEY',
		// https://api.amethyste.moe/
		amethyste: 'amethysteAPI-Key',
		// https://api.egglord.dev/settings
		masterToken: '',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/8g6zUQu',
		// Your support's server ID
		GuildID: '829649440167034901',
		// This for using the suggestion command on your server
		ModRole: '',
		// What channel to post the suggestions
		SuggestionChannel: '1189266383276605471',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	Staff: {
		ContributorRole: "814645275544387705",
		SupportRole: "740674583023321200",
		DeveloperRole: "740682780467396705",
	},
	LavalinkNodes: [
		{ identifier: "Main", host: 'localhost', port: 5000, password: 'youshallnotpass', secure: false },
	],
	// URL to mongodb
	MongoDBURl: process.env.mongodb,
	// embed colour
	embedColor: Colors.Default,
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
