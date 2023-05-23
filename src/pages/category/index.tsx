import { getCategory } from '@/utils'
import Link from 'next/link'

function Category() {
  const categories = getCategory()

  return (
    <div>
      {categories.map((i) => {
        return (
          <Link href={'/category/' + i.value} key={i.value}>
            <div>{i.label}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Category
