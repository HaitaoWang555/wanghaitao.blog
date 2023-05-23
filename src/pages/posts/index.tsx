import Link from 'next/link'
import { posts } from '@/utils'

function PostIndex() {
  return (
    <div>
      {posts.map((i) => {
        return (
          <Link href={'/posts' + i.value} key={i.value}>
            <div>{i.label}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default PostIndex
