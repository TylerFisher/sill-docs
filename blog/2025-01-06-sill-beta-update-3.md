---
title: "Sill Beta Update #3: Notifications, Trending, Docs"
slug: sill-beta-update-3
authors: tyler
---
It's 2025, and Sill is moving closer and closer to 1.0! This is the last major release before 1.0. I'm excited to release a slew of new features today: custom notifications, trending, and an official documentation site!

<!-- truncate -->

## New features

### New documentation site and blog

Sill now has a separate documentation site and blog for updates and a full explanation of how to use the various features in Sill. You can check them out at [docs.sill.social](https://docs.sill.social), or by clicking the help link in the navigation pane on Sill. 

Today, the documentation site houses end-user documentation for all of the current features in Sill, as well as this blog for updates about the service in the future. The end-user documentation explains everything from [how to create your account](/setting-up-sill/signing-up-for-sill) and [connect your social networks](/setting-up-sill/connecting-accounts) to how to [set up your Daily Digest](/sill-plus/daily-digest) and [subscribe to lists](/sill-plus/lists). It also goes in-depth on [how Sill calculates share counts](/how-sill-works), [how various filters work](/using-sill/links), and other longer explanations that I just couldn't fit into the main Sill UI.

Before I launch 1.0, the site will also house complete self-hosting documentation. This will take some time, as the [main repository](https://github.com/TylerFisher/sill) needs a good amount of code cleanup and testing before it is really feasible to be self-hosted. However, I'm committed to making this happen before I start charging any money for Sill, so I have good motivation to do the work.

### Custom notifications

When I started building Sill, one of the most exciting features I wanted to bring was a custom alert system. Today, I'm launching the first version of that in [notifications](https://sill.social/notifications). With notifications, you can get alerted via email or RSS feed whenever Sill sees anything that catches a parameter that you define. You can create notifications based on the following parameters:

- Share counts (e.g. alert me about links after 5 or more people share them)
- Keyword search on link titles and descriptions
- Matching on link URLs (e.g. show me all links from nytimes.com)
- Keyword search on post text
- Matching on post/repost authors
- Service (Bluesky or Mastodon)

You can also combine these parameters for more granular filters, such as links from a particular domain that reach a certain share threshold.

Read more about notifications in the [documentation](/sill-plus/notifications).

### Trending

As Sill reaches critical mass, there is opportunity to leverage the data Sill collects to learn interesting things about Bluesky and Mastodon at scale. My first attempt at this is Sill's new publicly available [Trending](https://sill.social/links/trending) page.

Trending shows the ten most popular links on Sill over the past three hours. Popularity is determined just like your individual Sill feed: by the number of unique accounts that share a particular link. The trending feed also shows the most popular post for a given link. This is calculated on something like an impressions model: how many timelines did this post appear in?

Trending is available to anyone, even people without a Sill account. I think it's a great way to demonstrate some of Sill's utility, so share it with your friends!

Learn more about Trending in the [documentation](/using-sill/trending).

## Fixes

In addition to these new features, I've made a lot of improvements to the service since the last beta update. These include:

- **Improved URL matching**: Sill now does a much better job of removing unnecessary query parameters and expanding URLs from link shorteners. This is a never-ending game of whack-a-mole, but in my testing, Sill is doing a much better job over the past few weeks. I will continue to improve this as I find more query parameters/link shorteners to detect. Let me know if you see duplicates that I can address!
- **Improved duplicate actor detection**: For people who follow the same people on both Bluesky and Mastodon, it could be frustrating to see the same post from the same person count as two shares. Now, if people use the same name or similar handles on Bluesky and Mastodon, Sill will count them as one person. If you still see duplicates, send me the duplicate case and I'll see what extra cases I can add to account for it.
- **Gift link detection**: Sill will find gift links for articles in your feed and display them for you with the gift icon in the toolbar. (In the Daily Digest and notifications, the gift link can be found next to the domain name).

## The road to 1.0

This is the last major update to Sill before 1.0.  Given that, I will use this space to talk about how pricing will work for Sill once 1.0 is launched. After feedback from some early beta testers, I've decided to keep Sill's pricing simple.

**There will always be a free version of Sill.** The free version will allow you to connect both a Bluesky and a Mastodon account to Sill and use the web client to see your links. You will also have access to the muting features and any future moderation features I develop, as these are user safety features that everyone should have access to. The free version will not limit how often you use Sill or how much data Sill pulls in for you.

**The paid tier, called Sill+, will be $5/month or $50/year.**<sup>*</sup> This will get you access to everything else in Sill: Daily Digests, lists, custom notifications, and other paid features I develop in the future. Sill+ will offer a 14-day free trial, and as beta testers, you'll be given that free trial automatically when Sill+ launches. I will let you know when this is happening so you have plenty of time to decide whether you want to pay for Sill+ or not.

**The open source version will have all features available.** If you choose to self-host Sill, you'll have access to everything Sill offers for whatever your self-hosting costs. However, I expect that most self-hosting setups would cost more money than just paying for a Sill+ subscription, given the database size that Sill accumulates over time.

I'm choosing this revenue model because I want to keep Sill sustainable for the long run. That means funding both the infrastructure to run Sill and the time I dedicate to it. Based on the number of users Sill has today, I'm hopeful that this simple pricing structure can generate enough revenue for Sill to succeed. 

<small>*<sup>\*</sup> I'm still working out how pricing will work in different currencies, but it will be something similar.*</small>