"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[2839],{3576:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(2564),o=r(3102),i=(r(959),r(3576)),a=["components"],s={id:"footer",title:"List with Footer Example",sidebar_label:"Footer",slug:"/footer/"},l=void 0,c={unversionedId:"basics/footer",id:"basics/footer",title:"List with Footer Example",description:"Customize the Virtuoso component rendering by passing components through the components property.",source:"@site/docs/basics/footer.md",sourceDirName:"basics",slug:"/footer/",permalink:"/footer/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/basics/footer.md",tags:[],version:"current",frontMatter:{id:"footer",title:"List with Footer Example",sidebar_label:"Footer",slug:"/footer/"},sidebar:"defaultSidebar",previous:{title:"Auto Resizing",permalink:"/auto-resizing/"},next:{title:"Initial Index",permalink:"/initial-index/"}},p={},u=[],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Customize the Virtuoso component rendering by passing components through the ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," property."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Footer"),' component will render at the bottom of the list.\nThe footer can be used for loading indicators or "load more" buttons.'),(0,i.kt)("p",null,"Scroll to the bottom of the list to see ",(0,i.kt)("inlineCode",{parentName:"p"},"end reached"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\n\nexport default function App() {\n  return (\n    <Virtuoso\n      style={{ height: 400 }}\n      data={generateUsers(100)}\n      components={{\n        Footer: () => {\n          return (\n            <div\n              style={{\n                padding: '1rem',\n                textAlign: 'center',\n              }}\n            >\n              end reached\n            </div>\n          )\n        },\n      }}\n      itemContent={(index, user) => (\n        <div\n          style={{\n            backgroundColor: user.bgColor,\n            padding: '1rem 0.5rem',\n          }}\n        >\n          <h4>{user.name}</h4>\n        </div>\n      )}\n    />\n  )\n}\n")))}f.isMDXComponent=!0}}]);