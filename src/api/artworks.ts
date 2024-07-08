export async function getArtworks() {
  const url = new URL('https://api.artic.edu/api/v1/artworks?limit=2')

  const response = await fetch(url)

  return await response.json()
}

export async function getArtworkById(id: string) {
  const url = new URL(`https://api.artic.edu/api/v1/artworks/${id}`)

  const response = await fetch(url)

  return await response.json()
}
