"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[2663],{3576:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(2564),i=n(3102),a=(n(959),n(3576)),o=["components"],l={id:"initial-index",title:"Start from a certain item",sidebar_label:"Initial Index",slug:"/initial-index/"},s=void 0,c={unversionedId:"basics/initial-index",id:"basics/initial-index",title:"Start from a certain item",description:"The initialTopMostItemIndex property changes the initial location of the list to display the item at the specified index. You can pass in an object to achieve additional effects similar to scrollToIndex.",source:"@site/docs/basics/initial-index.md",sourceDirName:"basics",slug:"/initial-index/",permalink:"/initial-index/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/basics/initial-index.md",tags:[],version:"current",frontMatter:{id:"initial-index",title:"Start from a certain item",sidebar_label:"Initial Index",slug:"/initial-index/"},sidebar:"defaultSidebar",previous:{title:"Footer",permalink:"/footer/"},next:{title:"Range Change Callback",permalink:"/range-change-callback/"}},p={},d=[],u={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"initialTopMostItemIndex")," property changes the initial location of the list to display the item at the specified index. You can pass in an object to achieve additional effects similar to ",(0,a.kt)("a",{parentName:"p",href:"/scroll-to-index/"},"scrollToIndex"),"."),(0,a.kt)("p",null,"Note: The property applies to the list only when the component mounts.\nIf you want to change the position of the list afterward, use the ",(0,a.kt)("a",{parentName:"p",href:"/scroll-to-index/"},"scrollToIndex")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers, avatar, avatarPlaceholder } from './data'\nimport { useState, useMemo, useRef } from 'react'\n\nexport default function App() {\n  return (\n    <Virtuoso\n      style={{ height: 400 }}\n      data={generateUsers(1000)}\n      initialTopMostItemIndex={800}\n      itemContent={(index, user) => (\n        <div\n          style={{\n            backgroundColor: user.bgColor,\n            padding: '1rem 0.5rem',\n          }}\n        >\n          <h4>\n            {user.index}. {user.name}\n          </h4>\n          <div style={{ marginTop: '1rem' }}>{user.description}</div>\n        </div>\n      )}\n    />\n  )\n}\n")))}f.isMDXComponent=!0}}]);