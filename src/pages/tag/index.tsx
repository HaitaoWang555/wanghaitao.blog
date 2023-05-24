import { getTags, posts } from '@/utils'
import Link from 'next/link'

const FONT_MIN = 12
const FONT_MAX = 48
const OPACITY_MIN = 0
const OPACITY_MAX = 1

function Tag() {
  const tags = getTags()

  return (
    <div className="prose-container flex flex-col items-center justify-center">
      <h2 className="relative font-medium font-serif text-5xl mt-20 sm:mt-40">标签</h2>
      <p className="font-medium text-sm m-10 sm:m-14">共 {tags.length} 个标签</p>
      <div className="flex items-center justify-center flex-wrap gap-8 my-8">
        {tags.map((i) => {
          return (
            <div key={i.value}>
              <Link
                href={`/tag/${i.value}`}
                className="transition hover:!opacity-100 hover:scale-125 flex"
                style={{
                  // 该 tag 文章数占总数 20% 时字体达到最大 scale
                  fontSize: Math.min(
                    FONT_MIN + ((i.posts.length / posts.length) * (FONT_MAX - FONT_MIN)) / 0.2,
                    FONT_MAX
                  ),
                  // 该 tag 文章数占总数 10% 时字体颜色达到最深
                  opacity: Math.min(
                    OPACITY_MIN + ((i.posts.length / posts.length) * (OPACITY_MAX - OPACITY_MIN)) / 0.1,
                    OPACITY_MAX
                  ),
                }}
              >
                {i.label}
                <sup>{i.posts.length}</sup>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tag
