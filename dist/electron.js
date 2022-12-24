/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./app/main/electron.js ***!
  \******************************/
var _require = __webpack_require__(/*! path */ "path"),
  resolve = _require.resolve;
var _require2 = __webpack_require__(/*! electron */ "electron"),
  BrowserWindow = _require2.BrowserWindow,
  app = _require2.app;
function createWindow() {
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true
  });
  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:5173');
  } else {
    mainWindow.loadURL("file://".concat(resolve(__dirname, '../../dist/index.html')));
  }
}
var isDev = function isDev() {
  return "development" === 'development';
};
app.whenReady().then(function () {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsZUFBb0JBLG1CQUFPLENBQUMsa0JBQU0sQ0FBQztFQUEzQkMsT0FBTyxZQUFQQSxPQUFPO0FBRWYsZ0JBQStCRCxtQkFBTyxDQUFDLDBCQUFVLENBQUM7RUFBMUNFLGFBQWEsYUFBYkEsYUFBYTtFQUFFQyxHQUFHLGFBQUhBLEdBQUc7QUFFMUIsU0FBU0MsWUFBWSxHQUFHO0VBQ3RCLElBQU1DLFVBQVUsR0FBRyxJQUFJSCxhQUFhLENBQUM7SUFDbkNJLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxHQUFHO0lBQ1hDLGNBQWMsRUFBRTtNQUNkQyxlQUFlLEVBQUUsSUFBSTtNQUNyQkMsZ0JBQWdCLEVBQUU7SUFDcEIsQ0FBQztJQUNEQyxlQUFlLEVBQUU7RUFDbkIsQ0FBQyxDQUFDO0VBRUYsSUFBSUMsS0FBSyxFQUFFLEVBQUU7SUFDWFAsVUFBVSxDQUFDUSxPQUFPLENBQUMsdUJBQXVCLENBQUM7RUFDN0MsQ0FBQyxNQUFNO0lBQ0xSLFVBQVUsQ0FBQ1EsT0FBTyxrQkFBV1osT0FBTyxDQUFDYSxTQUFTLEVBQUUsdUJBQXVCLENBQUMsRUFBRztFQUM3RTtBQUNGO0FBRUEsSUFBTUYsS0FBSyxHQUFHLFNBQVJBLEtBQUs7RUFBQSxPQUFTRyxhQUFvQixLQUFLLGFBQWE7QUFBQTtBQUUxRFosR0FBRyxDQUFDZSxTQUFTLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFlBQU07RUFDekJmLFlBQVksRUFBRTtFQUNkRCxHQUFHLENBQUNpQixFQUFFLENBQUMsVUFBVSxFQUFFLFlBQU07SUFDdkIsSUFBSWxCLGFBQWEsQ0FBQ21CLGFBQWEsRUFBRSxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzlDbEIsWUFBWSxFQUFFO0lBQ2hCO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFzdGljaW5lLXJlc3VtZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9wbGFzdGljaW5lLXJlc3VtZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3BsYXN0aWNpbmUtcmVzdW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BsYXN0aWNpbmUtcmVzdW1lLy4vYXBwL21haW4vZWxlY3Ryb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgeyByZXNvbHZlIH0gPSByZXF1aXJlKCdwYXRoJylcblxuY29uc3QgeyBCcm93c2VyV2luZG93LCBhcHAgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJylcblxuZnVuY3Rpb24gY3JlYXRlV2luZG93KCkge1xuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogODAwLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZSxcbiAgICB9LFxuICAgIGF1dG9IaWRlTWVudUJhcjogdHJ1ZSxcbiAgfSlcblxuICBpZiAoaXNEZXYoKSkge1xuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnaHR0cDovLzEyNy4wLjAuMTo1MTczJylcbiAgfSBlbHNlIHtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3Jlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vZGlzdC9pbmRleC5odG1sJyl9YClcbiAgfVxufVxuXG5jb25zdCBpc0RldiA9ICgpID0+IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG5cbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgY3JlYXRlV2luZG93KClcbiAgYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjcmVhdGVXaW5kb3coKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwibmFtZXMiOlsicmVxdWlyZSIsInJlc29sdmUiLCJCcm93c2VyV2luZG93IiwiYXBwIiwiY3JlYXRlV2luZG93IiwibWFpbldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJub2RlSW50ZWdyYXRpb24iLCJjb250ZXh0SXNvbGF0aW9uIiwiYXV0b0hpZGVNZW51QmFyIiwiaXNEZXYiLCJsb2FkVVJMIiwiX19kaXJuYW1lIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwid2hlblJlYWR5IiwidGhlbiIsIm9uIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=