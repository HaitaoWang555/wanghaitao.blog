import { useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './style.module.scss'
import { usePathname } from 'next/navigation'
import { useWindowSize } from 'react-use'

function Header() {
  const [nav] = useState([
    { label: '主页', value: '/' },
    { label: '标签', value: '/tag' },
    { label: '分类', value: '/category' },
    { label: '关于', value: '/about' },
  ])

  const [clientPath, setClientPath] = useState('/')
  const path = usePathname()
  const { width } = useWindowSize()

  useEffect(() => {
    setClientPath(location.pathname)
  }, [path])

  function print() {
    window.print()
  }

  return (
    <div id="HEADER" className={'bg-slate-50 ' + styles.header}>
      <div className={'mx-auto  container flex justify-between py-4'}>
        <div className="logo"></div>
        <div className={styles.nav}>
          {nav.map((i) => {
            return (
              <Link href={i.value} key={i.value}>
                <div
                  className={classNames({
                    'btn-primary': true,
                    active: clientPath === i.value,
                  })}
                >
                  {i.label}
                </div>
              </Link>
            )
          })}
          {path && path.startsWith('/resume') && width > 800 && (
            <a>
              <div className="btn-primary" onClick={print}>
                打印
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
