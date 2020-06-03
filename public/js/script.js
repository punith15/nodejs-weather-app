console.log('script started...')

window.onload = function() {
    
    const weatherForm = document.querySelector('form')
    const main_div = document.getElementById('result')
    main_div.style.display = 'none';
    let address = "bangalore"
    document.getElementById('loading').style.display = 'block';
    loadData()
    weatherForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        address = weatherForm.querySelector('input').value;
        main_div.style.display = 'flex';
        main_div.innerHTML = '';
        document.getElementById('loading').style.display = 'block';
        loadData()
    })

    function loadData(){
    
            fetch('/weather?address='+address)
            .then(res=>res.json())
            .then(data=>{
                main_div.style.display = 'flex';
                main_div.innerHTML = '';
                address.value = "";
                document.getElementById('loading').style.display = 'none';
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
                    weather_div.setAttribute('class','weather_div');
                    const images = ['https://img.pngio.com/home-flat-free-icon-of-snipicons-flat-flat-png-512_512.png',
                    'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png',
                    'https://cdn1.iconfinder.com/data/icons/weather-forecast-31/650/temperature-thermometer-hot-512.png',
                    '',
                    'https://cdn2.iconfinder.com/data/icons/weather-blue-filled-line/32/weather_blow_wind_air_windy_direction_nature-512.png',
                    'https://cdn.iconscout.com/icon/free/png-512/humidity-forecast-hydration-precipitation-temperature-weather-38924.png',
                    'https://cdn.iconscout.com/icon/free/png-512/flag-1107-781160.png'
                    ]
                    
                    const titles = ['Location','Forecast','Temperature','','Wind Speed','Humidity','Wind Direction']

                    var result = Object.entries(data); 
                    console.log(result)

                    for(let i=0;i<result.length;i++){
                        if(i === 3){
                            continue
                        }
                        var add_div = document.createElement('div');
                        var add_img = document.createElement('img')
                        add_img.src = images[i]
                        var loc_title = document.createElement('p');
                        loc_title.innerText = titles[i];
                        var location = document.createElement('h3');
                        location.innerText = result[i][1];
                        add_div.appendChild(add_img)
                        add_div.appendChild(loc_title)
                        add_div.appendChild(location)
                        weather_div.appendChild(add_div)
                    }
                    
                    main_div.appendChild(weather_div)
                }
            })
    }
}
