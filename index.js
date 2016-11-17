const Bot = require('slackbots');
const config = require('./.config.json');
const triggers = require('./triggers.json');
const fetch = require('isomorphic-fetch');
const bot = new Bot(config);

const params = {
	icon_url: 'http://i.imgur.com/xQNBz0U.png'
};

const check = (message) =>
	message.subtype !== 'bot_message'
		&& message.type === 'message';

const getTrigger = (message) =>
	triggers.filter(t => new RegExp(t.w, 'gi').test(message.text))[0];

const getAnswer = (answers) => {
	const index = Math.floor(Math.random() * (answers.length - 0));
	return answers[index];
};

const sendRates = (message) => {
	fetch('http://api.fixer.io/latest')
		.then(res => res.json())
		.then(res => {
			const rub = res.rates.RUB.toFixed(2);
			const usd = (rub / res.rates.USD).toFixed(2);
			const result = `:heavy_dollar_sign:   USD: ${usd},  EUR: ${rub}`;
			bot.postMessage(message.channel, result, params);
		})
};

bot.on('message', (message) => {
	if (check(message)) {
	    if (message.text === '$$') return sendRates(message);
		const result = getAnswer(getTrigger(message)).a;
		if (result) bot.postMessage(message.channel, result, params);
	}
});
