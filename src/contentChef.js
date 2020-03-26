import { configure } from '@contentchef/contentchef-node';

const client = configure({
    apiKey: '<YOUR_API_KEY>',
    host: '<CONTENTCHEF_HOST>',
    spaceId: '<YOUR_SPACEID>'
}, '<TARGETDATE>'); 
/* 
    CONTENTCHEF_HOST is ContentChef public endpoint or a personal one
    TARGET_DATE (optional) can be a ISO date or a function that returns an ISO date
*/

export const onlineChannel = client.onlineChannel('<YOUR_CHANNEL>');
// export const previewChannel = client.previewChannel('<YOUR_CHANNEL>', '<PUBLISHING_STATUS>') 
/* 
    previewChannel can be used to view live/stage contents in a precise date
    PUBLISHING_STATUS (optional) can either be "live" or "staging"
*/
