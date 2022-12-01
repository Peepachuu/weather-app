import { displayWeatherData, getWeatherData } from "./weather.js";

getWeatherData("London").then(data => {
    displayWeatherData(data);
});

getWeatherData("BrozerLAnd").then(data => {
    displayWeatherData(data);
});

function CreateDisplay() {
    const header = createHeader();
    const main = createMainContent();

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

CreateDisplay();