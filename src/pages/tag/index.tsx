import { getTags } from '@/utils'
import Link from 'next/link'

function Tag() {
  const categories = getTags()

  return (
    <div>
      {categories.map((i) => {
        return (
          <Link href={'/tag/' + i.value} key={i.value}>
            <div>{i.label}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Tag
