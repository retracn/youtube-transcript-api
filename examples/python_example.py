# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/youtube-transcript-scraper").call(run_input={
  "videos": [
    "https://www.youtube.com/watch?v=UF8uR6Z6KLc"
  ],
  "language": "en"
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("title"), item.get("channel"), item.get("wordCount"), item.get("transcriptLanguage"))
