import Link from 'next/link'
import { fontBase,
         white
        } from '~/styles/variables'

const Header = () => (
 <header className="header">
  <Link href="/">
    <h1 className="header__h1"><a>WebCreateBlog</a></h1>
  </Link>
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
        //cursor: pointer;
      }
    }
  `}</style>
 </header>
)

export default Header
