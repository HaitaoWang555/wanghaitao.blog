import config from 'config'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import Header from '@/components/header'
import Toc from '@/components/toc'
import Top from '@/components/top'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { y } = useWindowScroll()
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(!(y > 200))
  }, [y])

  return (
    <div className={roboto.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{config.title}</title>
      </Head>

      {show && <Header />}
      <main className="mx-auto container relative" style={{ marginTop: '72px' }}>
        <div className="content flex justify-between w-4/5 mx-auto">
          <div className="markdown-body">
            {children}
            {y > 200 && <Top />}
          </div>
          <Toc></Toc>
        </div>
      </main>
    </div>
  )
}
