const request = require('request');

const geocode = (location,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=f446d89ba96bec357d51eb8e7d2522d5&query=${location}`

    request(url,(error,response)=>{
        if(error){
            return callback({
                error : error
            })
        }
        callback(JSON.parse(response.body))
    })
}

module.exports = geocode