import '@/styles/globals.scss'
import '@/styles/tailwindcss.css'
import '@/styles/reset.scss'
import '@/styles/markdown.scss'
import '@/styles/prism.css'
import '@/styles/print.scss'
import 'github-markdown-css'
import Layout from '@/layout'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
