<div align="center">
  <img src="static/contentchef_logo.svg" height="64"/>
</div>

Sapper Starter for [ContentChef - Headless CMS](https://www.contentchef.io/)
===========================

[ContentChef](https://www.contentchef.io/) is an Headless CMS designed to accelarete the development of modern,cross channel digital products.

This starter is a sample [Sapper](https://sapper.svelte.dev/) integrated with our Delivery API using the [ContentChef SDK](https://github.com/ContentChef/contentchef-node)

# Requirements

In order to use make this starter work, you will need

* An active ContentChef account (sign up for a 30-day free trial [here](https://www.contentchef.io/registration))
* Node JS >= 8

# Clone & Installation

Clone the starter repo and install all the deps

```bash
    git clone git@github.com:ContentChef/svelte-starter.git
    cd svelte-starter
    npm install
```

Get your SpaceID, Online API Key from your dashboard home page.

![ContentChef Dashboard - Home](https://res.cloudinary.com/contentchef/image/upload/v1/chefsite-2910/I49Zi00Uf7S/spaceid)

Open `./src/contentChef.js` and copy your data in the clinet configuration and use "example-ch" for your channel now.

```javascript
import { configure } from '@contentchef/contentchef-node';

const client = configure({
    spaceId: '<YOUR_SPACEID>'
});

export const onlineChannel = client.onlineChannel('<YOUR_ONLINE_API_KEY>', 'example-ch');
```

You are now ready to start the sapper server

```bash
npm run dev
```

Enjoy!

You can now visit [https://localhost:3000/sites](https://localhost:3000/sites) and see the list of content fetched from Content Chef!

To Learns More
===========================

* [ContentChef Website](https://wwww.contentchef.io)
* [ContentChef Docs](https://docs.contentchef.io)
* [ContentChef Blog](https://www.contentchef.io/blog)
* [Sapper](https://sapper.svelte.dev)
* [Svelte](https://svelte.dev)