import { displayWeatherData, getWeatherData } from "./weather.js";

getWeatherData("London").then(data => {
    displayWeatherData(data);
});

getWeatherData("BrozerLAnd").then(data => {
    displayWeatherData(data);
});