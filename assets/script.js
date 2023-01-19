//global variables
let searchForm = document.querySelector("#search")
const userInput = document.querySelector("#city-name")
let citySearch = document.querySelector("#city-search")

const currentWeatherEl = document.querySelector("#current-weather")
const currentCity = document.querySelector('.current-city')

let temp = document.querySelector(".temp")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")
let iconEl = document.querySelector('.icon')

//future forcast variables
const forecast = document.querySelector('.date-future')


//API Key Variable
//var APIKey = '3124a0b815fd42bc0bf779711fb207c0'
var APIKey = "f64f9e2d4fda40afd330c539b14a2d45"

// // GIVEN a weather dashboard with form inputs
// // step 1:
// // WHEN I search for a city
// // THEN I am presented with current and future conditions for that city and that city is added to the search history

const searchCityForm = (event) => {
    event.preventDefault();
    var cityName = userInput.value.trim();
    console.log(cityName);
    if (cityName) {
        userInput.value = "";
        var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=1&appid=${APIKey}`;
        fetch(apiURL).then(data => data.json())
        
        .then(data => {
            console.log(data)

            let { lat, lon } = data.coord;
        

            let url = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;

            fetch(url).then(response => {
                return response.json();
            })

        
                .then(data => { 
                    console.log(data)

                    let forecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
                    fetch(forecast).then(response => {
                        return response.json();
                    })
                        .then(data => {
                            d = data;
                            displayCurrentWeather(data);
                            displayFutureWeather(data);
                         
                        })
                    
                });

        });
        
    } else {
        alert("Please enter a valid city Name")
    }
};

    // // step 2:
// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed


let displayCurrentWeather = (data) => {
    const { temp, humidity } = data.list[0].main;
    // set DOM elements from API
    currentCity.textContent = `${data.city.name} (${new Date(data.list[0].dt*1000).toDateString()})`;
    currentCity.innerHTML += `<img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png">`; 
    temp.textContent = temp;
    humidity.textContent = humidity;
    wind.textContent = data.list[0].wind.speed;
}
//step 3:
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//still working on future wather to appear
let displayFutureWeather = (data) => {

    for (let i = 7; i < data.list.length; i=i+7) {
        const {temp, humidity} = data.list[i].main;

        forecast.textContent = `(${new Date(data.list[i].dt*1000).toDateString()})`;
       document.getElementById('temp').textContent = temp;
       document.getElementById('humidity').textContent = humidity;
       document.getElementById('wind').textContent = data.list[i].wind.speed;
    }

};

//save to localStorage
let saveCity = () => {
    localStorage.setItem('city-name', JSON.stringify(cities));
};

document.getElementById('search-form').onclick = searchCityForm;

