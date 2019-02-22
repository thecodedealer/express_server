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

/***/ "./app/api/content/controller.js":
/*!***************************************!*\
  !*** ./app/api/content/controller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst CONTENT = {\n    \"common\": {\n        \"close\": \"Inchide\"\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res, next) => {\n\n    res.json(CONTENT);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBpL2NvbnRlbnQvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBpL2NvbnRlbnQvY29udHJvbGxlci5qcz8zODZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENPTlRFTlQgPSB7XHJcbiAgICBcImNvbW1vblwiOiB7XHJcbiAgICAgICAgXCJjbG9zZVwiOiBcIkluY2hpZGVcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblxyXG4gICAgcmVzLmpzb24oQ09OVEVOVCk7XHJcblxyXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/api/content/controller.js\n");

/***/ }),

/***/ "./app/api/routes.js":
/*!***************************!*\
  !*** ./app/api/routes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/controller */ \"./app/api/test/controller.js\");\n/* harmony import */ var _content_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/controller */ \"./app/api/content/controller.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((app, router) => {\n    /*\r\n        API ROUTES\r\n    */\n    router.get('/', (req, res, next) => {\n        try {\n            res.ok(\"API Home\");\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.post('/', (req, res, next) => {\n        try {\n            Object(_test_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res, next);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.post('/getTestTable', (req, res, next) => {\n        try {\n\n            // console.log('Requested fields: ', req.body.fields);\n\n            res.ok('ok', [['Tiger Nixon', 'System Architect', 'Edinburgh', '61', '2011/04/25', '$320,800'], ['Tiger Nixon', 'System Architect', 'Edinburgh', '62', '2011/04/25', '$320,800'], ['Tiger Nixon', 'System Architect', 'Edinburgh', '63', '2011/04/25', '$320,800']]);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.post('/getTestChart', (req, res, next) => {\n        try {\n\n            // console.log('Requested fields: ', req.body.fields);\n\n            res.ok('ok', [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451]);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.post('/getTestBars', (req, res, next) => {\n        try {\n\n            // console.log('Requested fields: ', req.body.fields);\n\n            res.ok('ok', [4215, 5312, 6251, 7841, 9821, 14984]);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.post('/getTestPie', (req, res, next) => {\n        try {\n            // console.log('Requested fields: ', req.body.fields);\n\n            res.ok('ok', [25, 25, 25, 25]);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.get('/getContent', (req, res, next) => {\n        try {\n            Object(_content_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res, next);\n        } catch (e) {\n            next(e);\n        }\n    });\n\n    router.post('/getUsers', (req, res, next) => {\n        try {\n            let arr = [];\n            const socket = app.get('socket');\n            arr.push(socket.getUsers());\n            res.ok('Users connected', arr);\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.get('/get-error', (req, res, next) => {\n        try {\n            res.error('API Users');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    router.all('*', (req, res, next) => {\n        try {\n            res.json({\n                status: false,\n                message: `API method not found`,\n                data: {}\n            });\n        } catch (err) {\n            res.error(err);\n            next(err);\n        }\n    });\n\n    return router;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBpL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBpL3JvdXRlcy5qcz9lYzBiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB0ZXN0Q29udHJvbGxlciBmcm9tICcuL3Rlc3QvY29udHJvbGxlcidcclxuaW1wb3J0IGNvbnRlbnRDb250cm9sbGVyIGZyb20gJy4vY29udGVudC9jb250cm9sbGVyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwLCByb3V0ZXIpID0+IHtcclxuICAgIC8qXHJcbiAgICAgICAgQVBJIFJPVVRFU1xyXG4gICAgKi9cclxuICAgIHJvdXRlci5nZXQoJy8nLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMub2soXCJBUEkgSG9tZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcm91dGVyLnBvc3QoJy8nLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0ZXN0Q29udHJvbGxlcihyZXEsIHJlcywgbmV4dCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIucG9zdCgnL2dldFRlc3RUYWJsZScsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVxdWVzdGVkIGZpZWxkczogJywgcmVxLmJvZHkuZmllbGRzKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5vaygnb2snLCBbXHJcbiAgICAgICAgICAgICAgICBbJ1RpZ2VyIE5peG9uJywgJ1N5c3RlbSBBcmNoaXRlY3QnLCAnRWRpbmJ1cmdoJywgJzYxJywgJzIwMTEvMDQvMjUnLCAnJDMyMCw4MDAnXSxcclxuICAgICAgICAgICAgICAgIFsnVGlnZXIgTml4b24nLCAnU3lzdGVtIEFyY2hpdGVjdCcsICdFZGluYnVyZ2gnLCAnNjInLCAnMjAxMS8wNC8yNScsICckMzIwLDgwMCddLFxyXG4gICAgICAgICAgICAgICAgWydUaWdlciBOaXhvbicsICdTeXN0ZW0gQXJjaGl0ZWN0JywgJ0VkaW5idXJnaCcsICc2MycsICcyMDExLzA0LzI1JywgJyQzMjAsODAwJ11cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5wb3N0KCcvZ2V0VGVzdENoYXJ0JywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZXF1ZXN0ZWQgZmllbGRzOiAnLCByZXEuYm9keS5maWVsZHMpO1xyXG5cclxuICAgICAgICAgICAgcmVzLm9rKCdvaycsIFsxMDAwMCwgMzAxNjIsIDI2MjYzLCAxODM5NCwgMTgyODcsIDI4NjgyLCAzMTI3NCwgMzMyNTksIDI1ODQ5LCAyNDE1OSwgMzI2NTEsIDMxOTg0LCAzODQ1MV0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIucG9zdCgnL2dldFRlc3RCYXJzJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZXF1ZXN0ZWQgZmllbGRzOiAnLCByZXEuYm9keS5maWVsZHMpO1xyXG5cclxuICAgICAgICAgICAgcmVzLm9rKCdvaycsIFs0MjE1LCA1MzEyLCA2MjUxLCA3ODQxLCA5ODIxLCAxNDk4NF0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIucG9zdCgnL2dldFRlc3RQaWUnLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVxdWVzdGVkIGZpZWxkczogJywgcmVxLmJvZHkuZmllbGRzKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5vaygnb2snLCBbMjUsIDI1LCAyNSwgMjVdKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJvdXRlci5nZXQoJy9nZXRDb250ZW50JywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29udGVudENvbnRyb2xsZXIocmVxLCByZXMsIG5leHQpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuZXh0KGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcm91dGVyLnBvc3QoJy9nZXRVc2VycycsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXVxyXG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSBhcHAuZ2V0KCdzb2NrZXQnKTtcclxuICAgICAgICAgICAgYXJyLnB1c2goc29ja2V0LmdldFVzZXJzKCkpO1xyXG4gICAgICAgICAgICByZXMub2soJ1VzZXJzIGNvbm5lY3RlZCcsIGFycik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIuZ2V0KCcvZ2V0LWVycm9yJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzLmVycm9yKCdBUEkgVXNlcnMnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5hbGwoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEFQSSBtZXRob2Qgbm90IGZvdW5kYCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXMuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgbmV4dChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByb3V0ZXI7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/api/routes.js\n");

/***/ }),

/***/ "./app/api/test/controller.js":
/*!************************************!*\
  !*** ./app/api/test/controller.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res, next) => {\n\n    const fields = req.body.fields;\n\n    res.json({\n        status: true,\n        message: \"\",\n        data: ['one', 'two', 'three']\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBpL3Rlc3QvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBpL3Rlc3QvY29udHJvbGxlci5qcz8wMWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGZpZWxkcyA9IHJlcS5ib2R5LmZpZWxkcztcclxuXHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZGF0YTogWydvbmUnLCAndHdvJywgJ3RocmVlJ11cclxuICAgIH0pXHJcblxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/api/test/controller.js\n");

/***/ }),

/***/ "./app/mainRoutes.js":
/*!***************************!*\
  !*** ./app/mainRoutes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/routes */ \"./app/api/routes.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n\n    // Load API routes\n    app.use('/api', Object(_api_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app, router));\n\n    // Default routes\n    app.get('/', (req, res, next) => {\n        try {\n            res.end('Home');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    app.get('/users', (req, res, next) => {\n        try {\n            res.end('Users');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    /*\r\n     Method not found (must be the last one)\r\n    */\n    app.all('*', (req, res, next) => {\n        try {\n            res.end('404 Page not found!');\n        } catch (err) {\n            next(err);\n        }\n    });\n\n    /*\r\n        Error handler\r\n    */\n    app.use((err, req, res, next) => {\n        res.json({\n            status: false,\n            message: `Internal server error`,\n            data: {}\n        });\n        console.log(`Error on routing:`);\n        console.error(err);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpblJvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvbWFpblJvdXRlcy5qcz80YzUwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpL3JvdXRlcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwID0+IHtcclxuXHJcbiAgICAvLyBMb2FkIEFQSSByb3V0ZXNcclxuICAgIGFwcC51c2UoJy9hcGknLCBhcGlSb3V0ZXMoYXBwLCByb3V0ZXIpKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHJvdXRlc1xyXG4gICAgYXBwLmdldCgnLycsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcy5lbmQoJ0hvbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwLmdldCgnL3VzZXJzJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzLmVuZCgnVXNlcnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qXHJcblx0ICAgIE1ldGhvZCBub3QgZm91bmQgKG11c3QgYmUgdGhlIGxhc3Qgb25lKVxyXG5cdCovXHJcbiAgICBhcHAuYWxsKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzLmVuZCgnNDA0IFBhZ2Ugbm90IGZvdW5kIScpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5leHQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIEVycm9yIGhhbmRsZXJcclxuICAgICovXHJcbiAgICBhcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgSW50ZXJuYWwgc2VydmVyIGVycm9yYCxcclxuICAgICAgICAgICAgZGF0YToge31cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igb24gcm91dGluZzpgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/mainRoutes.js\n");

/***/ }),

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _socket_socketService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket/socketService */ \"./app/socket/socketService.js\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mainRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainRoutes */ \"./app/mainRoutes.js\");\n/* harmony import */ var _services_abstract_customResponseService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/abstract/customResponseService */ \"./app/services/abstract/customResponseService.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 5000;\n\nconst config = () => {\n    const app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    app.set('server', http__WEBPACK_IMPORTED_MODULE_1___default.a.Server(app));\n\n    //Set custom responses\n    app.set('customResponses', Object(_services_abstract_customResponseService__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a));\n\n    app.set('debug', true);\n    app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\n    app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\n    app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()({\n        origin: true,\n        credentials: true,\n        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],\n        maxAge: 86400\n    }));\n\n    app.set('socket', Object(_socket_socketService__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(app));\n\n    return app;\n};\n\nconst run = async app => {\n    const server = app.get('server');\n    const socket = app.get('socket');\n\n    /*\r\n        Init socket\r\n    */\n    socket.init();\n\n    /*\r\n        Load routes\r\n    */\n    Object(_mainRoutes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(app);\n\n    /*\r\n     Start server\r\n    */\n    server.listen(PORT, () => {\n        console.log(`App is running on port ${PORT}`);\n    });\n};\n\n/*\r\n    Start app\r\n*/\nconst start = async () => {\n    try {\n        const app = config();\n        await run(app);\n    } catch (err) {\n        console.error('Server failed on booting!');\n        console.error(err);\n        process.exit();\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9zZXJ2ZXIuanM/ODZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcbmltcG9ydCBib2R5X3BhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBjb29raWVfcGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHNvY2tldCBmcm9tICcuL3NvY2tldC9zb2NrZXRTZXJ2aWNlJztcclxuXHJcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcclxuXHJcbmltcG9ydCBtYWluUm91dGVzIGZyb20gJy4vbWFpblJvdXRlcyc7XHJcblxyXG5pbXBvcnQgY3VzdG9tUmVzcG9uc2UgZnJvbSAnLi9zZXJ2aWNlcy9hYnN0cmFjdC9jdXN0b21SZXNwb25zZVNlcnZpY2UnO1xyXG5cclxuXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XHJcblxyXG5jb25zdCBjb25maWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbiAgICBhcHAuc2V0KCdzZXJ2ZXInLCBodHRwLlNlcnZlcihhcHApKTtcclxuXHJcbiAgICAvL1NldCBjdXN0b20gcmVzcG9uc2VzXHJcbiAgICBhcHAuc2V0KCdjdXN0b21SZXNwb25zZXMnLCBjdXN0b21SZXNwb25zZShleHByZXNzKSk7XHJcblxyXG4gICAgYXBwLnNldCgnZGVidWcnLCB0cnVlKTtcclxuICAgIGFwcC51c2UoYm9keV9wYXJzZXIuanNvbigpKTtcclxuICAgIGFwcC51c2UoY29va2llX3BhcnNlcigpKTtcclxuICAgIGFwcC51c2UoY29ycyh7XHJcbiAgICAgICAgb3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIGFsbG93ZWRIZWFkZXJzOiBbJ09yaWdpbicsICdYLVJlcXVlc3RlZC1XaXRoJywgJ0NvbnRlbnQtVHlwZScsICdBY2NlcHQnXSxcclxuICAgICAgICBtYXhBZ2U6IDg2NDAwXHJcbiAgICB9KSk7XHJcblxyXG4gICAgYXBwLnNldCgnc29ja2V0Jywgc29ja2V0KGFwcCkpO1xyXG5cclxuICAgIHJldHVybiBhcHA7XHJcbn07XHJcblxyXG5jb25zdCBydW4gPSBhc3luYyBhcHAgPT4ge1xyXG4gICAgY29uc3Qgc2VydmVyID0gYXBwLmdldCgnc2VydmVyJyk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBhcHAuZ2V0KCdzb2NrZXQnKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIEluaXQgc29ja2V0XHJcbiAgICAqL1xyXG4gICAgc29ja2V0LmluaXQoKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIExvYWQgcm91dGVzXHJcbiAgICAqL1xyXG4gICAgbWFpblJvdXRlcyhhcHApO1xyXG5cclxuICAgIC8qXHJcblx0ICAgIFN0YXJ0IHNlcnZlclxyXG5cdCovXHJcbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXBwIGlzIHJ1bm5pbmcgb24gcG9ydCAkeyBQT1JUIH1gKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLypcclxuICAgIFN0YXJ0IGFwcFxyXG4qL1xyXG5leHBvcnQgY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IGNvbmZpZygpO1xyXG4gICAgICAgIGF3YWl0IHJ1bihhcHApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU2VydmVyIGZhaWxlZCBvbiBib290aW5nIScpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgIH1cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/server.js\n");

/***/ }),

/***/ "./app/services/abstract/customResponseService.js":
/*!********************************************************!*\
  !*** ./app/services/abstract/customResponseService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (express => {\n    const res = express.response;\n\n    res.ok = function (message = \"\", data = {}) {\n        // log.info(message, data);\n        this.status(200);\n        this.json({\n            status: true,\n            message: message,\n            data: data\n        });\n    };\n\n    res.nok = function (message = \"\", data = {}) {\n        // log.info(message, data);\n        this.status(200);\n        this.json({\n            status: false,\n            message: message,\n            data: data\n        });\n    };\n\n    res.error = function (err) {\n        // log.error(err);\n        this.status(500);\n        this.json({\n            status: false,\n            message: \"Server error!\",\n            data: err\n        });\n    };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2VydmljZXMvYWJzdHJhY3QvY3VzdG9tUmVzcG9uc2VTZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9zZXJ2aWNlcy9hYnN0cmFjdC9jdXN0b21SZXNwb25zZVNlcnZpY2UuanM/NTgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGV4cHJlc3MucmVzcG9uc2U7XHJcblxyXG4gICAgcmVzLm9rID0gZnVuY3Rpb24gKG1lc3NhZ2UgPSBcIlwiLCBkYXRhID0ge30pIHtcclxuICAgICAgICAvLyBsb2cuaW5mbyhtZXNzYWdlLCBkYXRhKTtcclxuICAgICAgICB0aGlzLnN0YXR1cygyMDApO1xyXG4gICAgICAgIHRoaXMuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXMubm9rID0gZnVuY3Rpb24gKG1lc3NhZ2UgPSBcIlwiLCBkYXRhID0ge30pIHtcclxuICAgICAgICAvLyBsb2cuaW5mbyhtZXNzYWdlLCBkYXRhKTtcclxuICAgICAgICB0aGlzLnN0YXR1cygyMDApO1xyXG4gICAgICAgIHRoaXMuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXMuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgLy8gbG9nLmVycm9yKGVycik7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICB0aGlzLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlNlcnZlciBlcnJvciFcIixcclxuICAgICAgICAgICAgZGF0YTogZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/services/abstract/customResponseService.js\n");

/***/ }),

/***/ "./app/socket/socketService.js":
/*!*************************************!*\
  !*** ./app/socket/socketService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n\n    class SocketService {\n        constructor() {\n            this.clients = 0;\n            this.actions = {};\n        }\n\n        init() {\n            const server = app.get('server');\n            const io = socket_io__WEBPACK_IMPORTED_MODULE_0___default()(server);\n\n            io.on('connection', socket => {\n\n                console.log('Client connected');\n                this.clients += 1;\n\n                socket.on('hello', msg => {\n                    console.log(msg);\n                });\n\n                socket.emit('action', {\n                    message: 'Hello'\n                });\n\n                socket.on('disconnect', () => {\n                    console.log('Client disconnected');\n                    this.clients -= 1;\n                });\n            });\n        }\n\n        getUsers() {\n            return this.clients;\n        }\n    }\n\n    return new SocketService();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc29ja2V0L3NvY2tldFNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL3NvY2tldC9zb2NrZXRTZXJ2aWNlLmpzPzBkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHNvY2tldF9pbyBmcm9tICdzb2NrZXQuaW8nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcCA9PiB7XHJcblxyXG4gICAgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50cyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlciA9IGFwcC5nZXQoJ3NlcnZlcicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbyA9IHNvY2tldF9pbyhzZXJ2ZXIpO1xyXG5cclxuICAgICAgICAgICAgaW8ub24oJ2Nvbm5lY3Rpb24nLCBzb2NrZXQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHMgKz0gMTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdoZWxsbycsIG1zZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2FjdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSGVsbG8nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCBkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHMgLT0gMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBnZXRVc2VycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBuZXcgU29ja2V0U2VydmljZSgpO1xyXG59XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQW5DQTtBQUNBO0FBc0NBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/socket/socketService.js\n");

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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

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

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCI/Y2IzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///socket.io\n");

/***/ })

/******/ })));