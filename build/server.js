(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/ExpressRoutes.js":
/*!******************************!*\
  !*** ./app/ExpressRoutes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/routes */ \"./app/api/routes.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n\n    // Load API routes\n    app.use('/api', Object(_api_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app));\n\n    // Default routes\n    app.get('/', (req, res, next) => {\n        try {\n            res.end('Home');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    app.get('/users', (req, res, next) => {\n        try {\n            res.end('Users');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    /*\r\n     Method not found (must be the last one)\r\n    */\n    app.all('*', (req, res, next) => {\n        try {\n            res.end('404 Page not found!');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    /*\r\n        Error handler\r\n    */\n    app.use((err, req, res, next) => {\n        res.json({\n            status: false,\n            message: `Internal server error`,\n            data: {}\n        });\n        console.log(`Error on routing:`);\n        console.error(err);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvRXhwcmVzc1JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvRXhwcmVzc1JvdXRlcy5qcz9jNWM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBhcGlSb3V0ZXMgZnJvbSAnLi9hcGkvcm91dGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcCA9PiB7XHJcblxyXG4gICAgLy8gTG9hZCBBUEkgcm91dGVzXHJcbiAgICBhcHAudXNlKCcvYXBpJywgYXBpUm91dGVzKGFwcCkpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgcm91dGVzXHJcbiAgICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzLmVuZCgnSG9tZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcHAuZ2V0KCcvdXNlcnMnLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMuZW5kKCdVc2VycycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLypcclxuXHQgICAgTWV0aG9kIG5vdCBmb3VuZCAobXVzdCBiZSB0aGUgbGFzdCBvbmUpXHJcblx0Ki9cclxuICAgIGFwcC5hbGwoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMuZW5kKCc0MDQgUGFnZSBub3QgZm91bmQhJylcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgICAgRXJyb3IgaGFuZGxlclxyXG4gICAgKi9cclxuICAgIGFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JgLFxyXG4gICAgICAgICAgICBkYXRhOiB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBvbiByb3V0aW5nOmApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/ExpressRoutes.js\n");

/***/ }),

/***/ "./app/api/routes.js":
/*!***************************!*\
  !*** ./app/api/routes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _test_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/controller */ \"./app/api/test/controller.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    /*\r\n        ROUTES\r\n    */\n    router.get('/', (req, res, next) => {\n        try {\n            Object(_test_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res, next);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.get('/users', (req, res, next) => {\n        try {\n            res.nok('API Users');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.get('/get-error', (req, res, next) => {\n        try {\n            res.error('API Users');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    /*\r\n     Endpoint not found\r\n    */\n    router.all('*', (req, res, next) => {\n        try {\n            res.json({\n                status: false,\n                message: `API method not found`,\n                data: {}\n            });\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    return router;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBpL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBpL3JvdXRlcy5qcz9lYzBiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHRlc3RDb250cm9sbGVyIGZyb20gJy4vdGVzdC9jb250cm9sbGVyJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIC8qXHJcbiAgICAgICAgUk9VVEVTXHJcbiAgICAqL1xyXG4gICAgcm91dGVyLmdldCgnLycsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRlc3RDb250cm9sbGVyKHJlcSwgcmVzLCBuZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcm91dGVyLmdldCgnL3VzZXJzJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzLm5vaygnQVBJIFVzZXJzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5nZXQoJy9nZXQtZXJyb3InLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMuZXJyb3IoJ0FQSSBVc2VycycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLypcclxuXHQgICAgRW5kcG9pbnQgbm90IGZvdW5kXHJcblx0Ki9cclxuICAgIHJvdXRlci5hbGwoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEFQSSBtZXRob2Qgbm90IGZvdW5kYCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlcjtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/api/routes.js\n");

/***/ }),

/***/ "./app/api/test/controller.js":
/*!************************************!*\
  !*** ./app/api/test/controller.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res, next) => {\n\n    res.ok('Home');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBpL3Rlc3QvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBpL3Rlc3QvY29udHJvbGxlci5qcz8wMWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cclxuICAgIHJlcy5vaygnSG9tZScpXHJcblxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/api/test/controller.js\n");

/***/ }),

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ExpressRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExpressRoutes */ \"./app/ExpressRoutes.js\");\n/* harmony import */ var _services_abstract_customResponseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/abstract/customResponseService */ \"./app/services/abstract/customResponseService.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 5000;\n\nconst config = () => {\n    const app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    app.set('server', http__WEBPACK_IMPORTED_MODULE_1___default.a.Server(app));\n\n    //Set custom responses\n    app.set('customResponses', Object(_services_abstract_customResponseService__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a));\n\n    app.set('debug', true);\n    app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\n    app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\n\n    return app;\n};\n\nconst run = async app => {\n    const server = app.get('server');\n\n    /*\r\n        Load routes\r\n    */\n    Object(_ExpressRoutes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(app);\n\n    /*\r\n     Start server\r\n    */\n    server.listen(PORT, () => {\n        console.log(`App is running on port ${PORT}`);\n    });\n};\n\n/*\r\n    Start app\r\n*/\nconst start = async () => {\n    try {\n        const app = config();\n        await run(app);\n    } catch (err) {\n        console.error('Server failed on booting!');\n        console.error(err);\n        process.exit();\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9zZXJ2ZXIuanM/ODZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcbmltcG9ydCBib2R5X3BhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBjb29raWVfcGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xyXG5cclxuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuaW1wb3J0IEV4cHJlc3NSb3V0ZXMgZnJvbSAnLi9FeHByZXNzUm91dGVzJztcclxuXHJcbmltcG9ydCBjdXN0b21SZXNwb25zZSBmcm9tICcuL3NlcnZpY2VzL2Fic3RyYWN0L2N1c3RvbVJlc3BvbnNlU2VydmljZSc7XHJcblxyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcclxuXHJcbmNvbnN0IGNvbmZpZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuICAgIGFwcC5zZXQoJ3NlcnZlcicsIGh0dHAuU2VydmVyKGFwcCkpO1xyXG5cclxuICAgIC8vU2V0IGN1c3RvbSByZXNwb25zZXNcclxuICAgIGFwcC5zZXQoJ2N1c3RvbVJlc3BvbnNlcycsIGN1c3RvbVJlc3BvbnNlKGV4cHJlc3MpKTtcclxuXHJcbiAgICBhcHAuc2V0KCdkZWJ1ZycsIHRydWUpO1xyXG4gICAgYXBwLnVzZShib2R5X3BhcnNlci5qc29uKCkpO1xyXG4gICAgYXBwLnVzZShjb29raWVfcGFyc2VyKCkpO1xyXG5cclxuICAgIHJldHVybiBhcHA7XHJcbn07XHJcblxyXG5jb25zdCBydW4gPSBhc3luYyBhcHAgPT4ge1xyXG4gICAgY29uc3Qgc2VydmVyID0gYXBwLmdldCgnc2VydmVyJyk7XHJcblxyXG4gICAgLypcclxuICAgICAgICBMb2FkIHJvdXRlc1xyXG4gICAgKi9cclxuICAgIEV4cHJlc3NSb3V0ZXMoYXBwKTtcclxuXHJcbiAgICAvKlxyXG5cdCAgICBTdGFydCBzZXJ2ZXJcclxuXHQqL1xyXG4gICAgc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFwcCBpcyBydW5uaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKlxyXG4gICAgU3RhcnQgYXBwXHJcbiovXHJcbmV4cG9ydCBjb25zdCBzdGFydCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gY29uZmlnKCk7XHJcbiAgICAgICAgYXdhaXQgcnVuKGFwcCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTZXJ2ZXIgZmFpbGVkIG9uIGJvb3RpbmchJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/server.js\n");

/***/ }),

/***/ "./app/services/abstract/customResponseService.js":
/*!********************************************************!*\
  !*** ./app/services/abstract/customResponseService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (express => {\n    const res = express.response;\n\n    res.ok = function (message = \"\", data = {}) {\n        // log.info(message, data);\n        this.status(200);\n        this.json({\n            status: true,\n            message: message,\n            data: data\n        });\n    };\n\n    res.nok = function (message = \"\", data = {}) {\n        // log.info(message, data);\n        this.status(200);\n        this.json({\n            status: false,\n            message: message,\n            data: data\n        });\n    };\n\n    res.error = function (err) {\n        // log.error(err);\n        this.status(500);\n        this.json({\n            message: \"Server error!\",\n            data: err\n        });\n    };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2VydmljZXMvYWJzdHJhY3QvY3VzdG9tUmVzcG9uc2VTZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9zZXJ2aWNlcy9hYnN0cmFjdC9jdXN0b21SZXNwb25zZVNlcnZpY2UuanM/NTgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZXhwcmVzcykgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gZXhwcmVzcy5yZXNwb25zZTtcclxuXHJcbiAgICByZXMub2sgPSBmdW5jdGlvbiAobWVzc2FnZSA9IFwiXCIsIGRhdGEgPSB7fSkge1xyXG4gICAgICAgIC8vIGxvZy5pbmZvKG1lc3NhZ2UsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzKDIwMCk7XHJcbiAgICAgICAgdGhpcy5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcy5ub2sgPSBmdW5jdGlvbiAobWVzc2FnZSA9IFwiXCIsIGRhdGEgPSB7fSkge1xyXG4gICAgICAgIC8vIGxvZy5pbmZvKG1lc3NhZ2UsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzKDIwMCk7XHJcbiAgICAgICAgdGhpcy5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJlcy5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAvLyBsb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICB0aGlzLnN0YXR1cyg1MDApO1xyXG4gICAgICAgIHRoaXMuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VydmVyIGVycm9yIVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/services/abstract/customResponseService.js\n");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZWJpcmQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJibHVlYmlyZFwiPzJjNmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmx1ZWJpcmRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bluebird\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXBhcnNlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIj8yMWRjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cookie-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ })

/******/ })));