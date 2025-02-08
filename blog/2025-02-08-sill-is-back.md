---
title: "Sill is back!"
slug: sill-is-back
authors: tyler
---

Learn how to get your Sill account running again

<!-- truncate -->

Hello everyone,

First, I want to apologize for the extended downtime Sill experienced this week. The hardware underpinning Sill's infrastructure failed, and I had to move Sill to a new host and set up a new technical plan for the service. The hardware failure was out of my control. **Please be reassured that your data has not been leaked or exposed**.

However, due to the hardware failure, I was unable to recover Sill's database. That means **you will need to recreate your Sill account** if you want to continue using the service.

**You can sign up for a new account [here](https://sill.social/accounts/signup)**. Once you sign up, you will also need to reconnect your Bluesky and Mastodon accounts and, if applicable, resubscribe to your Daily Digest and custom notifications. I am very sorry for the inconvenience.

Obviously, this is quite unfortunate. I spent most of this week doing everything I could to recover the database, but all of my attempts failed. Hardware failure is always a possibility when building software. The best we can do is have fallbacks for if it does happen. My backup plans did not work out in this case, but I've learned what went wrong and addressed the issues, and strengthened Sill's infrastructure considerably. On the new infrastructure I have done the following to prevent failure like this again:

- **Migrated Sill to a new hosting service**. The hardware failure was out of my control, but I do control where Sill is hosted. After much research, I'm confident that I have chosen a more dependable hosting service going forward.
- **Implemented disk mirroring on Sill's production database**. If one hard drive running Sill's database fails, Sill will automatically fail over to the backup hard drive with little to no disruption in service. Then, I can work to replace the failed hard drive and restore disk mirroring. My hosting service is also monitoring my server 24/7 and will address any failures if they happen.
- **Addressed the flaws in my offsite backup strategy**. If Sill's infrastructure were to fail completely again, I am now confident I can restore Sill via my offsite backups on a new server in a timely manner.
- **Significatly reduced the amount of data Sill stores in its database at any time**. This means I can backup more efficiently and more often, and the restoration process is much faster and simpler.

In light of all this, I am postponing any plans to charge for features in Sill. I remain excited about the possibilities for Sill, and while this is a setback, I'm still committed to making this the best product it can be.

As always, you can reach me at tyler@sill.social if you have any questions or concerns.

Thank you for your understanding,
Tyler