import styles from './style.module.scss'
import { useWindowScroll } from 'react-use'

function Top(props: React.SVGProps<SVGSVGElement>) {
  const { y } = useWindowScroll()

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      {y > 200 && (
        <div className={styles.top} onClick={goTop}>
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4-4 4h3z" />
          </svg>
        </div>
      )}
    </>
  )
}

export default Top
