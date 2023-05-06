"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[6103],{829:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(3684),r=t(959),o=t(8145);const l=function(e){var n=e.children,t=e.template,l=void 0===t?"react":t,i=e.file,s=void 0===i?"/App.js":i;if(e.live){var c,m=n.split(/(```([\s\S]*?[^\\])```)/gm).filter((function(e){return e.startsWith("```")})),u=m.reduce((function(e,n){var t,a,r,o=n.replace(/```/g,"").split("\n"),l=o[0],i=o.slice(1),s=null!=(t=null==(a=l.match(/file=(.+)/))?void 0:a[1])?t:"";return Object.assign({},e,((r={})[s]={code:i.join("\n")},r))}),{});return r.createElement(a.xR,{editorHeight:600,customSetup:{dependencies:Object.assign({"react-virtuoso":"latest"},e["include-data"]?{faker:"5.1.0",lodash:"latest"}:{},"@mui/material"===e.import?{"@mui/material":"latest","@emotion/styled":"latest","@emotion/react":"latest"}:{},"react-table"===e.import?{"react-table":"latest"}:{},"react-sortable-hoc"===e.import?{"react-sortable-hoc":"^1.11.0"}:{},"react-beautiful-dnd"===e.import?{"react-beautiful-dnd":"latest"}:{},"@emotion/styled"===e.import?{"@emotion/styled":"latest","@emotion/react":"latest"}:{})},files:n?m.length?u:Object.assign((c={},c[s]=n,c),e["include-data"]?{"/data.js":{code:"\nimport faker from 'faker'\nimport { groupBy } from 'lodash'\nimport React from 'react'\n\nconst randomHeight = () => Math.floor(Math.random() * 30 + 24)\n\nconst generateRandomItems = (count) => {\n  return Array.from({ length: count }).map((_, i) => ({\n    text: `Item ${i + 1}`,\n    height: randomHeight(),\n    longText: faker.lorem.paragraphs(1),\n  }))\n}\n\nconst generated = []\n\nexport function toggleBg(index) {\n  return index % 2 ? '#f5f5f5' : 'white'\n}\n\nexport function user(index = 0) {\n  let firstName = faker.name.firstName()\n  let lastName = faker.name.lastName()\n\n  return {\n    index: index + 1,\n    bgColor: toggleBg(index),\n    name: `${firstName} ${lastName}`,\n    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,\n    jobTitle: faker.name.jobTitle(),\n    description: faker.lorem.sentence(10),\n    longText: faker.lorem.paragraphs(1),\n  }\n}\n\nexport const getUser = (index) => {\n  if (!generated[index]) {\n    generated[index] = user(index)\n  }\n\n  return generated[index]\n}\n\nconst userSorter = (a, b) => {\n  if (a.name < b.name) {\n    return -1\n  }\n  if (a.name > b.name) {\n    return 1\n  }\n  return 0\n}\n\nexport function generateUsers(length, startIndex = 0) {\n  return Array.from({ length }).map((_, i) => getUser(i + startIndex))\n}\n\nexport function generateGroupedUsers(length) {\n  const users = Array.from({ length })\n    .map((_, i) => getUser(i))\n    .sort(userSorter)\n  const groupedUsers = groupBy(users, (user) => user.name[0])\n  const groupCounts = Object.values(groupedUsers).map((users) => users.length)\n  const groups = Object.keys(groupedUsers)\n\n  return { users, groupCounts, groups }\n}\n\nexport const avatar = () =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: 'blue',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n        paddingTop: 15,\n        paddingLeft: 15,\n        color: 'white',\n        boxSizing: 'border-box'\n      },\n    },\n    \"AB\"\n  )\n\nexport const avatarPlaceholder = (text = ' ') =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: '#eef2f4',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n      },\n    },\n    text\n  )\n\nconst range = (len) => {\n  const arr = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = () => {\n  const statusChance = Math.random()\n  return {\n    firstName: faker.name.firstName(),\n    lastName: faker.name.lastName(),\n    age: Math.floor(Math.random() * 30),\n    visits: Math.floor(Math.random() * 100),\n    progress: Math.floor(Math.random() * 100),\n    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',\n  }\n}\n\nexport function makeData(...lens) {\n  const makeDataLevel = (depth = 0) => {\n    const len = lens[depth]\n    return range(len).map((d) => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n",hidden:!0}}:{}):void 0,template:l,theme:o.FM})}return r.createElement(a.oT,null,r.createElement(a.uR,{theme:o.FM},r.createElement("button",{className:"sandpack__copy-button",onClick:function(){navigator.clipboard.writeText(n.trim())}},r.createElement("svg",{fill:"none",height:"100%",viewBox:"0 0 12 13",width:"100%"},r.createElement("g",{clipPath:"url(#a)"},r.createElement("path",{d:"M8.21 1.344H2.317c-.54 0-.983.463-.983 1.03v7.212h.983V2.374H8.21v-1.03Zm1.474 2.06H4.281c-.54 0-.983.464-.983 1.03v7.213c0 .566.442 1.03.983 1.03h5.403c.54 0 .983-.464.983-1.03V4.435c0-.567-.442-1.03-.983-1.03Zm0 8.243H4.281V4.435h5.403v7.212Z",fill:"currentColor"})),r.createElement("defs",null,r.createElement("clipPath",{id:"a"},r.createElement("path",{d:"M0 0h12v12H0z",fill:"currentColor",transform:"translate(0 .676)"}))))),r.createElement(a.pq,{showLineNumbers:!0,code:n.trim(),readOnly:!0,fileType:(e.className||"language-js").replace(/language-/,"")})))}},8317:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var a=t(959),r=t(5924),o=t(9120),l=t(8559),i=t(531),s=t(5255),c=t(3989),m=t(2564),u=t(4186),d=t(720);function f(e){var n=e.nextItem,t=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){var e,n=(0,i.C)(),t=n.assets,r=n.metadata,l=r.title,s=r.description,c=r.date,m=r.tags,u=r.authors,d=r.frontMatter,f=d.keywords,g=null!=(e=t.image)?e:d.image;return a.createElement(o.d,{title:l,description:s,keywords:f,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&a.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}var p=t(701);function v(e){var n=e.sidebar,t=e.children,r=(0,i.C)(),o=r.metadata,l=r.toc,m=o.nextItem,u=o.prevItem,d=o.frontMatter,g=d.hide_table_of_contents,v=d.toc_min_heading_level,h=d.toc_max_heading_level;return a.createElement(s.Z,{sidebar:n,toc:!g&&l.length>0?a.createElement(p.Z,{toc:l,minHeadingLevel:v,maxHeadingLevel:h}):void 0},a.createElement(c.Z,null,t),(m||u)&&a.createElement(f,{nextItem:m,prevItem:u}))}function h(e){var n=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},a.createElement(g,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(n,null))))}},701:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(2564),r=t(3102),o=t(959),l=t(5924),i=t(1332);const s={tableOfContents:"tableOfContents_uQu1",docItemContainer:"docItemContainer_Lh80"};var c=["className"],m="table-of-contents__link toc-highlight",u="table-of-contents__link--active";function d(e){var n=e.className,t=(0,r.Z)(e,c);return o.createElement("div",{className:(0,l.Z)(s.tableOfContents,"thin-scrollbar",n)},o.createElement(i.Z,(0,a.Z)({},t,{linkClassName:m,linkActiveClassName:u})))}},1332:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(2564),r=t(3102),o=t(959),l=t(7337),i=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,o=(0,r.Z)(e,i);t>=0?n[t].children.push(o):a.push(o)})),a}function c(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function m(e){var n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function u(e,n){var t,a,r=n.anchorTopOffset,o=e.find((function(e){return m(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(o))?o:null!=(a=e[e.indexOf(o)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,o.useRef)(0),n=(0,l.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,o.useRef)(void 0),t=d();(0,o.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=u(i,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function g(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?o.createElement("ul",{className:r?void 0:t},n.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(g,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}const p=o.memo(g);var v=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,x=(0,r.Z)(e,v),E=(0,l.L)(),k=null!=h?h:E.tableOfContents.minHeadingLevel,L=null!=b?b:E.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,o.useMemo)((function(){return c({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:k,maxHeadingLevel:L});return f((0,o.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:k,maxHeadingLevel:L}}),[u,g,k,L])),o.createElement(p,(0,a.Z)({toc:N,className:i,linkClassName:u},x))}}}]);