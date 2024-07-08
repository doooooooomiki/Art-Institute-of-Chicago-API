const CACHE_VERSION = '1.0'
const CACHE_NAME = `artic-v${CACHE_VERSION}`

/**@type {ServiceWorkerGlobalScope} sw */
const sw = self

sw.addEventListener('install', (event) => {
  console.log(`${CACHE_NAME} installing...`)
  event.waitUntil(caches.open(CACHE_NAME))
})

sw.addEventListener('activate', (event) => {
  console.log(`${CACHE_NAME} activated`)

  const cachesToKeep = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cachesToKeep.includes(key)) {
            return caches.delete(key)
          }
        })
      )
    )
  )
})

sw.addEventListener('fetch', async (event) => {
  const url = new URL(event.request.url)

  if (url.host != 'api.artic.edu') return

  event.respondWith(readThroughCaching(event))
})

async function readThroughCaching(event) {
  const cache = await caches.open(CACHE_NAME)

  const match = await cache.match(event.request)

  if (!!match) return match

  const response = await fetch(event.request)

  cache.put(event.request, response.clone())

  return response
}
