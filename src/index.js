import { setSearchbarFunctionality } from "./weather.js";

function CreateDisplay() {
    const header = createHeader();
    const main = createMainContent();
    const weatherSection = createWeatherSection();
    
    main.appendChild(weatherSection);
    document.body.append(header, main);
}

function createHeader() {
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "Weather App";

    header.appendChild(title);
    return header;
}

function createMainContent() {
    const main = document.createElement("section");
    main.classList.add("main");

    const searchSection = createSearchSection();
    main.appendChild(searchSection);

    return main;
}

function createSearchSection() {
    const searchSection = document.createElement("section");
    searchSection.classList.add("search");

    const searchbar = document.createElement("input");
    const searchButton = document.createElement("button");

    searchButton.textContent = "Search";
    searchSection.append(searchbar, searchButton);
    return searchSection;
}

function createWeatherSection() {
    const weatherSection = document.createElement("section");
    weatherSection.classList.add("weatherSection");
    weatherSection.appendChild(createWeatherCard());
    return weatherSection;
}

function createWeatherCard() {
    const weatherCard = document.createElement("section");
    weatherCard.classList.add("weather");
    
    const cityName = document.createElement("h2");
    cityName.classList.add("city");

    const temp = document.createElement("h3");
    const windSpeed = document.createElement("p");
    const humidity = document.createElement("p");
    const tempFeelsLike = document.createElement("p");

    windSpeed.classList.add("wind");
    humidity.classList.add("humidity");
    tempFeelsLike.classList.add("feelsLike");
    temp.classList.add("temp");

    weatherCard.append(cityName, temp, tempFeelsLike, humidity, windSpeed);
    return weatherCard;
}

CreateDisplay();
setSearchbarFunctionality();