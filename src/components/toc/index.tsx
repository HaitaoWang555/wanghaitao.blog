import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useWindowSize } from 'react-use'

function Toc() {
  const pathname = usePathname()
  const { width } = useWindowSize()
  const [show, setShow] = useState(false)

  function isShowToc(type: string) {
    if (!type) return false
    return type.indexOf('/posts') > -1 || type.indexOf('/test') > -1
  }

  useEffect(() => {
    setShow(true)

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
      {show && width > 800 && isShowToc(pathname) && (
        <div id="tocWrap">
          <div className="markdown-body"></div>
        </div>
      )}
    </>
  )
}

export default Toc
