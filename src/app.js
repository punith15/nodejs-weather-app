const express = require('express')
const path = require('path')
const app = express();
const hbs = require('hbs')
const port = process.env.PORT || 5000;
const geocode = require('./utils/geocode')

const publicPath = path.resolve(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')
app.use(express.static(publicPath))

app.set('views', viewsPath);
app.set('view engine', '.hbs');
app.get('/',(req,res)=>{
    res.render('index',{
        title:"Weather",
        author:"Weather Forecast"
    });
})

hbs.registerPartials(partialsPath)

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About",
        author:"Get details about weather"
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        author:"Get help regarding current weather in your local area"
    });
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
            error : 'Address should be provided...'
        })
    }else{
        geocode(req.query.address,(data)=>{
            if(!data.error){
                //console.log(data.current)
                const weather = data.current
                res.send({
                    address : req.query.address,
                    forecast : weather.weather_descriptions,
                    temperature : weather.temperature,
                    weather_icon : weather.weather_icons,
                    wind_speed : weather.wind_speed,
                    humidity : weather.humidity,
                    wind_dir : weather.wind_dir
                })
            }else{
                console.log(data.error)
                res.send({
                    error : 'Unable to find location, Try another search'
                })
            }
            
        })
    }
    
})

app.get('/contact',(req,res)=>{
    res.send({
        phone : '9874563210',
        mail : 'abcde@gmail.com'
    })
})

app.get('*',(req,res)=>{
    res.send('404 Page not found')
})

app.listen(port);