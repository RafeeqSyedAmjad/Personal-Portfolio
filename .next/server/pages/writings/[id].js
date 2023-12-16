"use strict";
(() => {
var exports = {};
exports.id = 93;
exports.ids = [93,856];
exports.modules = {

/***/ 1282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Date_Date)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./components/Date.js


function Date_Date({ dateString  }) {
    const date = (0,external_date_fns_namespaceObject.parseISO)(dateString);
    return /*#__PURE__*/ jsx_runtime_.jsx("time", {
        dateTime: dateString,
        children: (0,external_date_fns_namespaceObject.format)(date, "LLLL d, yyyy")
    });
};


/***/ }),

/***/ 5722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getPostMinute)
/* harmony export */ });
const getPostMinute = (content)=>{
    const words = content.split(" ");
    const minutes = Math.ceil(words.length / 200);
    return minutes;
};


/***/ }),

/***/ 5447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8904);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1282);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8856);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5722);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_3__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Add this import









const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-c8e0111d-0"
})`
  word-wrap: break-word;
`;
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-c8e0111d-1"
})`
  height: 5px;
  width: ${(props)=>props.progress}%;
  background-color: #b278ff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default().h1.withConfig({
    componentId: "sc-c8e0111d-2"
})`
  font-size: 2rem;
  margin: 1rem 0rem;
`;
const Article = styled_components__WEBPACK_IMPORTED_MODULE_4___default().article.withConfig({
    componentId: "sc-c8e0111d-3"
})``;
const DateAndReadingTime = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-c8e0111d-4"
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0rem;
`;
const ReadingTime = styled_components__WEBPACK_IMPORTED_MODULE_4___default().small.withConfig({
    componentId: "sc-c8e0111d-5"
})`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${(props)=>props.theme.textColorLight};
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_6__/* .typeScale.paragraph */ .T.paragraph};
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-c8e0111d-6"
})``;
const ReadAloudContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-c8e0111d-7"
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ReadAloudButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default().button.withConfig({
    componentId: "sc-c8e0111d-8"
})`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props)=>props.theme.primaryColor};
  color: ${(props)=>props.theme.buttonColor};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_6__/* .typeScale.paragraph */ .T.paragraph};
  cursor: pointer;
`;
function Post({ postData  }) {
    // add reading progress bar
    const [scrollPercentage, setScrollPercentage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const handleScroll = ()=>{
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || window.innerHeight;
            const scrolled = scrollTop / (scrollHeight - clientHeight) * 100;
            setScrollPercentage(scrolled);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [isReadAloud, setIsReadAloud] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [scrollWhileReadAloud, setScrollWhileReadAloud] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (scrollWhileReadAloud) {
            const scrollInterval = setInterval(()=>{
                window.scrollBy(0, 1);
            }, 300);
            return ()=>clearInterval(scrollInterval);
        }
    }, [
        scrollWhileReadAloud
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isReadAloud) {
            const utterance = new SpeechSynthesisUtterance(postData.contentHtml);
            utterance.lang = "en-US";
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            utterance.voice = speechSynthesis.getVoices()[0];
            speechSynthesis.speak(utterance);
            setScrollWhileReadAloud(true);
        } else {
            setScrollWhileReadAloud(false);
            speechSynthesis.cancel();
        }
        return ()=>{
            speechSynthesis.cancel();
        };
    }, [
        isReadAloud
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MainContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: postData.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBar, {
                progress: scrollPercentage
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Article, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        children: postData.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DateAndReadingTime, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Date__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                dateString: postData.date
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReadingTime, {
                                children: [
                                    (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getPostMinute */ .v)(postData.contentHtml),
                                    " min read ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRegClock, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReadAloudContainer, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReadAloudButton, {
                            onClick: ()=>setIsReadAloud(!isReadAloud),
                            children: [
                                // if isReadAloud is true, show "Pause" else show "Read Aloud"
                                isReadAloud ? "Stop" : "Read Aloud",
                                isReadAloud ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStopCircle, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlayCircle, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentContainer, {
                        dangerouslySetInnerHTML: {
                            __html: postData.contentHtml
                        }
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const paths = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .getAllPostIds */ .Le)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .getPostData */ .AU)(params.id);
    return {
        props: {
            postData
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ primaryFont),
/* harmony export */   "T": () => (/* binding */ typeScale)
/* harmony export */ });
const primaryFont = "'IBM Plex Sans', sans-serif";
const typeScale = {
    bigHeader: "2.5rem",
    header1: "1.8rem",
    header2: "1.6rem",
    header3: "1.4rem",
    header4: "1.2rem",
    header5: "1.1rem",
    paragraph: "1rem",
    helperText: "0.8rem",
    copyrightText: "0.7rem"
};


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [904], () => (__webpack_exec__(5447)));
module.exports = __webpack_exports__;

})();