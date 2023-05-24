import { getCategory } from '@/utils'
import Link from 'next/link'

function Category() {
  const categories = getCategory()

  return (
    <div className="">
      {categories.map((i) => {
        return (
          <div key={i.value} style={{ minWidth: '200px' }}>
            <h3 id={i.label}>{i.label}</h3>
            <ul>
              {i.posts.map((p) => {
                return (
                  <li key={p.value}>
                    <Link href={'/posts' + p.value}>{p.label}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Category
