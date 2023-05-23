import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // mdxRs: false,
  },
  sassOptions: {
    includePaths: ['./src'],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeCodeTitles],
      [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeToc,
    ],
  },
})
export default withMDX(nextConfig)
