import Link from 'next/link'
import { useRouter } from 'next/router'
import Tab from '~/components/Tab'
import { useActiveArticleState } from '~/components/Context'
import { fontBase,
         white,
         brown,
         md
        } from '~/styles/variables'

const Nav = () => {

  const state = useActiveArticleState()

  return (
    <nav className="nav">
      <div className="nav__menu">
      <p>test</p>
        <Tab href='/' >
          New
        </Tab>
        <Tab href='/category' >
          Category
        </Tab>
        <Tab href='/search' >
          Search
        </Tab>
        { state
        ? <Tab href={`/article/${state}`} >
            Article
          </Tab>
        : null }
      </div>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: center;
          color: #888;
          font-size: 2.8rem;
          font-family: 'Open Sans Condensed', ${fontBase};
          font-weight: bold;
          letter-spacing: 1px;


          @media(${md}) {
            font-size: 4rem;
          }

          &__menu {
            display: flex;
            justify-content: center;
            width: 100%;
            //color: ${brown};
          }
        }
      `}</style>
    </nav>
  )
}

export default Nav
