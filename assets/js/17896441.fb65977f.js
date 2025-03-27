"use strict";(self.webpackChunksill_docs=self.webpackChunksill_docs||[]).push([["7048"],{5427:function(e,t,n){n.d(t,{Z:()=>f});var s=n("5893");n("7294");var i=n("7026"),l=n("6025"),r=n("4819");function a(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("4681"),h=n("5094");function b(e){let{className:t}=e;return(0,s.jsx)(h.Z,{type:"caution",title:(0,s.jsx)(d,{}),className:(0,i.Z)(t,m.k.common.draftBanner),children:(0,s.jsx)(u,{})})}function x(e){let{className:t}=e;return(0,s.jsx)(h.Z,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,i.Z)(t,m.k.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function v(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{...e})]})}function f(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||i.unlisted)&&(0,s.jsx)(v,{}),i.draft&&(0,s.jsx)(b,{})]})}},2520:function(e,t,n){n.d(t,{Z:()=>f});var s=n("5893");n("7294");var i=n("7026"),l=n("4681"),r=n("9369"),a=n("9246"),o=n("3012"),c=n("6025"),d=n("4757");function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let m="breadcrumbHomeIcon_YNFT";function h(){let e=(0,d.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:m})})})}let b="breadcrumbsContainer_Z_bl";function x(e){let{children:t,href:n,isLast:i}=e,l="breadcrumbs__link";return i?(0,s.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,s.jsx)(o.Z,{className:l,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:l,children:t})}function v(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return(0,s.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(l+1)})]})}function f(){let e=(0,r.s1)(),t=(0,a.Ns)();return e?(0,s.jsx)("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,b),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(h,{}),e.map((t,n)=>{let i=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(v,{active:i,index:n,addMicrodata:!!l,children:(0,s.jsx)(x,{href:l,isLast:i,children:t.label})},n)})]})}):null}},4219:function(e,t,n){n.r(t),n.d(t,{default:()=>R});var s=n("5893"),i=n("7294"),l=n("2743"),r=n("5346");let a=i.createContext(null);function o(e){var t;let{children:n,content:l}=e;let r=(t=l,(0,i.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]));return(0,s.jsx)(a.Provider,{value:r,children:n})}function c(){let e=(0,i.useContext)(a);if(null===e)throw new r.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("7026"),m=n("4704"),h=n("437");function b(){let{metadata:e}=c();return(0,s.jsx)(h.Z,{previous:e.previous,next:e.next})}var x=n("9580"),v=n("6035"),f=n("4681"),p=n("9701"),j=n("9230");function g(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:l}=e,r=l.length>0,a=!!(t||n||i);return r||a?(0,s.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",f.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(p.Z,{tags:l})})}),a&&(0,s.jsx)(j.Z,{className:(0,u.Z)("margin-top--sm",f.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}var Z=n("7455"),_=n("6365"),C=n("6025");let N={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function L(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",N.tocCollapsibleButton,!t&&N.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(C.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let k={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function T(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:l}=e,{collapsed:r,toggleCollapsed:a}=(0,Z.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(k.tocCollapsible,!r&&k.tocCollapsibleExpanded,n),children:[(0,s.jsx)(L,{collapsed:r,onClick:a}),(0,s.jsx)(Z.z,{lazy:!0,className:k.tocCollapsibleContent,collapsed:r,children:(0,s.jsx)(_.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:l})})]})}let y="tocMobile_ITEo";function w(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(T,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,y)})}var B=n("1397");function E(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(B.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var I=n("4403"),M=n("4295");function A(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return!t.hide_title&&void 0===n?e.title:null}();return(0,s.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(I.Z,{as:"h1",children:n})}),(0,s.jsx)(M.Z,{children:t})]})}var H=n("2520"),V=n("5427");let O={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function P(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),i=e.hide_table_of_contents,l=!i&&t.length>0,r=l?(0,s.jsx)(w,{}):void 0;return{hidden:i,mobile:r,desktop:l&&("desktop"===n||"ssr"===n)?(0,s.jsx)(E,{}):void 0}}(),{metadata:i}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&O.docItemCol),children:[(0,s.jsx)(V.Z,{metadata:i}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:O.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(H.Z,{}),(0,s.jsx)(v.Z,{}),n.mobile,(0,s.jsx)(A,{children:t}),(0,s.jsx)(g,{})]}),(0,s.jsx)(b,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function R(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(o,{content:e.content,children:(0,s.jsxs)(l.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(P,{children:(0,s.jsx)(n,{})})]})})}},437:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(5893);n(7294);var i=n(6025),l=n(790);function r(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(l.Z,{...t,subLabel:(0,s.jsx)(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(l.Z,{...n,subLabel:(0,s.jsx)(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},6035:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(5893);n(7294);var i=n(7026),l=n(6025),r=n(4681),a=n(8529);function o(e){let{className:t}=e,n=(0,a.E)();return n.badge?(0,s.jsx)("span",{className:(0,i.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},9580:function(e,t,n){n.d(t,{Z:function(){return v}});var s=n(5893);n(7294);var i=n(7026),l=n(2933),r=n(3012),a=n(6025),o=n(8057),c=n(4681),d=n(3896),u=n(8529);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:i}=e;return(0,s.jsx)(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(r.Z,{to:n,onClick:i,children:(0,s.jsx)(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let t,{className:n,versionMetadata:r}=e,{siteConfig:{title:a}}=(0,l.Z)(),{pluginId:u}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(u),{latestDocSuggestion:x,latestVersionSuggestion:v}=(0,o.Jo)(u);let f=x??(t=v).docs.find(e=>e.id===t.mainDocId);return(0,s.jsxs)("div",{className:(0,i.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h,{siteTitle:a,versionMetadata:r})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(b,{versionLabel:v.label,to:f.path,onClick:()=>m(v.name)})})]})}function v(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,s.jsx)(x,{className:t,versionMetadata:n}):null}},1397:function(e,t,n){n.d(t,{Z:()=>a});var s=n("5893");n("7294");var i=n("7026"),l=n("6365");let r="tableOfContents_bqdL";function a(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.Z)(r,"thin-scrollbar",t),children:(0,s.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},6365:function(e,t,n){n.d(t,{Z:()=>c});var s=n("5893"),i=n("7294"),l=n("140");function r(e){let t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}var a=n("3012");let o=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:r}=t;return n.length?(0,s.jsx)("ul",{className:r?void 0:i,children:n.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsx)(a.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,s.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),b=d??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:s,maxHeadingLevel:i});return(n=t).level>=s&&n.level<=i?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t});let s=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)}),s}(t),minHeadingLevel:n,maxHeadingLevel:s}),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:x});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:s,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:a}=e;function o(){var e;let o=(e=s,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,s=e.find(e=>r(e).top>=n);if(s){var i;return(i=r(s)).top>0&&i.bottom<window.innerHeight/2?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,s=[];for(let e=t;e<=n;e+=1)s.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:n.current}),d=o.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(i),n.classList.add(i),t.current=n):n.classList.remove(i)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,i.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:x}},[a,c,b,x])),(0,s.jsx)(o,{toc:v,className:n,linkClassName:a,...m})}}}]);