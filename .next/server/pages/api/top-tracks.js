"use strict";
(() => {
var exports = {};
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 4870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ top_tracks)
});

;// CONCATENATED MODULE: external "querystring"
const external_querystring_namespaceObject = require("querystring");
;// CONCATENATED MODULE: ./lib/spotify.js

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const getAccessToken = async ()=>{
    const body = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token
    });
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body.toString()
    });
    return response.json();
};
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const getNowPlaying = async ()=>{
    const { access_token  } = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
            grant_type: "user-read-currently-playing"
        },
        "Content-Type": "application/json"
    });
};

;// CONCATENATED MODULE: ./pages/api/top-tracks.js

/* harmony default export */ const top_tracks = (async (_, res)=>{
    let item;
    try {
        const response = await getNowPlaying();
        if (response.status === 204 && response.statusText === "No Content") {
            item = null;
        } else {
            const data = await response.json();
            item = data;
        }
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({
        data: item
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4870));
module.exports = __webpack_exports__;

})();