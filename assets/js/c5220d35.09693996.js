"use strict";(self.webpackChunksill_docs=self.webpackChunksill_docs||[]).push([["283"],{6276:function(e,t,i){i.r(t),i.d(t,{assets:function(){return r},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return n},toc:function(){return h}});var n=i(5521),s=i(5893),o=i(65);let l={title:"Sill Beta Update #3: Notifications, Trending, Docs",slug:"sill-beta-update-3",authors:"tyler"},a=void 0,r={authorsImageUrls:[void 0]},h=[{value:"New features",id:"new-features",level:2},{value:"New documentation site and blog",id:"new-documentation-site-and-blog",level:3},{value:"Custom notifications",id:"custom-notifications",level:3},{value:"Trending",id:"trending",level:3},{value:"Fixes",id:"fixes",level:2},{value:"The road to 1.0",id:"the-road-to-10",level:2}];function c(e){let t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"It's 2025, and Sill is moving closer and closer to 1.0! This is the last major release before 1.0. I'm excited to release a slew of new features today: custom notifications, trending, and an official documentation site!"}),"\n",(0,s.jsx)(t.h2,{id:"new-features",children:"New features"}),"\n",(0,s.jsx)(t.h3,{id:"new-documentation-site-and-blog",children:"New documentation site and blog"}),"\n",(0,s.jsxs)(t.p,{children:["Sill now has a separate documentation site and blog for updates and a full explanation of how to use the various features in Sill. You can check them out at ",(0,s.jsx)(t.a,{href:"https://docs.sill.social",children:"docs.sill.social"}),", or by clicking the help link in the navigation pane on Sill."]}),"\n",(0,s.jsxs)(t.p,{children:["Today, the documentation site houses end-user documentation for all of the current features in Sill, as well as this blog for updates about the service in the future. The end-user documentation explains everything from ",(0,s.jsx)(t.a,{href:"/setting-up-sill/signing-up-for-sill",children:"how to create your account"})," and ",(0,s.jsx)(t.a,{href:"/setting-up-sill/connecting-accounts",children:"connect your social networks"})," to how to ",(0,s.jsx)(t.a,{href:"/sill-plus/daily-digest",children:"set up your Daily Digest"})," and ",(0,s.jsx)(t.a,{href:"/sill-plus/lists",children:"subscribe to lists"}),". It also goes in-depth on ",(0,s.jsx)(t.a,{href:"/how-sill-works",children:"how Sill calculates share counts"}),", ",(0,s.jsx)(t.a,{href:"/using-sill/links",children:"how various filters work"}),", and other longer explanations that I just couldn't fit into the main Sill UI."]}),"\n",(0,s.jsxs)(t.p,{children:["Before I launch 1.0, the site will also house complete self-hosting documentation. This will take some time, as the ",(0,s.jsx)(t.a,{href:"https://github.com/TylerFisher/sill",children:"main repository"})," needs a good amount of code cleanup and testing before it is really feasible to be self-hosted. However, I'm committed to making this happen before I start charging any money for Sill, so I have good motivation to do the work."]}),"\n",(0,s.jsx)(t.h3,{id:"custom-notifications",children:"Custom notifications"}),"\n",(0,s.jsxs)(t.p,{children:["When I started building Sill, one of the most exciting features I wanted to bring was a custom alert system. Today, I'm launching the first version of that in ",(0,s.jsx)(t.a,{href:"https://sill.social/notifications",children:"notifications"}),". With notifications, you can get alerted via email or RSS feed whenever Sill sees anything that catches a parameter that you define. You can create notifications based on the following parameters:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Share counts (e.g. alert me about links after 5 or more people share them)"}),"\n",(0,s.jsx)(t.li,{children:"Keyword search on link titles and descriptions"}),"\n",(0,s.jsx)(t.li,{children:"Matching on link URLs (e.g. show me all links from nytimes.com)"}),"\n",(0,s.jsx)(t.li,{children:"Keyword search on post text"}),"\n",(0,s.jsx)(t.li,{children:"Matching on post/repost authors"}),"\n",(0,s.jsx)(t.li,{children:"Service (Bluesky or Mastodon)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can also combine these parameters for more granular filters, such as links from a particular domain that reach a certain share threshold."}),"\n",(0,s.jsxs)(t.p,{children:["Read more about notifications in the ",(0,s.jsx)(t.a,{href:"/sill-plus/notifications",children:"documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"trending",children:"Trending"}),"\n",(0,s.jsxs)(t.p,{children:["As Sill reaches critical mass, there is opportunity to leverage the data Sill collects to learn interesting things about Bluesky and Mastodon at scale. My first attempt at this is Sill's new publicly available ",(0,s.jsx)(t.a,{href:"https://sill.social/links/trending",children:"Trending"})," page."]}),"\n",(0,s.jsx)(t.p,{children:"Trending shows the ten most popular links on Sill over the past three hours. Popularity is determined just like your individual Sill feed: by the number of unique accounts that share a particular link. The trending feed also shows the most popular post for a given link. This is calculated on something like an impressions model: how many timelines did this post appear in?"}),"\n",(0,s.jsx)(t.p,{children:"Trending is available to anyone, even people without a Sill account. I think it's a great way to demonstrate some of Sill's utility, so share it with your friends!"}),"\n",(0,s.jsxs)(t.p,{children:["Learn more about Trending in the ",(0,s.jsx)(t.a,{href:"/using-sill/trending",children:"documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsx)(t.p,{children:"In addition to these new features, I've made a lot of improvements to the service since the last beta update. These include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Improved URL matching"}),": Sill now does a much better job of removing unnecessary query parameters and expanding URLs from link shorteners. This is a never-ending game of whack-a-mole, but in my testing, Sill is doing a much better job over the past few weeks. I will continue to improve this as I find more query parameters/link shorteners to detect. Let me know if you see duplicates that I can address!"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Improved duplicate actor detection"}),": For people who follow the same people on both Bluesky and Mastodon, it could be frustrating to see the same post from the same person count as two shares. Now, if people use the same name or similar handles on Bluesky and Mastodon, Sill will count them as one person. If you still see duplicates, send me the duplicate case and I'll see what extra cases I can add to account for it."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Gift link detection"}),": Sill will find gift links for articles in your feed and display them for you with the gift icon in the toolbar. (In the Daily Digest and notifications, the gift link can be found next to the domain name)."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"the-road-to-10",children:"The road to 1.0"}),"\n",(0,s.jsx)(t.p,{children:"This is the last major update to Sill before 1.0.  Given that, I will use this space to talk about how pricing will work for Sill once 1.0 is launched. After feedback from some early beta testers, I've decided to keep Sill's pricing simple."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"There will always be a free version of Sill."})," The free version will allow you to connect both a Bluesky and a Mastodon account to Sill and use the web client to see your links. You will also have access to the muting features and any future moderation features I develop, as these are user safety features that everyone should have access to. The free version will not limit how often you use Sill or how much data Sill pulls in for you."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"The paid tier, called Sill+, will be $5/month or $50/year."}),(0,s.jsx)("sup",{children:"*"})," This will get you access to everything else in Sill: Daily Digests, lists, custom notifications, and other paid features I develop in the future. Sill+ will offer a 14-day free trial, and as beta testers, you'll be given that free trial automatically when Sill+ launches. I will let you know when this is happening so you have plenty of time to decide whether you want to pay for Sill+ or not."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"The open source version will have all features available."})," If you choose to self-host Sill, you'll have access to everything Sill offers for whatever your self-hosting costs. However, I expect that most self-hosting setups would cost more money than just paying for a Sill+ subscription, given the database size that Sill accumulates over time."]}),"\n",(0,s.jsx)(t.p,{children:"I'm choosing this revenue model because I want to keep Sill sustainable for the long run. That means funding both the infrastructure to run Sill and the time I dedicate to it. Based on the number of users Sill has today, I'm hopeful that this simple pricing structure can generate enough revenue for Sill to succeed."}),"\n",(0,s.jsx)("small",{children:(0,s.jsxs)(t.em,{children:[(0,s.jsx)("sup",{children:"*"})," I'm still working out how pricing will work in different currencies, but it will be something similar."]})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var n=i(7294);let s={},o=n.createContext(s);function l(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}},5521:function(e){e.exports=JSON.parse('{"permalink":"/blog/sill-beta-update-3","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-06-sill-beta-update-3.md","source":"@site/blog/2025-01-06-sill-beta-update-3.md","title":"Sill Beta Update #3: Notifications, Trending, Docs","description":"It\'s 2025, and Sill is moving closer and closer to 1.0! This is the last major release before 1.0. I\'m excited to release a slew of new features today: custom notifications, trending, and an official documentation site!","date":"2025-01-06T00:00:00.000Z","tags":[],"readingTime":5.395,"hasTruncateMarker":true,"authors":[{"name":"Tyler Fisher","title":"Founder, Sill","url":"https://tylerjfisher.com","page":{"permalink":"/blog/authors/tyler"},"socials":{"github":"https://github.com/TylerFisher","mastodon":"https://social.tylerjfisher.com/@tylrfishr","bluesky":"https://bsky.app/profile/tylerjfisher.com"},"imageURL":"https://github.com/tylerfisher.png","key":"tyler"}],"frontMatter":{"title":"Sill Beta Update #3: Notifications, Trending, Docs","slug":"sill-beta-update-3","authors":"tyler"},"unlisted":false,"nextItem":{"title":"Sill Beta Update #2: RSS, Dense Layout, and more","permalink":"/blog/sill-beta-update-2"}}')}}]);