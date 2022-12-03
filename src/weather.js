async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4b2eb727a271713aa49ac2fcfe102228&units=metric`, {mode: 'cors'});
        if (!response.ok)
            throw new Error(`${city} was not found.`);
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        alert(err);
        return null;
    }
}

function displayWeatherData(data) {
    if (data == null) {
        return ;
    }
    
    const cityName = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const windSpeed = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    const tempFeelsLike = document.querySelector(".feelsLike");

    temp.textContent = `${data.main.temp}°C`;
    tempFeelsLike.textContent = `Feels like: ${data.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind speed: ${data.wind.speed}km/h`;
    cityName.textContent = data.name;
}

export function setSearchbarFunctionality() {
    const searchbar = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");

    searchButton.addEventListener('click', () => {
        getWeatherData(searchbar.value).then(data => displayWeatherData(data));
    });
}