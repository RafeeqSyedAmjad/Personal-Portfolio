"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8856);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2378);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8904);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_projects__WEBPACK_IMPORTED_MODULE_6__, _lib_posts__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_projects__WEBPACK_IMPORTED_MODULE_6__, _lib_posts__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const HeroSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-0"
})`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-1"
})`
  flex-basis: 75%;
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`;
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
    componentId: "sc-af8043c6-2"
})`
  color: ${(props)=>props.theme.textColor};
  margin: 5px 0px;
`;
const UserProfession = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h4.withConfig({
    componentId: "sc-af8043c6-3"
})`
  color: ${(props)=>props.theme.textColor};
  font-weight: bold;
  margin: 0;
  font-weight: normal;
`;
const UserIntro = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-af8043c6-4"
})`
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_4__/* .typeScale.paragraph */ .T.paragraph};
  color: ${(props)=>props.theme.textColorLight};
`;
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    componentId: "sc-af8043c6-5"
})`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-basis: 25%;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-6"
})`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;
const SmallButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
    componentId: "sc-af8043c6-7"
})`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  background-color: ${(props)=>props.status === "active" ? props.theme.buttonBgColor : props.theme.textColorLight};
  color: ${(props)=>props.theme.buttonColor};
`;
const SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-8"
})``;
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h2.withConfig({
    componentId: "sc-af8043c6-9"
})`
  color: ${(props)=>props.theme.textColor};
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_4__/* .typeScale.header2 */ .T.header2};
  font-weight: bold;
  margin: 0;
`;
const SectionSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h4.withConfig({
    componentId: "sc-af8043c6-10"
})`
  color: ${(props)=>props.theme.textColorLight};
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_4__/* .typeScale.header4 */ .T.header4};
  font-weight: normal;
  margin: 0.5rem 0rem;
`;
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-11"
})`
  width: 100%;
  height: 1px;
  background-color: ${(props)=>props.theme.textColorLight};
  margin: 2rem 0rem;
`;
const ViewAllButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
    componentId: "sc-af8043c6-12"
})`
  text-decoration: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_4__/* .typeScale.h4 */ .T.h4};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  background-color: none;
  color: ${(props)=>props.theme.textColor};
`;
const UnorderedList = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
    componentId: "sc-af8043c6-13"
})`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;
const UnorderedListForProjects = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
    componentId: "sc-af8043c6-14"
})`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.2rem;
  padding: 0;
`;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default().li.withConfig({
    componentId: "sc-af8043c6-15"
})`
  /* color: ${(props)=>props.theme.textColorLight}; */
  font-size: ${_utils_typography__WEBPACK_IMPORTED_MODULE_4__/* .typeScale.helperText */ .T.helperText};
  border: 1px solid ${(props)=>props.theme.textColorLight};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 0;
  font-weight: normal;
`;
const NowPlayingContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-16"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;
const NowPlayingContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-17"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const NowPlayingTitleAndArtistContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-18"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
`;
const SongName = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h6.withConfig({
    componentId: "sc-af8043c6-19"
})`
  color: ${(props)=>props.theme.textColor};
  margin: 0;
  font-weight: bold;
`;
const NowPlayingText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-af8043c6-20"
})`
  color: ${(props)=>props.theme.textColor};
  margin: 0;
  font-weight: bold;
  font-size: small;
`;
const SongArtist = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h6.withConfig({
    componentId: "sc-af8043c6-21"
})`
  color: ${(props)=>props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;
const AlbumCover = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    componentId: "sc-af8043c6-22"
})`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
`;
const ProjectContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-23"
})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3.withConfig({
    componentId: "sc-af8043c6-24"
})`
  cursor: pointer;
  color: ${(props)=>props.theme.textColor};
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
`;
const ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-af8043c6-25"
})`
  color: ${(props)=>props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;
const ProjectLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-26"
})`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const ProjectLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
    componentId: "sc-af8043c6-27"
})`
  color: ${(props)=>props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
  text-decoration: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const ProjectSourceCode = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
    componentId: "sc-af8043c6-28"
})`
  color: ${(props)=>props.theme.textColorLight};
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const BlogContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af8043c6-29"
})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BlogTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3.withConfig({
    componentId: "sc-af8043c6-30"
})`
  color: ${(props)=>props.theme.textColor};
  margin: 0;
  font-weight: bold;
`;
const BlogDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-af8043c6-31"
})`
  color: ${(props)=>props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;
const BlogLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
    componentId: "sc-af8043c6-32"
})`
  color: ${(props)=>props.theme.textColorLight};
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-weight: normal;
  text-decoration: underline;
`;
const Blog = ({ title , description , link  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BlogContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogTitle, {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogDescription, {
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/writings/${link}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BlogLink, {
                    children: [
                        "Read more",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowRight, {})
                    ]
                })
            })
        ]
    });
};
const Project = ({ title , description , liveLink , sourceCode , link  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProjectContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/projects/${link}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectTitle, {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectDescription, {
                children: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProjectLinkContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProjectLink, {
                        href: liveLink,
                        target: "_blank",
                        children: [
                            "Live Link",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaExternalLinkAlt, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProjectSourceCode, {
                        href: sourceCode,
                        target: "_blank",
                        children: [
                            "Source Code",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaExternalLinkAlt, {})
                        ]
                    })
                ]
            })
        ]
    });
};
const HeroData = {
    casual: {
        name: "Rafeeq Syed Amjad",
        profession: "Gym \uD83E\uDDBE | music \uD83C\uDFA7",
        intro: "Here is a brief introduction to Rafeeq Syed Amjad. Rafeeq enjoys working out and reading about fitness, technology, engineering, and entrepreneurship.",
        avatar: "https://drive.google.com/uc?export=view&id=1FSbYk-Mh0cdcwmrxs-8f4Rg9dYiRCjZY"
    },
    professional: {
        name: "Rafeeq Syed Amjad",
        profession: "FrontEnd \uD83E\uDDD1‍\uD83D\uDCBB | Javascript \uD83D\uDFE8 | ReactJs ⚛️ | NextJs \uD83D\uDD33 ",
        intro: "Hi, I’m Rafeeq! I'm a developer. In a nutshell, I create websites and apps that help organizations address business challenges and meet their needs. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, ReactJs, NextJs, Redux, Typescript, Tailwind CSS and of course HTML/CSS.",
        avatar: "https://drive.google.com/uc?export=view&id=1FSbYk-Mh0cdcwmrxs-8f4Rg9dYiRCjZY"
    }
};
const getStaticProps = async ()=>{
    const allProjectsData = (0,_lib_projects__WEBPACK_IMPORTED_MODULE_6__/* .getSortedProjectsData */ .ET)().slice(0, 3);
    let allPostsData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_7__/* .getSortedPostsData */ .ld)();
    allPostsData = allPostsData.slice(0, 3);
    return {
        props: {
            projects: allProjectsData,
            blogs: allPostsData
        }
    };
};
// markup
const IndexPage = ({ projects , blogs  })=>{
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(()=>{
        fetch("/api/top-tracks").then((res)=>res.json()).then((data)=>setData(data.data));
    }, []);
    const [isCasual, setIsCasual] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Rafeeq Syed Amjad"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeroSectionContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserName, {
                                children: isCasual ? HeroData.casual.name : HeroData.professional.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserProfession, {
                                children: isCasual ? HeroData.casual.profession : HeroData.professional.profession
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserIntro, {
                                children: isCasual ? HeroData.casual.intro : HeroData.professional.intro
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonContainer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmallButton, {
                                        onClick: ()=>{
                                            setIsCasual(false);
                                        },
                                        status: !isCasual ? "active" : "inactive",
                                        children: "Professional"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmallButton, {
                                        onClick: ()=>{
                                            setIsCasual(true);
                                        },
                                        status: isCasual ? "active" : "inactive",
                                        children: "Casual"
                                    })
                                ]
                            })
                        ]
                    }),
                    isCasual ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {
                        src: HeroData.casual.avatar
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {
                        src: HeroData.professional.avatar
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SectionContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionTitle, {
                        children: "Projects"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionSubtitle, {
                        children: "These are some of the projects I have worked on"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UnorderedList, {
                        children: projects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Project, {
                                link: project.id,
                                title: project.title,
                                description: project.description,
                                liveLink: project.liveLink,
                                sourceCode: project.sourceCode
                            }, project.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/projects",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ViewAllButton, {
                            children: [
                                "See all projects ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowRight, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionDivider, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SectionContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionTitle, {
                        children: "Blogs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionSubtitle, {
                        children: "These are some of the blogs I have written on"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UnorderedList, {
                        children: blogs.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Blog, {
                                title: project.title,
                                description: project.description,
                                link: project.id
                            }, project.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/writings",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ViewAllButton, {
                            children: [
                                "Read all blogs ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowRight, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionDivider, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SectionContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionTitle, {
                        children: "Technologies I have worked with"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionSubtitle, {
                        children: "These are the technologies I have worked with in the past"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UnorderedListForProjects, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "ReactJs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "NextJs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "Recoil"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "Firebase"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "Tailwind CSS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "Next Auth"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "Git"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "HTML"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "CSS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "JavaScript"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "TypeScript"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                children: "Styled Components"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionDivider, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,856,904,378], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();