
const Loader = () => (

  <div className="loader">
    <style jsx>{`
      .loader {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin: 3rem auto;
      }

      .loader {
        border: 1.1rem solid rgba(255, 255, 255, 0.2);
        border-left: 1.1rem solid #ffffff;
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
