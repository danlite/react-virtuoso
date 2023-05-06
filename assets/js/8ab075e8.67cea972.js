"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[9898],{3576:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(2564),o=r(3102),a=(r(959),r(3576)),s=["components"],i={id:"press-to-load-more",title:"Press to Load More",sidebar_label:"Press to Load More",slug:"/press-to-load-more/"},l=void 0,c={unversionedId:"scenarios/press-to-load-more",id:"scenarios/press-to-load-more",title:"Press to Load More",description:'The components.Footer property can be used to place a "load more" button that appends more items to the list.',source:"@site/docs/scenarios/press-to-load-more.md",sourceDirName:"scenarios",slug:"/press-to-load-more/",permalink:"/press-to-load-more/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/press-to-load-more.md",tags:[],version:"current",frontMatter:{id:"press-to-load-more",title:"Press to Load More",sidebar_label:"Press to Load More",slug:"/press-to-load-more/"},sidebar:"defaultSidebar",previous:{title:"Prepending Items",permalink:"/prepend-items/"},next:{title:"RB DND + Window Scroller",permalink:"/react-beautiful-dnd-window-scroller/"}},u={},d=[],p={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"components.Footer"),' property can be used to place a "load more" button that appends more items to the list.'),(0,a.kt)("p",null,"Scroll to the bottom of the list and press the button to load 100 more items. The ",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout")," simulates a network request; in the real world, you can fetch data from a service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport { useState, useMemo, useCallback, useEffect, useRef } from 'react'\n\nconst Footer = ({ context: { loadMore, loading } }) => {\n  return (\n    <div\n      style={{\n        padding: '2rem',\n        display: 'flex',\n        justifyContent: 'center',\n      }}\n    >\n      <button disabled={loading} onClick={loadMore}>\n        {loading ? 'Loading...' : 'Press to load more'}\n      </button>\n    </div>\n  )\n}\nexport default function App() {\n  const [users, setUsers] = useState(() => [])\n  const [loading, setLoading] = useState(false)\n\n  const loadMore = useCallback(() => {\n    setLoading(true)\n    return setTimeout(() => {\n      setUsers((users) => [...users, ...generateUsers(100, users.length)])\n      setLoading(() => false)\n    }, 500)\n  }, [setUsers, setLoading])\n\n  useEffect(() => {\n    const timeout = loadMore()\n    return () => clearTimeout(timeout)\n  }, [])\n\n  return (\n    <Virtuoso\n      context={{ loadMore, loading }}\n      style={{ height: 300 }}\n      data={users}\n      itemContent={(index, user) => {\n        return <div style={{ backgroundColor: user.bgColor }}>{user.name}</div>\n      }}\n      components={{ Footer }}\n    />\n  )\n}\n")))}f.isMDXComponent=!0}}]);