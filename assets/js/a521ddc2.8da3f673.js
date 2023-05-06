"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[7007],{3576:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(2564),o=t(3102),a=(t(959),t(3576)),i=["components"],l={id:"keyboard-navigation",title:"Keyboard Navigation",sidebar_label:"Keyboard Navigation",slug:"/keyboard-navigation/"},s=void 0,c={unversionedId:"scenarios/keyboard-navigation",id:"scenarios/keyboard-navigation",title:"Keyboard Navigation",description:"The Virtuoso component exposes an imperative scrollIntoView method, which makes it easy to implement keyboard navigation.",source:"@site/docs/scenarios/keyboard-navigation.md",sourceDirName:"scenarios",slug:"/keyboard-navigation/",permalink:"/keyboard-navigation/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/keyboard-navigation.md",tags:[],version:"current",frontMatter:{id:"keyboard-navigation",title:"Keyboard Navigation",sidebar_label:"Keyboard Navigation",slug:"/keyboard-navigation/"},sidebar:"defaultSidebar",previous:{title:"Endless Scrolling",permalink:"/endless-scrolling/"},next:{title:"MUI List",permalink:"/material-ui-endless-scrolling/"}},d={},u=[],p={toc:u},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Virtuoso component exposes an imperative ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollIntoView")," method, which makes it easy to implement keyboard navigation.\nAs an optional configuration, the method accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"behavior: 'smooth' | 'auto'"),", and a ",(0,a.kt)("inlineCode",{parentName:"p"},"done")," callback which gets called after the scrolling is done.\nSee the example below for its usage."),(0,a.kt)("p",null,"To test the example below, click anywhere in the list and press up / down arrows. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport React from 'react'\n\nexport default function App( ) {\n  const ref = React.useRef(null)\n  const [currentItemIndex, setCurrentItemIndex] = React.useState(-1)\n  const listRef = React.useRef(null)\n\n  const keyDownCallback = React.useCallback(\n    (e) => {\n      let nextIndex = null\n\n      if (e.code === 'ArrowUp') {\n        nextIndex = Math.max(0, currentItemIndex - 1)\n      } else if (e.code === 'ArrowDown') {\n        nextIndex = Math.min(99, currentItemIndex + 1)\n      }\n\n      if (nextIndex !== null) {\n        ref.current.scrollIntoView({\n          index: nextIndex,\n          behavior: 'auto',\n          done: () => {\n            setCurrentItemIndex(nextIndex)\n          },\n        })\n        e.preventDefault()\n      }\n    },\n    [currentItemIndex, ref, setCurrentItemIndex]\n  )\n\n  const scrollerRef = React.useCallback(\n    (element) => {\n      if (element) {\n        element.addEventListener('keydown', keyDownCallback)\n        listRef.current = element\n      } else {\n        listRef.current.removeEventListener('keydown', keyDownCallback)\n      }\n    },\n    [keyDownCallback]\n  )\n\n  return (\n    <Virtuoso\n      ref={ref}\n      data={generateUsers(200)}\n      itemContent={(index, user) => (\n        <div\n          style={{\n            backgroundColor: user.bgColor,\n            borderColor: index === currentItemIndex ? 'blue' : 'transparent',\n            borderSize: '1px',\n            borderStyle: 'solid',\n            padding: '0.5rem 0.2rem',\n          }}\n        >\n          <h4>{user.name}</h4>\n          <div style={{ marginTop: '1rem' }}>{user.description}</div>\n        </div>\n      )}\n      scrollerRef={scrollerRef}\n      style={{ height: 600 }}\n    />\n  )\n}\n")))}f.isMDXComponent=!0}}]);