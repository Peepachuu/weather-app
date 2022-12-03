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
    const weatherCard = createWeatherCard();

    main.appendChild(weatherCard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSwwRkFBMEYsS0FBSyx3REFBd0QsYUFBYTtBQUNwSztBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLGVBQWU7QUFDekMsK0NBQStDLHFCQUFxQjtBQUNwRSx3Q0FBd0MsbUJBQW1CO0FBQzNELDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD00YjJlYjcyN2EyNzE3MTNhYTQ5YWMyZmNmZTEwMjIyOCZ1bml0cz1tZXRyaWNgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y2l0eX0gd2FzIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkge1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICAgIGNvbnN0IHRlbXBGZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZVwiKTtcblxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4udGVtcH3CsENgO1xuICAgIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3CsENgO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHtkYXRhLndpbmQuc3BlZWR9a20vaGA7XG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWFyY2hiYXJGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoIGlucHV0XCIpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoIGJ1dHRvblwiKTtcblxuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ2V0V2VhdGhlckRhdGEoc2VhcmNoYmFyLnZhbHVlKS50aGVuKGRhdGEgPT4gZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEpKTtcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldFNlYXJjaGJhckZ1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi93ZWF0aGVyLmpzXCI7XG5cbmZ1bmN0aW9uIENyZWF0ZURpc3BsYXkoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZU1haW5Db250ZW50KCk7XG4gICAgY29uc3Qgd2VhdGhlckNhcmQgPSBjcmVhdGVXZWF0aGVyQ2FyZCgpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyQ2FyZCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBtYWluKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlYXRoZXIgQXBwXCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGNyZWF0ZVNlYXJjaFNlY3Rpb24oKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlYXJjaFNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFNlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlYXJjaFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTtcblxuICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbiAgICBzZWFyY2hTZWN0aW9uLmFwcGVuZChzZWFyY2hiYXIsIHNlYXJjaEJ1dHRvbik7XG4gICAgcmV0dXJuIHNlYXJjaFNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkKCkge1xuICAgIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgd2VhdGhlckNhcmQuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJcIik7XG4gICAgXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZChcImNpdHlcIik7XG5cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdGVtcEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ3aW5kXCIpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgICB0ZW1wRmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJmZWVsc0xpa2VcIik7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcblxuICAgIHdlYXRoZXJDYXJkLmFwcGVuZChjaXR5TmFtZSwgdGVtcCwgdGVtcEZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCk7XG4gICAgcmV0dXJuIHdlYXRoZXJDYXJkO1xufVxuXG5DcmVhdGVEaXNwbGF5KCk7XG5zZXRTZWFyY2hiYXJGdW5jdGlvbmFsaXR5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9