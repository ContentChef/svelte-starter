# Installation

* clone repo and install dependencies
```zsh
git clone git@github.com:ContentChef/svelte-starter.git
cd svelte-starter
npm install # or yarn
```
* change options in `./src/contentChef.js`;
```javascript
import { configure } from '@contentchef/contentchef-node';

const client = configure({
    apiKey: '<YOUR_API_KEY>',
    host: '<CONTENTCHEF_HOST>',
    spaceId: '<YOUR_SPACEID>'
}, '<TARGETDATE>'); 

export const onlineChannel = client.onlineChannel('<YOUR_CHANNEL>');
```
* and then run the following command
```zsh
npm run dev
```

