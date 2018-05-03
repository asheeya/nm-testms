var request = require('request');

//http get request to get weather based on city name


this.getWeatherData = function(url, callback){

	request(url,function(error,response,body){
		if(error || response.statusCode !== 200){
			return callback(error || {statusCode: response.statusCode});
		}
	callback(null, JSON.parse(body));
});
}