const request = require('request');

let getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/a76156d2a708b3cde7be99d441f955c8/${lat},${lng}`,
		json: true
	},(error, response, body) => {
		if(!error && response.statusCode === 200)
			callback(undefined,{
				current_temp: body.currently.temperature,
				apparent_temp: body.currently.apparentTemperature
			});
		else 
			callback('Unable to fetch weather');
	});
};

module.exports.getWeather = getWeather;