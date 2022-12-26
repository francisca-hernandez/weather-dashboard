// //global Arrays
// const apiKey = 'e045f64f4cd0813aba91c0138b34adad';
// const searchBtn = document.querySelector('#search-btn');
// const searchInput = document.querySelector('#city');
// const current = document.querySelector('#current');
// const future = document.querySelector('#future');
// let weatherArray = [];


// empty city arrays
let cities = [];
// global arrays
let cityFormEl = document.querySelector('#city-search');
let citySearchInputEl = document.querySelector('#city-searched');
let cityInputEl = document.querySelector('#city');
let forecastTitle = document.querySelector('#forecast');
let forecastContainerEl = document.querySelector('#fiveday');
let pastSearchButtonEl = document.querySelector('#past-search');
let weatherContainerEl = document.querySelector('#current-weather');
let uviEl = document.querySelector('#uv-index')

const API_KEY = 'e045f64f4cd0813aba91c0138b34adad';
let fiveDay = [];

const showNextFive = function(city) {

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=imperial";
