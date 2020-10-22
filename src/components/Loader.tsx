
const Loader = () => (

  <div className="loader">
    <style jsx>{`
      .loader {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: 3rem auto;
      }

      .loader {
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
  </div>
)

export default Loader
