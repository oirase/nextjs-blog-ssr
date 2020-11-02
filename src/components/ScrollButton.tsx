import { FC } from 'react'
import { useState, useEffect } from 'react'
import { brown } from '~/styles/variables'

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

const ScrollButton: FC = () => {
  const [state, setState] = useState(false)

  const onScroll = () => {
    window.pageYOffset < 500
      ? state && setState(false)
      : state || setState(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [state])

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-button ${state ? 'active' : null}`}
    >
      &#9650;
      <style jsx>{`
        .scroll-button {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          background: ${brown};
          opacity: 0;
          color: white;
          visibility: hidden;
          position: fixed;
          right: 20px;
          bottom: 20px;
          font-size: 36px;
          transition: opacity 1.5s, visibility 1.5s;
          z-index: 100;
        }

        .active {
          opacity: 0.5;
          visibility: visible;

          &:hover {
            opacity: 0.7;
            transition: opacity 0.1s, visibility 0.1s;
          }
        }
      `}</style>
    </button>
  )
}

export default ScrollButton
