import { FC } from 'react'
import Link from 'next/link'
import { fontBase } from '~/styles/variables'

const Header: FC = () => (
  <header className="header">
    { console.log('Header') }
    <Link href="/">
      <h1 className="header__h1">
        <a>WebCreateBlog</a>
      </h1>
    </Link>
    <style jsx>{`
      .header {
        height: 16rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

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
