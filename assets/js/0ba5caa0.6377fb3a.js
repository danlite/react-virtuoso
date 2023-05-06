"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[9284],{3576:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return n?o.createElement(u,a(a({ref:t},d),{},{components:n})):o.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(2564),i=n(3102),r=(n(959),n(3576)),a=["components"],l={id:"migrate-v0-to-v1",title:"Migrate from v0 to v1",sidebar_label:"Migrate from v0 to v1",slug:"/migrate-v0-to-v1/"},s=void 0,p={unversionedId:"migrate-v0-to-v1",id:"migrate-v0-to-v1",title:"Migrate from v0 to v1",description:"Version 1. of Virtuoso is a complete rewrite from v0., addressing the architectural limitations of the first version and enabling a smooth path to introduce new features.",source:"@site/docs/migrate-v0-to-v1.md",sourceDirName:".",slug:"/migrate-v0-to-v1/",permalink:"/migrate-v0-to-v1/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/migrate-v0-to-v1.md",tags:[],version:"current",frontMatter:{id:"migrate-v0-to-v1",title:"Migrate from v0 to v1",sidebar_label:"Migrate from v0 to v1",slug:"/migrate-v0-to-v1/"},sidebar:"defaultSidebar",previous:{title:"Virtuoso Grid",permalink:"/virtuoso-grid-api-reference/"}},d={},c=[{value:"v1 Primary Benefits",id:"v1-primary-benefits",level:2},{value:"What&#39;s New in V1",id:"whats-new-in-v1",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"<code>item</code> is now <code>itemContent</code>",id:"item-is-now-itemcontent",level:3},{value:"<code>group</code> is now <code>groupContent</code>",id:"group-is-now-groupcontent",level:3},{value:"<code>topItems</code> is now <code>topItemCount</code>",id:"topitems-is-now-topitemcount",level:3},{value:"<code>itemHeight</code> is now <code>fixedItemHeight</code>",id:"itemheight-is-now-fixeditemheight",level:3},{value:"<code>scrollingStateChange</code> is now <code>isScrolling</code>",id:"scrollingstatechange-is-now-isscrolling",level:3},{value:"<code>maxHeightCacheSize</code> is gone",id:"maxheightcachesize-is-gone",level:3},{value:"<code>adjustForPrependedItems</code> is gone",id:"adjustforprependeditems-is-gone",level:3},{value:"<code>HeaderContainer</code> and <code>FooterContainer</code> are gone",id:"headercontainer-and-footercontainer-are-gone",level:3},{value:"All <code>*Container</code> Props are Migrated to the <code>components</code> Dictionary Property",id:"all-container-props-are-migrated-to-the-components-dictionary-property",level:3},{value:"<code>emptyComponent</code> is now <code>components.EmptyPlaceholder</code>",id:"emptycomponent-is-now-componentsemptyplaceholder",level:3},{value:"<code>footer</code> is now <code>components.Footer</code>",id:"footer-is-now-componentsfooter",level:3},{value:"<code>scrollSeek</code> is now <code>scrollSeekConfiguration</code>",id:"scrollseek-is-now-scrollseekconfiguration",level:3}],m={toc:c},h="wrapper";function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)(h,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.*")," of Virtuoso is a complete rewrite from ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.*"),", addressing the architectural limitations of the first version and enabling a smooth path to introduce new features. "),(0,r.kt)("h2",{id:"v1-primary-benefits"},"v1 Primary Benefits"),(0,r.kt)("p",null,"The biggest unresolved challenge in v0 was the so-called ",(0,r.kt)("em",{parentName:"p"},"reverse")," (bottom to top) scrolling mode, which is typical for ",(0,r.kt)("strong",{parentName:"p"},"chat")," and ",(0,r.kt)("strong",{parentName:"p"},"feed"),' interfaces.\nPrepending items with unknown height to the top of the list was not part of the original design and was not handled well, causing visual glitches and "jumps". This should work fine in v1.'),(0,r.kt)("h2",{id:"whats-new-in-v1"},"What's New in V1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scrollToIndex")," method now works supports ",(0,r.kt)("inlineCode",{parentName:"li"},'"smooth"'),' behavior. Previously, this was undocumented and "use at your own risk". Check the ',(0,r.kt)("a",{parentName:"li",href:"./scroll-to-index"},"source code in the example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"followOutput")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},'"smooth"'),", which means that new items will gradually push the existing content upwards. "),(0,r.kt)("li",{parentName:"ul"},"As an alternative to ",(0,r.kt)("inlineCode",{parentName:"li"},"totalCount"),", the component now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"data: any[]"),", which is then used to infer the total count of the items. Each item is passed as a second argument in the ",(0,r.kt)("inlineCode",{parentName:"li"},"itemContent")," callback."),(0,r.kt)("li",{parentName:"ul"},"Prepending items is now much easier, using ",(0,r.kt)("inlineCode",{parentName:"li"},"firstItemIndex")," rather than the ",(0,r.kt)("inlineCode",{parentName:"li"},"adjustForPrependedItems")," method. Check the ",(0,r.kt)("a",{parentName:"li",href:"/prepend-items/"},"prepend items example")),(0,r.kt)("li",{parentName:"ul"},"Starting the list from the bottom and scrolling up with unknown item sizes should no longer cause glitches and jumps."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Header")," component is introduced, works in both grouped and flat mode."),(0,r.kt)("li",{parentName:"ul"},"All unknown properties are now directly passed as attributes to the scroller DOM element - including event handlers like ",(0,r.kt)("inlineCode",{parentName:"li"},"onScroll"),". This should eliminate the need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"ScrollContainer"),".")),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,r.kt)("p",null,"V1 comes with some property renames, new properties, changed DOM structure, and some behavior tweaks.\nMost of the old properties have been kept for making the migration easier, with warnings in the console pointing to the new names.\nThe new DOM structure (and the way to customize it) are documented in the ",(0,r.kt)("a",{parentName:"p",href:"/customize-structure/"},"Customize Structure")),(0,r.kt)("h3",{id:"item-is-now-itemcontent"},(0,r.kt)("inlineCode",{parentName:"h3"},"item")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"itemContent")),(0,r.kt)("p",null,"This is probably the first change you will encounter. Just rename the property and you should be fine."),(0,r.kt)("h3",{id:"group-is-now-groupcontent"},(0,r.kt)("inlineCode",{parentName:"h3"},"group")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"groupContent")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"item"),", this is a rename without a change in the behavior."),(0,r.kt)("h3",{id:"topitems-is-now-topitemcount"},(0,r.kt)("inlineCode",{parentName:"h3"},"topItems")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"topItemCount")),(0,r.kt)("p",null,"Rename, no change in behavior."),(0,r.kt)("h3",{id:"itemheight-is-now-fixeditemheight"},(0,r.kt)("inlineCode",{parentName:"h3"},"itemHeight")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"fixedItemHeight")),(0,r.kt)("p",null,"Rename, no change in behavior."),(0,r.kt)("h3",{id:"scrollingstatechange-is-now-isscrolling"},(0,r.kt)("inlineCode",{parentName:"h3"},"scrollingStateChange")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"isScrolling")),(0,r.kt)("p",null,"Rename, no change in behavior."),(0,r.kt)("h3",{id:"maxheightcachesize-is-gone"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxHeightCacheSize")," is gone"),(0,r.kt)("p",null,"An optimization in the internal data structure made this property unnecessary."),(0,r.kt)("h3",{id:"adjustforprependeditems-is-gone"},(0,r.kt)("inlineCode",{parentName:"h3"},"adjustForPrependedItems")," is gone"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItemIndex: number")," instead. Check the ",(0,r.kt)("a",{parentName:"p",href:"/prepend-items/"},"prepend items example")),(0,r.kt)("h3",{id:"headercontainer-and-footercontainer-are-gone"},(0,r.kt)("inlineCode",{parentName:"h3"},"HeaderContainer")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"FooterContainer")," are gone"),(0,r.kt)("p",null,"The element type of the wrapper elements can be changed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerFooterTag"),"."),(0,r.kt)("h3",{id:"all-container-props-are-migrated-to-the-components-dictionary-property"},"All ",(0,r.kt)("inlineCode",{parentName:"h3"},"*Container")," Props are Migrated to the ",(0,r.kt)("inlineCode",{parentName:"h3"},"components")," Dictionary Property"),(0,r.kt)("p",null,"See how it works in the ",(0,r.kt)("a",{parentName:"p",href:"/customize-structure/"},"Customize Structure"),".\n",(0,r.kt)("strong",{parentName:"p"},"Note:")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"components.List")," (previously ",(0,r.kt)("inlineCode",{parentName:"p"},"ListContainer"),") now needs a ",(0,r.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," wrapped component, rather than passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"listRef")," property."),(0,r.kt)("h3",{id:"emptycomponent-is-now-componentsemptyplaceholder"},(0,r.kt)("inlineCode",{parentName:"h3"},"emptyComponent")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"components.EmptyPlaceholder")),(0,r.kt)("p",null,"A rename. No change in the behavior."),(0,r.kt)("h3",{id:"footer-is-now-componentsfooter"},(0,r.kt)("inlineCode",{parentName:"h3"},"footer")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"components.Footer")),(0,r.kt)("p",null,"A rename. No change in the behavior."),(0,r.kt)("h3",{id:"scrollseek-is-now-scrollseekconfiguration"},(0,r.kt)("inlineCode",{parentName:"h3"},"scrollSeek")," is now ",(0,r.kt)("inlineCode",{parentName:"h3"},"scrollSeekConfiguration")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollSeek.placeholder")," is moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"components.ScrollSeekPlaceholder")))}u.isMDXComponent=!0}}]);