import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getTags } from '@/utils'
import Link from 'next/link'

function Tag() {
  const router = useRouter()
  const tags = getTags()
  const posts = tags.find((i) => i.value === router.query.slug)?.posts

  return (
    <>
      {posts &&
        posts.map((i) => {
          return (
            <Link href={'/posts' + i.value} key={i.value}>
              <div>{i.label}</div>
            </Link>
          )
        })}
    </>
  )
}

export default Tag
