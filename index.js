addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
  var redirect = await route.get(request.url.replace(/^(?:\/\/|[^/]+)*\//, ''))
  var head = new Headers();
  head.append("Location", redirect);
  return new Response(null, {
    status:"301",
    headers: head
  })
}
