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
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.log(err);
    }
}

function displayWeatherData(data) {
    if (data.cod == "404") {
        console.log("Location not found");
        return ;
    }
    console.log(data);
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
(0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.setSearchbarFunctionality)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSwwRkFBMEYsS0FBSyx3REFBd0QsYUFBYTtBQUNwSztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD00YjJlYjcyN2EyNzE3MTNhYTQ5YWMyZmNmZTEwMjIyOCZ1bml0cz1tZXRyaWNgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkge1xuICAgIGlmIChkYXRhLmNvZCA9PSBcIjQwNFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gbm90IGZvdW5kXCIpO1xuICAgICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlYXJjaGJhckZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2ggaW5wdXRcIik7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2ggYnV0dG9uXCIpO1xuXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBnZXRXZWF0aGVyRGF0YShzZWFyY2hiYXIudmFsdWUpLnRoZW4oZGF0YSA9PiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkpO1xuICAgIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0U2VhcmNoYmFyRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL3dlYXRoZXIuanNcIjtcblxuZnVuY3Rpb24gQ3JlYXRlRGlzcGxheSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbkNvbnRlbnQoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgbWFpbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWF0aGVyIEFwcFwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgIGNvbnN0IHNlYXJjaFNlY3Rpb24gPSBjcmVhdGVTZWFyY2hTZWN0aW9uKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWFyY2hTZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hTZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlYXJjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWFyY2hTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG5cbiAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG4gICAgc2VhcmNoU2VjdGlvbi5hcHBlbmQoc2VhcmNoYmFyLCBzZWFyY2hCdXR0b24pO1xuICAgIHJldHVybiBzZWFyY2hTZWN0aW9uO1xufVxuXG5DcmVhdGVEaXNwbGF5KCk7XG5zZXRTZWFyY2hiYXJGdW5jdGlvbmFsaXR5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9