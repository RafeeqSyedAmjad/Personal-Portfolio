"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const A = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-377a95d4-0"
})`
  text-decoration: none;
`;


/***/ }),

/***/ 3629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./utils/colors.js
const primaryColor = {
    100: "#9E6ADC",
    200: "#935AD8",
    300: "#8849D4",
    400: "#7D39D0",
    500: "#732FC6"
};
const green = {
    100: "#529e66",
    200: "#367b48",
    300: "#276738"
};
const yellow = {
    100: "#e1c542",
    200: "#cab23f",
    300: "#b49e35"
};
const red = {
    100: "#d0454c",
    200: "#b54248",
    300: "#95353a"
};
const neutral = {
    100: "#ffffff",
    200: "#f4f5f7",
    300: "#e1e1e1",
    400: "#737581",
    500: "#141414",
    600: "#111111"
};

// EXTERNAL MODULE: ./utils/typography.js
var typography = __webpack_require__(8856);
;// CONCATENATED MODULE: ./utils/Global.js



const GlobalStyle = external_styled_components_.createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  overflow: auto;
  width: 100%;
  color: ${(props)=>props.theme.codeColor};
  background-color: ${neutral[300]};
  padding: 0.1rem;
  border-radius: 4px;
}

pre {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  overflow: auto;
  width: 100%;
  background-color: ${(props)=>props.theme.bgColor};
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${neutral[300]};
}

pre code {
  background-color: transparent;
  border: none;
  color: ${(props)=>props.theme.codeColor};
  background-color: ${neutral[300]};
}

body {
  margin: 0 30%;
  padding: 0;
  font-family: ${typography/* primaryFont */.$};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props)=>props.theme.bgColor};
  color: ${(props)=>props.theme.textColor};
}

a {
  color: ${(props)=>props.theme.textColorLight};
  text-decoration: none;
}

li {
  margin: 1rem 0;
}


@media (max-width:800px) {
  body {
    margin: 0 4%;
  }   
}
`;

;// CONCATENATED MODULE: ./hooks/useLocalStorage.js

const useLocalStorage = (key, initialState)=>{
    const get = ()=>{
        if (false) {}
    };
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(get());
    // ? subscribing to any changes
    (0,external_react_.useEffect)(()=>{
        localStorage.setItem(key, JSON.stringify({
            value
        }));
    }, [
        value,
        key
    ]);
    return [
        value,
        setValue
    ];
};

;// CONCATENATED MODULE: ./utils/theme.js

const defaultTheme = {
    primaryColor: primaryColor[500],
    buttonColor: neutral[100],
    buttonBgColor: neutral[500],
    bgColor: neutral[100],
    textColor: neutral[600],
    textColorLight: neutral[400],
    lightBgColor: neutral[300],
    codeColor: neutral[500]
};
const darkTheme = {
    primaryColor: primaryColor[500],
    buttonColor: neutral[100],
    buttonBgColor: primaryColor[400],
    bgColor: neutral[500],
    textColor: neutral[100],
    lightBgColor: neutral[400],
    textColorLight: neutral[400],
    codeColor: neutral[500]
};

;// CONCATENATED MODULE: ./contexts/ThemeContext.js





const ThemeContext = /*#__PURE__*/ external_react_default().createContext();
const ThemeToggleProvider = ({ children  })=>{
    const [mode, setMode] = useLocalStorage("displayMode", "dark");
    const { 0: activeTheme , 1: setActiveTheme  } = (0,external_react_.useState)(darkTheme);
    (0,external_react_.useEffect)(()=>{
        if (mode === "normal") {
            setActiveTheme(darkTheme);
        }
        if (mode === "dark") {
            console.log("in");
            setActiveTheme(defaultTheme);
        }
    }, [
        mode
    ]);
    const toggleTheme = ()=>{
        if (mode === "normal") {
            setMode("dark");
        }
        if (mode === "dark") {
            console.log("in");
            setMode("normal");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: {
            toggleTheme,
            activeTheme
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
            theme: activeTheme,
            children: children
        })
    });
};
const useThemeContext = ()=>{
    const context = external_react_default().useContext(ThemeContext);
    if (context) {
        return context;
    } else {
        // throw new Error("This can only be used inside theme context");
        console.log("This can only be used inside theme context");
    }
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/CustomLink.js
var CustomLink = __webpack_require__(7057);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Layout.js











// conmponents
const AppHeader = external_styled_components_default().header.withConfig({
    componentId: "sc-9f8be8a3-0"
})`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 16px;
`;
const LeftContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-9f8be8a3-1"
})`
  display: flex;
  align-items: center;
`;
const Logo = external_styled_components_default().h1.withConfig({
    componentId: "sc-9f8be8a3-2"
})`
  color: ${(props)=>props.theme.textColor};
  cursor: pointer;
`;
const LinksContainer = external_styled_components_default().ul.withConfig({
    componentId: "sc-9f8be8a3-3"
})`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${(props)=>props.theme.textColor};
  list-style-type: none;
`;
const NavLinks = external_styled_components_default().li.withConfig({
    componentId: "sc-9f8be8a3-4"
})`
  text-decoration: none;
  color: ${(props)=>props.theme.textColorLight};
  cursor: pointer;
`;
const ThemeToggleButton = external_styled_components_default().button.withConfig({
    componentId: "sc-9f8be8a3-5"
})`
  border: none;
  cursor: pointer;
  background-color: ${(props)=>props.theme.lightBgColor};
  color: ${(props)=>props.theme.textColor};
  font-size: ${typography/* typeScale.header3 */.T.header3};
  border-radius: 5px;
  padding: 5px;
`;
const Footer = external_styled_components_default().footer.withConfig({
    componentId: "sc-9f8be8a3-6"
})`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  color: ${(props)=>props.theme.textColor};
`;
const CopyrightTextContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-9f8be8a3-7"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const SocialIconsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-9f8be8a3-8"
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0rem;
`;
const FooterText = external_styled_components_default().p.withConfig({
    componentId: "sc-9f8be8a3-9"
})`
  font-size: ${typography/* typeScale.paragraph */.T.paragraph};
  position: sticky;
  bottom: 0;
`;
const Layout = ({ children , title =false , description =false , image =false , path =false ,  })=>{
    // state
    const { toggleTheme , activeTheme  } = useThemeContext();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppHeader, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LeftContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                        children: "RSA."
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinksContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLinks, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/projects",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                                children: "Projects"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLinks, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/writings",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                                children: "Writings"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggleButton, {
                        onClick: ()=>toggleTheme(),
                        children: activeTheme === defaultTheme ? /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineMoon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineLightBulb, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Footer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CopyrightTextContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterText, {
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    ", Built with",
                                    ` `,
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://nextjs.org",
                                        children: "NextJs"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowCircleUp, {
                                size: 24,
                                onClick: ()=>window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialIconsContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                href: "https://twitter.com/RafeeqSyedAmjad",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                                    size: 24
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                href: "https://github.com/RafeeqSyedAmjad",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithubAlt, {
                                    size: 24
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                href: "mailto:rafeeqsyedamjad.com",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaEnvelope, {
                                    size: 24
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink.A, {
                                href: "https://www.linkedin.com/in/RafeeqSyedAmjad/",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {
                                    size: 24
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggleProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,856], () => (__webpack_exec__(3629)));
module.exports = __webpack_exports__;

})();