export async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4b2eb727a271713aa49ac2fcfe102228&units=metric`, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.log(err);
    }
}

export function displayWeatherData(data) {
    if (data.cod == "404") {
        console.log("Location not found");
        return ;
    }
    console.log(data);
}