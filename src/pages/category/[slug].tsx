import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getCategory } from '@/utils'
import Link from 'next/link'

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const categories = getCategory()
  const paths = categories.map((i) => {
    return { params: { slug: i.value } }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {
  return {
    props: {
      slug: params?.slug,
    },
  }
}

function Category() {
  const router = useRouter()
  const categories = getCategory()
  const posts = categories.find((i) => i.value === router.query.slug)?.posts

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

export default Category
