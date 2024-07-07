export async function getArtworks() {
  const url = 'https://api.artic.edu/api/v1/artworks?limit=2'

  const cache = await window.caches.open('v1')

  const match = await cache.match(url)

  if (match) {
    return match.json()
  } else {
    await cache.add(url)
    return (await cache.match(url))?.json()
  }
}

export async function getArtworkById(id: string) {
  const url = `https://api.artic.edu/api/v1/artworks/${id}`

  const cache = await window.caches.open('v1')

  const match = await cache.match(url)

  if (match) {
    return match.json()
  } else {
    await cache.add(url)
    return (await cache.match(url))?.json()
  }
}
