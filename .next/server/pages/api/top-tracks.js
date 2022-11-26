"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/top-tracks";
exports.ids = ["pages/api/top-tracks"];
exports.modules = {

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "(api)/./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAccessToken\": () => (/* binding */ getAccessToken),\n/* harmony export */   \"getNowPlaying\": () => (/* binding */ getNowPlaying)\n/* harmony export */ });\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client_id = process.env.SPOTIFY_CLIENT_ID;\nconst client_secret = process.env.SPOTIFY_CLIENT_SECRET;\nconst refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString(\"base64\");\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst getAccessToken = async ()=>{\n    const body = new URLSearchParams({\n        grant_type: \"refresh_token\",\n        refresh_token\n    });\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: body.toString()\n    });\n    return response.json();\n};\nconst TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;\nconst getNowPlaying = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(TOP_TRACKS_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`,\n            grant_type: \"user-read-currently-playing\"\n        },\n        \"Content-Type\": \"application/json\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFNBQVMsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjtBQUMvQyxNQUFNQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxxQkFBcUI7QUFDdkQsTUFBTUMsYUFBYSxHQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0sscUJBQXFCO0FBRXZELE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUNPLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDN0UsTUFBTUMsY0FBYyxHQUFHLENBQUMsc0NBQXNDLENBQUM7QUFFeEQsTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTUMsSUFBSSxHQUFHLElBQUlDLGVBQWUsQ0FBQztRQUMvQkMsVUFBVSxFQUFFLGVBQWU7UUFDM0JWLGFBQWE7S0FDZCxDQUFDO0lBQ0YsTUFBTVcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sY0FBYyxFQUFFO1FBQzNDTyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFYixLQUFLLENBQUMsQ0FBQztZQUMvQixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BEO1FBQ0RNLElBQUksRUFBRUEsSUFBSSxDQUFDSCxRQUFRLEVBQUU7S0FDdEIsQ0FBQztJQUNGLE9BQU9NLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFLENBQUM7Q0FDeEIsQ0FBQztBQUVGLE1BQU1DLG1CQUFtQixHQUFHLENBQUMsc0RBQXNELENBQUM7QUFFN0UsTUFBTUMsYUFBYSxHQUFHLFVBQVk7SUFDdkMsTUFBTSxFQUFFQyxZQUFZLEdBQUUsR0FBRyxNQUFNWixjQUFjLEVBQUU7SUFDL0MsT0FBT0ssS0FBSyxDQUFDSyxtQkFBbUIsRUFBRTtRQUNoQ0gsT0FBTyxFQUFFO1lBQ1BDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUksWUFBWSxDQUFDLENBQUM7WUFDdkNULFVBQVUsRUFBRSw2QkFBNkI7U0FDMUM7UUFDRCxjQUFjLEVBQUUsa0JBQWtCO0tBQ25DLENBQUMsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBvcnRmb2xpby8uL2xpYi9zcG90aWZ5LmpzPzlkZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5cclxuY29uc3QgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQ7XHJcbmNvbnN0IGNsaWVudF9zZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XHJcbmNvbnN0IHJlZnJlc2hfdG9rZW4gPSBwcm9jZXNzLmVudi5TUE9USUZZX1JFRlJFU0hfVE9LRU47XHJcblxyXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG5jb25zdCBUT0tFTl9FTkRQT0lOVCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICByZWZyZXNoX3Rva2VuLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogYm9keS50b1N0cmluZygpLFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5jb25zdCBUT1BfVFJBQ0tTX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZ2A7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Tm93UGxheWluZyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuICByZXR1cm4gZmV0Y2goVE9QX1RSQUNLU19FTkRQT0lOVCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXHJcbiAgICAgIGdyYW50X3R5cGU6IFwidXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nXCIsXHJcbiAgICB9LFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJxdWVyeXN0cmluZyIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJTUE9USUZZX0NMSUVOVF9JRCIsImNsaWVudF9zZWNyZXQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJyZWZyZXNoX3Rva2VuIiwiU1BPVElGWV9SRUZSRVNIX1RPS0VOIiwiYmFzaWMiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJUT0tFTl9FTkRQT0lOVCIsImdldEFjY2Vzc1Rva2VuIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImdyYW50X3R5cGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqc29uIiwiVE9QX1RSQUNLU19FTkRQT0lOVCIsImdldE5vd1BsYXlpbmciLCJhY2Nlc3NfdG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/spotify.js\n");

/***/ }),

/***/ "(api)/./pages/api/top-tracks.js":
/*!*********************************!*\
  !*** ./pages/api/top-tracks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/spotify */ \"(api)/./lib/spotify.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (_, res)=>{\n    let item;\n    try {\n        const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.getNowPlaying)();\n        if (response.status === 204 && response.statusText === \"No Content\") {\n            item = null;\n        } else {\n            const data = await response.json();\n            item = data;\n        }\n    } catch (error) {\n        console.log(error);\n    }\n    return res.status(200).json({\n        data: item\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9wLXRyYWNrcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUVsRCxpRUFBZSxPQUFPQyxDQUFDLEVBQUVDLEdBQUcsR0FBSztJQUMvQixJQUFJQyxJQUFJO0lBQ1IsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNSiwyREFBYSxFQUFFO1FBQ3RDLElBQUlJLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSUQsUUFBUSxDQUFDRSxVQUFVLEtBQUssWUFBWSxFQUFFO1lBQ25FSCxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2IsTUFBTTtZQUNMLE1BQU1JLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtZQUNsQ0wsSUFBSSxHQUFHSSxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsT0FBT0UsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU9QLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxJQUFJLENBQUM7UUFBRUQsSUFBSSxFQUFFSixJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQzdDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBvcnRmb2xpby8uL3BhZ2VzL2FwaS90b3AtdHJhY2tzLmpzP2ZlMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Tm93UGxheWluZyB9IGZyb20gXCIuLi8uLi9saWIvc3BvdGlmeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF8sIHJlcykgPT4ge1xyXG4gIGxldCBpdGVtO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE5vd1BsYXlpbmcoKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCAmJiByZXNwb25zZS5zdGF0dXNUZXh0ID09PSBcIk5vIENvbnRlbnRcIikge1xyXG4gICAgICBpdGVtID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGl0ZW0gPSBkYXRhO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IGl0ZW0gfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJnZXROb3dQbGF5aW5nIiwiXyIsInJlcyIsIml0ZW0iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/top-tracks.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/top-tracks.js"));
module.exports = __webpack_exports__;

})();