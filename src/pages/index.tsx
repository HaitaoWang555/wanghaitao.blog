import Link from 'next/link'
import { posts } from '@/utils'

export default function Home() {
  return (
    <div>
      {posts.slice(0, 10).map((i) => {
        return (
          <Link href={'/posts' + i.value} key={i.value}>
            <div>{i.label}</div>
          </Link>
        )
      })}
    </div>
  )
}
