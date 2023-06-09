import Link from 'next/link'
import { posts, colorString } from '@/utils'
import { FcFolder } from 'react-icons/fc'

const postsLen = 15

export default function Home() {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {posts.slice(0, postsLen).map((i, index) => {
        return (
          <li key={i.value}>
            <h2 style={{ border: 'none', marginBottom: '8px' }}>
              <Link href={'/posts' + i.value} key={i.value}>
                {i.label}
              </Link>
            </h2>
            <div className="f-center-start">
              <div>
                <Link href={'/category#' + i.category.value} className="f-center-start mx-2">
                  <FcFolder /> {i.category.label}
                </Link>
              </div>
              <div className="f-center-start mx-2">
                {i.tag.map((t, j) => {
                  return (
                    <Link key={j} href={'/tag/' + t.value} className={'mr-2 ' + `${colorString[j]}`}>
                      #{t.label}
                    </Link>
                  )
                })}
              </div>
            </div>
            {index !== postsLen - 1 && <div className="w-full border-b-2 my-2 border-gray-200"></div>}
          </li>
        )
      })}
    </ul>
  )
}
