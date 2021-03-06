import { FC } from 'react'
import { useRouter } from 'next/router'
import Tab from '~/components/Tab'
import { useActiveArticleState } from '~/components/Context'
import {
  green,
  red,
  orange,
  blue,
  yellow,
  darkbrown
} from '~/styles/variables'

const Nav: FC = () => {
  const state = useActiveArticleState()
  const router = useRouter()

  const isActive = (
    path: string,
    background: string = yellow,
    color: string = darkbrown
  ): {
    active: boolean
    activeBackground: string
    activeColor: string
  } => {
    const regexp = new RegExp(path)
    if (regexp.test(router.pathname)) {
      return {
        active: true,
        activeBackground: background,
        activeColor: color
      }
    }
  }

  return (
    <nav className="nav">
      <div className="nav__menu">
        <Tab href="/" background={green} {...isActive('/$')}>
          New
        </Tab>
        <Tab href="/category" background={orange} {...isActive('/category')}>
          Category
        </Tab>
        <Tab href="/search" background={red} {...isActive('/search')}>
          Search
        </Tab>
        {state ? (
          <Tab
            href={`/article/${state}`}
            background={blue}
            {...isActive(`/article`, 'white')}
          >
            Article
          </Tab>
        ) : null}
      </div>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: center;
          //height: 6rem;

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
