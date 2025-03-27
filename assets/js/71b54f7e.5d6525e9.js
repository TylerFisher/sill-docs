"use strict";(self.webpackChunksill_docs=self.webpackChunksill_docs||[]).push([["3499"],{3667:function(e,t,i){i.r(t),i.d(t,{assets:function(){return r},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return n},toc:function(){return h}});var n=i(2398),l=i(5893),a=i(65);let s={title:"Sill Beta Update #1: Lists, Permalinks, more",slug:"sill-beta-update-1",authors:"tyler"},o=void 0,r={authorsImageUrls:[void 0]},h=[{value:"New features",id:"new-features",level:2},{value:"Lists",id:"lists",level:3},{value:"Permalinks",id:"permalinks",level:3},{value:"Customizable email options",id:"customizable-email-options",level:3},{value:"Fixes and tweaks",id:"fixes-and-tweaks",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["It's been an incredible week since Sill launched in public beta. Sill has nearly 4,000 users now, and Sill has been mentioned in ",(0,l.jsx)(t.a,{href:"https://www.niemanlab.org/2024/11/remember-nuzzel-a-similar-news-aggregating-tool-now-exists-for-bluesky/",children:"Nieman Lab"}),", ",(0,l.jsx)(t.a,{href:"https://www.theverge.com/2024/11/24/24303359/surveilled-buy-now-documentaries-tech-dune-installer",children:"The Verge"}),", ",(0,l.jsx)(t.a,{href:"https://techcrunch.com/2024/11/25/sills-new-app-rounds-up-the-best-links-from-your-bluesky-and-mastodon-network/",children:"TechCrunch"}),", ",(0,l.jsx)(t.a,{href:"https://waxy.org/2024/11/sill-find-trending-links-from-your-bluesky-and-mastodon-network/",children:"Waxy.org"}),", ",(0,l.jsx)(t.a,{href:"https://changelog.com/news/122",children:"The Changelog"}),", ",(0,l.jsx)(t.a,{href:"https://lifehacker.com/tech/sill-app-links-in-bluesky-mastodon-feeds",children:"Lifehacker"})," and a lot more, especially natively on Bluesky and Mastodon. Thank you all for giving Sill a try and telling your friends!"]}),"\n",(0,l.jsxs)(t.p,{children:["Today, Sill is ",(0,l.jsx)(t.a,{href:"https://www.producthunt.com/posts/sill",children:"live on Product Hunt"}),"! If you're a Product Hunt user, I'd love your support over there."]}),"\n",(0,l.jsx)(t.p,{children:"To kick off this week, I'm excited to announce some much-requested features are launching as the next phase of the beta process, including lists, permalinks for individual links, some redesigned navigation, and more."}),"\n",(0,l.jsx)(t.h2,{id:"new-features",children:"New features"}),"\n",(0,l.jsx)(t.p,{children:"Today I'm launching a set of new features that are among the most requested in the time since I've launched."}),"\n",(0,l.jsx)(t.h3,{id:"lists",children:"Lists"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:"The list feature will be a paid feature after Sill's beta period ends."})}),"\n",(0,l.jsx)(t.p,{children:"One of the most powerful features of both Bluesky and Mastodon is the ability to create custom lists and feeds. Sill can now collect links from any of your lists or feeds on Bluesky or Mastodon. To enable this, head to the connect screen and turn on the lists you're interested in. You will see all of the lists you have either created or subscribed to under each account you've connected in Sill."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116769/Screenshot_2024-12-01_at_10.01.23_PM_towgem.png",alt:"A screenshot of the lists UI in Sill"})}),"\n",(0,l.jsx)(t.p,{children:"When you enable a list in Sill, Sill will fetch links from the last 24 hours in that list immediately and continue to fetch links from that list going forward. Those links will be aggregated as part of your main feed in Sill and will go into your daily email if you have enabled the email. In the web client, you can also filter down to see just the links from an individual list."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116796/Screenshot_2024-12-01_at_10.09.09_PM_isfmhi.png",alt:"A screenshot of the filters UI in Sill with an arrow pointing to the new lists dropdown"})}),"\n",(0,l.jsx)(t.p,{children:"For Bluesky users, note that Sill's link collection works best with chronological feeds. Sill will stop fetching when it encounters a post more than 24 hours old. With algorithmic feeds like Discover, that can happen pretty quickly, so Sill might not pick up very many links."}),"\n",(0,l.jsx)(t.p,{children:"On Mastodon, lists work differently. You can only add people you already follow to lists, so really, this is just another way of filtering your Sill feed down."}),"\n",(0,l.jsx)(t.p,{children:"As always, give me your feedback on this feature. Does it meet your expectations? What else would you want from lists?"}),"\n",(0,l.jsx)(t.h3,{id:"permalinks",children:"Permalinks"}),"\n",(0,l.jsx)(t.p,{children:"Permalinks are accessible from the daily email, which will be a paid feature after Sill's beta period ends."}),"\n",(0,l.jsxs)(t.p,{children:['A key frustration in the initial Sill launch was the inability to see anything about the individual posts discussing a link in the daily email. I have solved this with permalinks. Starting after this launch, in the daily email you will be able to click on the "Shared by ',(0,l.jsx)(t.code,{children:"<n>"}),' accounts" language below each link.']}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116839/Screenshot_2024-12-01_at_10.19.22_PM_iad8uw.png",alt:'A screenshot of a link in a Sill email with language below that says "Shared by 3 accounts" that links to a permalink page'})}),"\n",(0,l.jsx)(t.p,{children:"Doing so will open a permalink route in the Sill web client where you can see all of the posts about a particular links."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116886/Screenshot_2024-12-01_at_10.17.26_PM_rnppqh.png",alt:"A screenshot of the permalink page, showing a link card and the three posts about the link"})}),"\n",(0,l.jsx)(t.p,{children:"Note that these permalinks are not shareable. They require being logged into Sill, and will only show you posts from accounts you follow."}),"\n",(0,l.jsx)(t.h3,{id:"customizable-email-options",children:"Customizable email options"}),"\n",(0,l.jsx)(t.p,{children:"The daily email will be a paid feature after Sill's beta period ends."}),"\n",(0,l.jsx)(t.p,{children:"I've added a couple additional options for the daily email:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"You can now customize the amount of links you receive in an email. You can get anywhere from 1-20."}),"\n",(0,l.jsx)(t.li,{children:"You can hide reposts from counting in the email's calculation of your top links."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1733116877/Screenshot_2024-12-01_at_10.22.23_PM_ow58fd.png",alt:"A screenshot of the new email settings page, which allows you to hide reposts via a checkbox and use a slider to set the number of links you receive per email."})}),"\n",(0,l.jsx)(t.p,{children:"To customize these options, visit the new(!) email settings page. What else would you like to customize in your email?"}),"\n",(0,l.jsx)(t.h2,{id:"fixes-and-tweaks",children:"Fixes and tweaks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:'Redesigned navigation: You may have noticed in the screenshots above that I tweaked the navigation. The email settings now have their own page, and I\'ve renamed "Home" to "Links" so it is clearer where to find that functionality.'}),"\n",(0,l.jsx)(t.li,{children:"No more gifs: I am now filtering out any link that ends in .gif by default."}),"\n",(0,l.jsx)(t.li,{children:"Better link matching: I wasn't converting all links to lowercase before matching them. That's fixed now, so if someone capitalizes a letter in a link, it shouldn't matter."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},65:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(7294);let l={},a=n.createContext(l);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},2398:function(e){e.exports=JSON.parse('{"permalink":"/blog/sill-beta-update-1","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-02-sill-beta-update-1.md","source":"@site/blog/2024-12-02-sill-beta-update-1.md","title":"Sill Beta Update #1: Lists, Permalinks, more","description":"It\'s been an incredible week since Sill launched in public beta. Sill has nearly 4,000 users now, and Sill has been mentioned in Nieman Lab, The Verge, TechCrunch, Waxy.org, The Changelog, Lifehacker and a lot more, especially natively on Bluesky and Mastodon. Thank you all for giving Sill a try and telling your friends!","date":"2024-12-02T00:00:00.000Z","tags":[],"readingTime":3.895,"hasTruncateMarker":true,"authors":[{"name":"Tyler Fisher","title":"Founder, Sill","url":"https://tylerjfisher.com","page":{"permalink":"/blog/authors/tyler"},"socials":{"github":"https://github.com/TylerFisher","mastodon":"https://social.tylerjfisher.com/@tylrfishr","bluesky":"https://bsky.app/profile/tylerjfisher.com"},"imageURL":"https://github.com/tylerfisher.png","key":"tyler"}],"frontMatter":{"title":"Sill Beta Update #1: Lists, Permalinks, more","slug":"sill-beta-update-1","authors":"tyler"},"unlisted":false,"prevItem":{"title":"Sill Beta Update #2: RSS, Dense Layout, and more","permalink":"/blog/sill-beta-update-2"},"nextItem":{"title":"Introducing Sill","permalink":"/blog/introducing-sill"}}')}}]);