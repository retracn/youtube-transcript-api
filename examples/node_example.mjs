// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/youtube-transcript-scraper').call({
  "videos": [
    "https://www.youtube.com/watch?v=UF8uR6Z6KLc"
  ],
  "language": "en"
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.title, item.channel, item.wordCount, item.transcriptLanguage);
