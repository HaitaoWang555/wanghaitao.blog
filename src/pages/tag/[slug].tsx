import { useRouter } from 'next/router'
import { getTags } from '@/utils'
import Link from 'next/link'

function Tag() {
  const router = useRouter()
  const tags = getTags()
  const tag = tags.find((i) => i.value === router.query.slug)
  const posts = tag ? tag.posts : []

  return (
    <div>
      <h3>{tag?.label}</h3>
      <ul>
        {posts &&
          posts.map((i) => {
            return (
              <li key={i.value}>
                <Link href={'/posts' + i.value}>{i.label}</Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Tag
