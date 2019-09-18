const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ff38f15c703224ae2aeeefc58b8b4336/' + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. ther is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })

}

module.exports = forecast