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
    spaceId: '<YOUR_SPACEID>'
}); 

export const onlineChannel = client.onlineChannel('<YOUR_ONLINE_API_KEY>', '<YOUR_CHANNEL>');
```
* and then run the following command
```zsh
npm run dev
```

