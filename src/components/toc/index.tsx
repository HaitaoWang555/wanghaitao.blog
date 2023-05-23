import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function Toc() {
  const pathname = usePathname()
  useEffect(() => {
    const toc = document.querySelector('.markdown-body .toc')
    const tocWrap = document.querySelector('#tocWrap .markdown-body')

    if (tocWrap && toc) {
      tocWrap.innerHTML = toc.innerHTML
    } else if (tocWrap && !toc) {
      tocWrap.innerHTML = ''
    }
  }, [pathname])
  return (
    <>
      {['/test'].includes(pathname) && (
        <div id="tocWrap">
          <div className="markdown-body"></div>
        </div>
      )}
    </>
  )
}

export default Toc
