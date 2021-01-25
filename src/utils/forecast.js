const request = require('request')

const forecast =  (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b13c46a4c986da85bac7671db95fe9a4&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, {body})=> {
            if(error) {
                callback('Unable to connect to weather service!', undefined)
            } else if(body.error) {
                callback('Unable to find the location!', undefined)
            } else {
                callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. " + "It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%. " + "The wind speed is " + body.current.wind_speed+ ".")
            }
        })

}
module.exports = forecast
