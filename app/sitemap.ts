import { cardData } from "./(pages)/work/data"

export const baseUrl = 'https://kimuradev.com'

export default async function sitemap() {
  let works = cardData.map((job) => ({
    url: `${baseUrl}/work/${job.id}`,
  }))

  let routes = ['', '/about-me', '/work', '/experience', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...works]
}
