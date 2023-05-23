import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function Toc() {
  const pathname = usePathname()

  function isShowToc(type: string) {
    return type.indexOf('/posts') > -1 || type.indexOf('/test') > -1
  }

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
      {isShowToc(pathname) && (
        <div id="tocWrap">
          <div className="markdown-body"></div>
        </div>
      )}
    </>
  )
}

export default Toc
