import '@/styles/globals.scss'
import '@/styles/reset.scss'
import '@/styles/highlight.scss'
import '@/styles/prism.css'
import 'github-markdown-css'
import Layout from '@/layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}