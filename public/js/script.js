console.log('script started...')

window.onload = function() {
    const weatherForm = document.querySelector('form')
    const main_div = document.getElementById('result')
    main_div.style.display = 'none';

    weatherForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const address = weatherForm.querySelector('input').value;

        console.log(address);

        fetch('/weather?address='+address)
        .then(res=>res.json())
        .then(data=>{
            main_div.style.display = 'flex';
            main_div.innerHTML = '';
            address.value = "";
            if(data.error){
                console.log(data.error)
                //const result = document.getElementById('result')
                var error = document.createElement('p');
                error.innerHTML = "Error : "+data.error;
                main_div.appendChild(error)
            }else{
                console.log(data)
                //const result = document.getElementById('result')
                
                var image_div = document.createElement('div');
                image_div.setAttribute('class','image_div')
                var weather_icon = document.createElement('img');
                weather_icon.src = data.weather_icon;
                image_div.appendChild(weather_icon)
                main_div.appendChild(image_div)


                var weather_div = document.createElement('div');
                weather_div.setAttribute('class','weather_div')

                var add_div = document.createElement('div');
                var add_img = document.createElement('img')
                add_img.src = 'https://img.pngio.com/home-flat-free-icon-of-snipicons-flat-flat-png-512_512.png'
                var location = document.createElement('p');
                location.innerHTML = "Location : "+data.address;
                add_div.appendChild(add_img)
                add_div.appendChild(location)
                weather_div.appendChild(add_div)

                var fore_div = document.createElement('div');
                var fore_img = document.createElement('img')
                fore_img.src = 'https://i.dlpng.com/static/png/3957956_thumb.png'
                var forecast = document.createElement('p');
                forecast.innerHTML = "Forecast : "+data.forecast;
                fore_div.appendChild(fore_img)
                fore_div.appendChild(forecast)
                weather_div.appendChild(fore_div)

                //https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png
                var temp_div = document.createElement('div');
                var temp_img = document.createElement('img')
                temp_img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-31/650/temperature-thermometer-hot-512.png'
                var temperature = document.createElement('p');
                temperature.innerHTML = "Temperature : "+data.temperature;
                temp_div.appendChild(temp_img)
                temp_div.appendChild(temperature)
                weather_div.appendChild(temp_div)

                var ws_div = document.createElement('div');
                var ws_img = document.createElement('img')
                ws_img.src = 'https://cdn2.iconfinder.com/data/icons/weather-blue-filled-line/32/weather_blow_wind_air_windy_direction_nature-512.png'
                var wind_speed = document.createElement('p');
                wind_speed.innerHTML = "Wind Speed : "+data.wind_speed;
                ws_div.appendChild(ws_img)
                ws_div.appendChild(wind_speed)
                weather_div.appendChild(ws_div)

                var wd_div = document.createElement('div');
                var wd_img = document.createElement('img')
                wd_img.src = 'https://cdn.iconscout.com/icon/free/png-512/flag-1107-781160.png'
                var wind_dir = document.createElement('p');
                wind_dir.innerHTML = "Wind Direction : "+data.wind_dir;
                wd_div.appendChild(wd_img)
                wd_div.appendChild(wind_dir)
                weather_div.appendChild(wd_div)

                var hum_div = document.createElement('div');
                var hum_img = document.createElement('img')
                hum_img.src = 'https://cdn.iconscout.com/icon/free/png-512/humidity-forecast-hydration-precipitation-temperature-weather-38924.png'
                var humidity = document.createElement('p');
                humidity.innerHTML = "Humidity : "+data.humidity;
                hum_div.appendChild(hum_img)
                hum_div.appendChild(humidity)
                weather_div.appendChild(hum_div)
                
                main_div.appendChild(weather_div)
            }
        })
    })
}
