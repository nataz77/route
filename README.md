# Route ➡️📍🔁

This is a very simple URL shortening services running on Cloudflare Workers using Cloudflare KV to store URL data

## Get started

### Worker deploy
- Clone the repo
- If you don't have it installed, install the [`wrangler cli`](https://developers.cloudflare.com/workers/get-started/guide#2-install-the-workers-cli)
- Login to your Cloudflare account via `wrangler login`
- Deploy via `wrangler publish`

### KV Management
- In the Cloudflare Workers dashboard, create a new KV namespace (you can freely choose a name at this time)
- Open the deployed worker and in the Settings tab, bind the created namespace to the `route` variable

### Bonus steps
- Disable the `workers.dev` endpoint and link it to a domain (eg. route.example.com)


## URL management
In the Cloudflare Workers dashboard, open the KV namespace you just created and for each URL you want to be shortened add an entry in the table (eg. if you insert `hello` as the key and `https://example.com` as the value, calling `https://WORKERENDPOINT/hello` will redirect you to `https://example.com`)