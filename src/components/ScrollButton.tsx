import { useState, useEffect } from 'react'
import { brown,
         white
        } from '~/styles/variables'

const ScrollButton = () => {

  const [state, setState] = useState(false)

  const scrollToTop = () => {
    const offset = window.pageYOffset
    window.scrollTo(0, Math.floor( offset / 2 ))
    offset > 0 && setTimeout(scrollToTop, 30)
  }

  const onScroll = () => {
    window.pageYOffset < 500
      ? (state && setState(false))
      : (state || setState(true))
  }


  useEffect(()=> {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }

  }, [state])

  return (
    <button onClick={scrollToTop}
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
          color: ${white};
          visibility: hidden;
          position: fixed;
          right: 20px;
          bottom: 20px;
          font-size: 36px;
          transition: opacity 1.5s, visibility 1.5s;
          z-index: 100;
        }

        .active {
            opacity: .5;
            visibility: visible;

          &:hover {
            opacity: .7;
            transition: opacity 0.1s, visibility 0.1s;
          }
        }
      `}</style>
    </button>
  )
}

export default ScrollButton
