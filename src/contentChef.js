import { configure } from '@contentchef/contentchef-node';

const client = configure({
    apiKey: '',
    host: '',
    spaceId: ''
}); 
/* 
    CONTENTCHEF_HOST is ContentChef public endpoint or a personal one
    TARGET_DATE can be a ISO date or a function that returns an ISO date
*/

export const onlineChannel = client.onlineChannel('');
// export const previewChannel = client.previewChannel('<YOUR_CHANNEL>', '<PUBLISHING_STATUS>') 
/* 
    PUBLISHING_STATUS can either be "live" or "staging"
*/
