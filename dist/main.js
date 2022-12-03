/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSearchbarFunctionality": () => (/* binding */ setSearchbarFunctionality)
/* harmony export */ });
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
    
    const weatherCard = document.querySelector(".weather");
    const cityName = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const windSpeed = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    const tempFeelsLike = document.querySelector(".feelsLike");

    temp.textContent = `${data.main.temp}°C`;
    tempFeelsLike.textContent = `Feels like: ${data.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind: ${data.wind.speed} km/h`;
    cityName.textContent = data.name;
    if (weatherCard.classList == "weather") {
        weatherCard.classList.toggle("visible");
    }
}

function setSearchbarFunctionality() {
    const searchbar = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");

    searchButton.addEventListener('click', () => {
        getWeatherData(searchbar.value).then(data => displayWeatherData(data));
    });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");


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
(0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.setSearchbarFunctionality)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSwwRkFBMEYsS0FBSyx3REFBd0QsYUFBYTtBQUNwSztBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsZUFBZTtBQUN6QywrQ0FBK0MscUJBQXFCO0FBQ3BFLHdDQUF3QyxtQkFBbUI7QUFDM0QscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUF5QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9NGIyZWI3MjdhMjcxNzEzYWE0OWFjMmZjZmUxMDIyMjgmdW5pdHM9bWV0cmljYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NpdHl9IHdhcyBub3QgZm91bmQuYCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIik7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgICBjb25zdCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VcIik7XG5cbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLnRlbXB9wrBDYDtcbiAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9wrBDYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7ZGF0YS53aW5kLnNwZWVkfSBrbS9oYDtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICBpZiAod2VhdGhlckNhcmQuY2xhc3NMaXN0ID09IFwid2VhdGhlclwiKSB7XG4gICAgICAgIHdlYXRoZXJDYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlYXJjaGJhckZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2ggaW5wdXRcIik7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2ggYnV0dG9uXCIpO1xuXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBnZXRXZWF0aGVyRGF0YShzZWFyY2hiYXIudmFsdWUpLnRoZW4oZGF0YSA9PiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkpO1xuICAgIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0U2VhcmNoYmFyRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL3dlYXRoZXIuanNcIjtcblxuZnVuY3Rpb24gQ3JlYXRlRGlzcGxheSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbkNvbnRlbnQoKTtcbiAgICBjb25zdCB3ZWF0aGVyU2VjdGlvbiA9IGNyZWF0ZVdlYXRoZXJTZWN0aW9uKCk7XG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyU2VjdGlvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBtYWluKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlYXRoZXIgQXBwXCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGNyZWF0ZVNlYXJjaFNlY3Rpb24oKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlYXJjaFNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFNlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlYXJjaFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTtcblxuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbiAgICBzZWFyY2hTZWN0aW9uLmFwcGVuZChzZWFyY2hiYXIsIHNlYXJjaEJ1dHRvbik7XG4gICAgcmV0dXJuIHNlYXJjaFNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJTZWN0aW9uKCkge1xuICAgIGNvbnN0IHdlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgd2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJTZWN0aW9uXCIpO1xuICAgIHdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVdlYXRoZXJDYXJkKCkpO1xuICAgIHJldHVybiB3ZWF0aGVyU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNhcmQoKSB7XG4gICAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICB3ZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlclwiKTtcbiAgICBcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKFwiY2l0eVwiKTtcblxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmRcIik7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xuICAgIHRlbXBGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImZlZWxzTGlrZVwiKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wXCIpO1xuXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kKGNpdHlOYW1lLCB0ZW1wLCB0ZW1wRmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZFNwZWVkKTtcbiAgICByZXR1cm4gd2VhdGhlckNhcmQ7XG59XG5cbkNyZWF0ZURpc3BsYXkoKTtcbnNldFNlYXJjaGJhckZ1bmN0aW9uYWxpdHkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=