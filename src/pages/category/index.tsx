import { getCategory } from '@/utils'
import Link from 'next/link'

function Category() {
  const categories = getCategory()

  return (
    <div className="flex items-start justify-start flex-wrap gap-8">
      {categories.map((i) => {
        return (
          <div key={i.value} style={{ minWidth: '200px' }}>
            <h3>{i.label}</h3>
            <ul>
              {i.posts.map((p) => {
                return (
                  <li key={p.value}>
                    <Link href={'/posts/' + p.value}>{p.label}</Link>
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
