// empty city arrays
let cities = [];

// global arrays
const searchBtn = document.querySelector('#search-btn');
const userinput = document.querySelector('#city-search');
const present = document.querySelector('#current-weather');
// const future = document.querySelector('#
// const past  = document.querySelector('#

const apiKey = 'ea13ae0f55f1f14f2b43391b0a36bafa';

let searchArr = [];

function search() {

    // const currentCity =`https://api.openweathermap.org/geo/1.0/direct?q=${userInput.value}&limit=5&appid`; 

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citysearch + "&appid=" + apiKey + "&units=imperial";

    fetch(apiUrl)
           .then(response => response.json())
            .then(data => {
                getWeather(data[0].lat, data[0].lon, data[0].name)
            });

            const form = function(event) {
                event.preventDefault();
              
         