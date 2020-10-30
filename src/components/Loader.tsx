import { FC } from 'react'

const Loader: FC = () => (
  <>
    <div className="loader"></div>
    <style jsx>{`
      .loader {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: 3rem auto;
        border: 1.1rem solid rgba(51, 51, 51, 0.6);
        border-left: 1.1rem solid #333;
        animation: load 1.1s infinite linear;
      }

      @keyframes load {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </>
)

export default Loader
