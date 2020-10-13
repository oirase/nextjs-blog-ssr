import { useState, useEffect } from 'react'
import { brown,
         white
        } from '~/styles/variables'

const ScrollButton = () => {

  const [state, setState] = useState(false)

  let a = true

  const scrollToTop = () => {
    const offset = window.pageYOffset
    window.scrollTo(0, Math.floor( offset / 2 ))
    offset > 0 && window.setTimeout(scrollToTop, 30)
  }

  useEffect(()=>{
   window.addEventListener('scroll', (e) => {
    window.pageYOffset > 500
    ?  setState(true)
    :  setState(false)
  })
  }, [])

  return (
    <button onClick={scrollToTop}
      className={`scroll-button ${state && 'active'}`}
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
