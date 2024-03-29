import posts from '@/assets/posts.json'
import { category, tag } from '@/types/page'

export { posts }

export function getAllPosts() {
  return posts
}

export function getCategory() {
  const categories: category[] = []

  posts.forEach((p) => {
    const index = categories.findIndex((i) => i.value === p.category.value)
    if (index > -1) {
      categories[index].posts?.push(p)
    } else {
      categories.push({
        label: p.category.label,
        value: p.category.value,
        posts: [p],
      })
    }
  })
  return categories
}

export function getTags() {
  const tags: tag[] = []

  posts.forEach((p) => {
    if (p.tag && p.tag.length > 0) {
      p.tag.forEach((t) => {
        const index = tags.findIndex((i) => i.value === t.value)
        if (index > -1) {
          tags[index].posts?.push(p)
        } else {
          tags.push({
            label: t.label,
            value: t.value,
            posts: [p],
          })
        }
      })
    }
  })
  return tags
}

export const colorString = [
  '!text-emerald-600',
  '!text-orange-600',
  '!text-red-600',
  '!text-sky-600',
  '!text-teal-600',
  '!text-blue-600',
  '!text-amber-600',
  '!text-yellow-600',
  '!text-lime-600',
  '!text-green-600',
]
