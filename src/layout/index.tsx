import config from 'config'
import Head from 'next/head'
import Toc from '@/components/toc'
import Top from '@/components/top'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{config.title}</title>
      </Head>
      <main className="min-h-screen mx-auto container flex justify-between relative">
        <div className="markdown-body">
          {children}
          <Top />
        </div>
        <Toc></Toc>
      </main>
    </>
  )
}
