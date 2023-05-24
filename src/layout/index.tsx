import config from 'config'
import Head from 'next/head'
import { useWindowScroll } from 'react-use'

import Header from '@/components/header'
import Toc from '@/components/toc'
import Top from '@/components/top'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { y } = useWindowScroll()

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{config.title}</title>
      </Head>

      {y < 200 && <Header />}
      <main className="mx-auto container relative" style={{ marginTop: '72px' }}>
        <div className="content flex justify-between w-4/5 mx-auto">
          <div className="markdown-body">
            {children}
            {typeof window !== undefined && y > 200 && <Top />}
          </div>
          <Toc></Toc>
        </div>
      </main>
    </>
  )
}
