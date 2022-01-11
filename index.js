addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
  // the route var may seem undefined, but it's binded from the Cloudflare KV namespace
  var redirect = await route.get(request.url.replace(/^(?:\/\/|[^/]+)*\//, ''))
  var head = new Headers();
  head.append("Location", redirect);
  return new Response(null, {
    status:"301",
    headers: head
  })
}
