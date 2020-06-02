console.log('script started...')

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
        if(data.error){
            console.log(data.error)
            //const result = document.getElementById('result')
            main_div.innerHTML = '';
            var error = document.createElement('p');
            error.innerHTML = "Error : "+data.error;
            main_div.appendChild(error)
        }else{
            console.log(data)
            //const result = document.getElementById('result')
            main_div.innerHTML = '';
            var image_div = document.createElement('div');
            var weather_icon = document.createElement('img');
            weather_icon.src = data.weather_icon;
            image_div.appendChild(weather_icon)
            main_div.appendChild(image_div)

            var weather_div = document.createElement('div');
            var address = document.createElement('p');
            address.innerHTML = "Location : "+data.address;
            weather_div.appendChild(address)

            var forecast = document.createElement('p');
            forecast.innerHTML = "Forecast : "+data.forecast;
            weather_div.appendChild(forecast)

            var temperature = document.createElement('p');
            temperature.innerHTML = "Temperature : "+data.temperature;
            weather_div.appendChild(temperature)

            var wind_speed = document.createElement('p');
            wind_speed.innerHTML = "Wind Speed : "+data.wind_speed;
            weather_div.appendChild(wind_speed)

            var wind_dir = document.createElement('p');
            wind_dir.innerHTML = "Wind Direction : "+data.wind_dir;
            weather_div.appendChild(wind_dir)

            var humidity = document.createElement('p');
            humidity.innerHTML = "Humidity : "+data.humidity;
            weather_div.appendChild(humidity)
            
            main_div.appendChild(weather_div)
        }
    })
})
