import { ofetch } from 'ofetch'

export async function getArtworks() {
  return await ofetch('https://api.artic.edu/api/v1/artworks?limit=2')
}

export async function getArtworkById(id: string) {
  return await ofetch(`https://api.artic.edu/api/v1/artworks/${id}`)
}
