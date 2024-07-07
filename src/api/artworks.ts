export async function getArtworks() {
  const url = 'https://api.artic.edu/api/v1/artworks?limit=2'

  const cache = await window.caches.open('v1')

  const match = await cache.match(url)

  if (match) return match.json()

  const response = await fetch(url)

  cache.put(url, response.clone())

  return await response.json()
}

export async function getArtworkById(id: string) {
  const url = `https://api.artic.edu/api/v1/artworks/${id}`

  const cache = await window.caches.open('v1')

  const match = await cache.match(url)

  if (match) return match.json()

  const response = await fetch(url)

  cache.put(url, response.clone())

  return await response.json()
}
