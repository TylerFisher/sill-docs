"use strict";(self.webpackChunksill_docs=self.webpackChunksill_docs||[]).push([["1388"],{3404:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>l,toc:()=>u,contentTitle:()=>r});var o=JSON.parse('{"id":"using-sill/moderation","title":"Moderation","description":"Sill offers mute functionality to let you moderate your feed. You can see all of your mute phrases and add new ones on the mute settings page. You can also use the mute buttons in your feed to mute specific items, domains, or accounts.","source":"@site/docs/2-using-sill/moderation.mdx","sourceDirName":"2-using-sill","slug":"/using-sill/moderation","permalink":"/using-sill/moderation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-using-sill/moderation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Trending","permalink":"/using-sill/trending"},"next":{"title":"Sill+","permalink":"/category/sill"}}'),n=s("5893"),i=s("65");let a={sidebar_position:3},r="Moderation",l={},u=[{value:"How mute phrases work",id:"how-mute-phrases-work",level:2},{value:"Using the mute phrases page to manage your phrases",id:"using-the-mute-phrases-page-to-manage-your-phrases",level:2},{value:"Using the mute buttons in your feed",id:"using-the-mute-buttons-in-your-feed",level:2},{value:"Mute buttons on links",id:"mute-buttons-on-links",level:3},{value:"Mute buttons on posts",id:"mute-buttons-on-posts",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"moderation",children:"Moderation"})}),"\n",(0,n.jsxs)(t.p,{children:["Sill offers mute functionality to let you moderate your feed. You can see all of your mute phrases and add new ones on the ",(0,n.jsx)(t.a,{href:"https://sill.social/moderation",children:"mute settings page"}),". You can also use the mute buttons in your feed to mute specific items, domains, or accounts."]}),"\n",(0,n.jsx)(t.h2,{id:"how-mute-phrases-work",children:"How mute phrases work"}),"\n",(0,n.jsx)(t.p,{children:"Mute phrases search for the whole phrase and are case-insensitive. Mute phrases search on the following pieces of data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Link titles"}),"\n",(0,n.jsx)(t.li,{children:"Link descriptions"}),"\n",(0,n.jsx)(t.li,{children:"Link URLs"}),"\n",(0,n.jsx)(t.li,{children:"Post author names"}),"\n",(0,n.jsx)(t.li,{children:"Post author handles"}),"\n",(0,n.jsx)(t.li,{children:"Post text"}),"\n",(0,n.jsx)(t.li,{children:"Post URLs"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Thus, you can use these phrases in many different ways. For example, you can mute specific domains. If you never want to see a blog post from my personal site or a post from me on your networks, you can add ",(0,n.jsx)(t.code,{children:"tylerjfisher.com"})," as a mute phrase. This will filter all links from my personal site as well as any posts from me because my domain is in my handle on both Bluesky and Mastodon."]}),"\n",(0,n.jsx)(t.p,{children:'Or, if you never want to hear about Elon Musk again, you could add a mute phrase for "Elon" and another for "Musk". This will filter out any links with those words in the title, description, or URL, as well as any posts that mention those words.'}),"\n",(0,n.jsx)(t.h2,{id:"using-the-mute-phrases-page-to-manage-your-phrases",children:"Using the mute phrases page to manage your phrases"}),"\n",(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.a,{href:"https://sill.social/moderation",children:"mute settings page"}),', you will see a list of your existing mute phrases and a text field to enter a new mute phrase. To create a new mute phrase, simply type the new phrase in the text field and click "Submit". To remove a mute phrase, click the "X" icon next to the phrase you want to delete.']}),"\n",(0,n.jsx)(t.h2,{id:"using-the-mute-buttons-in-your-feed",children:"Using the mute buttons in your feed"}),"\n",(0,n.jsx)(t.p,{children:"On both links and posts in your Sill feed, you will see a button with the mute icon in the toolbar. When you click that button, a menu will open giving you two options. Depending on whether you are muting a link or a post, those options will differ."}),"\n",(0,n.jsx)(t.h3,{id:"mute-buttons-on-links",children:"Mute buttons on links"}),"\n",(0,n.jsxs)(t.p,{children:['On links, your two mute options are to "Mute this link" or "Mute all links from ',(0,n.jsx)(t.code,{children:"<domain>"}),'". "Mute this link" will add the specific URL to your mute phrases. "Mute all links from ',(0,n.jsx)(t.code,{children:"<domain>"}),'" will add the host domain of the URL to your mute phrases. For example, if I want to mute ',(0,n.jsx)(t.a,{href:"https://www.nytimes.com/2024/12/31/us/raw-water-natural-springs.html",children:"this New York Times story"}),' specifically, I would click "Mute this link", and ',(0,n.jsx)(t.code,{children:"https://www.nytimes.com/2024/12/31/us/raw-water-natural-springs.html"})," would be added to my mute phrases. If I want to mute ",(0,n.jsx)(t.em,{children:"all"}),' New York Times stories, I would click "Mute all links from nytimes.com", and ',(0,n.jsx)(t.code,{children:"nytimes.com"})," would be added to my mute phrases."]}),"\n",(0,n.jsx)(t.h3,{id:"mute-buttons-on-posts",children:"Mute buttons on posts"}),"\n",(0,n.jsxs)(t.p,{children:['On posts, your two mute options are to "Mute this post" or "Mute all posts from ',(0,n.jsx)(t.code,{children:"<handle>"}),'". "Mute this post" will add the specific post URL to your mute phrases. "Mute all posts from ',(0,n.jsx)(t.code,{children:"<handle>"}),'" will add the handle of the poster to your mute phrases. For example, if I want to mute ',(0,n.jsxs)(t.a,{href:"https://bsky.app/profile/washingtonpost.com/post/3lemjc64gwc2m",children:["this post from ",(0,n.jsx)(t.code,{children:"@washingtonpost.com"})," on Bluesky"]}),' specifically, I would click "Mute this post", and ',(0,n.jsx)(t.code,{children:"https://bsky.app/profile/washingtonpost.com/post/3lemjc64gwc2m"})," would be added to my mute phrases. If I want to mute ",(0,n.jsx)(t.em,{children:"all"})," posts from ",(0,n.jsx)(t.code,{children:"washingtonpost.com"}),', I would click "Mute all posts from washingtonpost.com", and ',(0,n.jsx)(t.code,{children:"washingtonpost.com"})," would be added to my mute phrases."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return a}});var o=s(7294);let n={},i=o.createContext(n);function a(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);