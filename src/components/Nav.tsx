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
          height: 7rem;

          &__menu {
            display: flex;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </nav>
  )
}

export default Nav
