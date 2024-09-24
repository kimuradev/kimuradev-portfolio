import { cardData } from "./(pages)/portfolio/data"

export const baseUrl = 'https://kimuradev.com'

export default async function sitemap() {
  let works = cardData.map((job) => ({
    url: `${baseUrl}/work/${job.id}`,
  }))

  let routes = ['', '/about-me', '/portfolio', '/experience', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...works]
}
