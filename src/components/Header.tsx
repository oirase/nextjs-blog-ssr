import { fontBase,
         white
        } from '~/styles/variables'

const Header = () => (
 <header className="header">
  <h1 className="header__h1">WebCreateBlog</h1>
  <style jsx>{`
    .header {
      height: 16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${white};

      &__h1 {
        font-family: 'Abril Fatface', ${fontBase};
        font-size: 4rem;
        font-weight: normal;
      }
    }
  `}</style>
 </header>
)

export default Header
