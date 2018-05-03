var express = require('express');
var router = express.Router();
var requestData = require('../utils/requestdata.js');


// http get request to get weather based on city name
/*function getWeatherData(url, callback){

	request(url,function(error,response,body){
		if(error || response.statusCode !== 200){
			return callback(error || {statusCode: response.statusCode});
		}
	callback(null, JSON.parse(body));
});
}
*/

// router for get weather data
router.get('/', function (req, res){
	var cityName = req.query.city;
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=cfa93e12f22e6c894134bee0105d108b'
	console.log(cityName);
	requestData.getWeatherData(url,function(err, body){
		if(err){
			console.log(err);
			return res.json({
				error: err
			});
		}
		else {
			console.log(body);
			 return res.json({
  				weather: body
  			});
		}
	});
	
 
});

module.exports = router