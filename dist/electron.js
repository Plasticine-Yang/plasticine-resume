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
      nodeIntegration: true
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsZUFBb0JBLG1CQUFPLENBQUMsa0JBQU0sQ0FBQztFQUEzQkMsT0FBTyxZQUFQQSxPQUFPO0FBRWYsZ0JBQStCRCxtQkFBTyxDQUFDLDBCQUFVLENBQUM7RUFBMUNFLGFBQWEsYUFBYkEsYUFBYTtFQUFFQyxHQUFHLGFBQUhBLEdBQUc7QUFFMUIsU0FBU0MsWUFBWSxHQUFHO0VBQ3RCLElBQU1DLFVBQVUsR0FBRyxJQUFJSCxhQUFhLENBQUM7SUFDbkNJLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxHQUFHO0lBQ1hDLGNBQWMsRUFBRTtNQUNkQyxlQUFlLEVBQUU7SUFDbkI7RUFDRixDQUFDLENBQUM7RUFFRixJQUFJQyxLQUFLLEVBQUUsRUFBRTtJQUNYTCxVQUFVLENBQUNNLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztFQUM3QyxDQUFDLE1BQU07SUFDTE4sVUFBVSxDQUFDTSxPQUFPLGtCQUFXVixPQUFPLENBQUNXLFNBQVMsRUFBRSx1QkFBdUIsQ0FBQyxFQUFHO0VBQzdFO0FBQ0Y7QUFFQSxJQUFNRixLQUFLLEdBQUcsU0FBUkEsS0FBSztFQUFBLE9BQVNHLGFBQW9CLEtBQUssYUFBYTtBQUFBO0FBRTFEVixHQUFHLENBQUNhLFNBQVMsRUFBRSxDQUFDQyxJQUFJLENBQUMsWUFBTTtFQUN6QmIsWUFBWSxFQUFFO0VBQ2RELEdBQUcsQ0FBQ2UsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFNO0lBQ3ZCLElBQUloQixhQUFhLENBQUNpQixhQUFhLEVBQUUsQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUM5Q2hCLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhc3RpY2luZS1yZXN1bWUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vcGxhc3RpY2luZS1yZXN1bWUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9wbGFzdGljaW5lLXJlc3VtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGFzdGljaW5lLXJlc3VtZS8uL2FwcC9tYWluL2VsZWN0cm9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IHsgcmVzb2x2ZSB9ID0gcmVxdWlyZSgncGF0aCcpXG5cbmNvbnN0IHsgQnJvd3NlcldpbmRvdywgYXBwIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5cbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDgwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGlzRGV2KCkpIHtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2h0dHA6Ly8xMjcuMC4wLjE6NTE3MycpXG4gIH0gZWxzZSB7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtyZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApXG4gIH1cbn1cblxuY29uc3QgaXNEZXYgPSAoKSA9PiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gIGNyZWF0ZVdpbmRvdygpXG4gIGFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY3JlYXRlV2luZG93KClcbiAgICB9XG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyZXNvbHZlIiwiQnJvd3NlcldpbmRvdyIsImFwcCIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwibm9kZUludGVncmF0aW9uIiwiaXNEZXYiLCJsb2FkVVJMIiwiX19kaXJuYW1lIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwid2hlblJlYWR5IiwidGhlbiIsIm9uIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=