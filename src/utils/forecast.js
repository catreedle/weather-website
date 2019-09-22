const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6b6ca56658298a2c0f26bdab6ada7a51/'+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) +'?units=si&lang=id'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback (undefined, body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast