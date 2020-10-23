import Link from 'next/link'
import { useRouter } from 'next/router'
import Tab from '~/components/Tab'
import { useActiveArticleState } from '~/components/Context'
import { fontBase,
         green,
         red,
         orange,
         blue,
         yellow,
         brown,
         md
        } from '~/styles/variables'

const Nav = () => {

  const state = useActiveArticleState()
  const router = useRouter()

  const isActive = (path, color) => {
    if (router.pathname === path) {
      return yellow
    } else {
      return color
    }
  }

  return (
    <nav className="nav">
      <div className="nav__menu">
        <Tab
          href='/'
          background={isActive('/', green)}
        >
          New
        </Tab>
        <Tab
          href='/category'
          background={isActive('/category', red)}
        >
          Category
        </Tab>
        <Tab
          href='/search'
          background={isActive('/search', orange)}
        >
          Search
        </Tab>
        { state
        ? <Tab
            href={`/article/${state}`}
            background={isActive(`/article/${state}`, orange)}
          >
            Article
          </Tab>
        : null }
      </div>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: center;
          height: 6rem;

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
