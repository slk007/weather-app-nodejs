const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
	address:{
		demand: true,
		alias: 'a',
		describe: 'Address to fetch weather for',
		string: true
	}
})
.help()
.alias('help','h')
.argv;								// console.log(argv); 

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage)
		console.log(errorMessage);
	else
	{
		console.log('Address: '+results.f_address);
		weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults) => {
			if(errorMessage)
				console.log(errorMessage);
			else
				console.log('It is currently '+weatherResults.current_temp+
					' but it feels like '+weatherResults.apparent_temp);
		});
	}
});

