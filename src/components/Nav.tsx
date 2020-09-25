import Link from 'next/link'
import { useRouter } from 'next/router'
import Tab from '~/components/Tab'
import {
  useActiveArticleState,
  useActiveArticleDispatch,
} from '~/components/Context'

const Nav = () => {
  const state = useActiveArticleState()

  return (
    <nav>
      <Tab href="/">New</Tab>
      <Tab href="/category">Category</Tab>
      <Tab href="/search">Search</Tab>
      {state ? <Tab href={`/articles/${state}`}>Article</Tab> : null}
    </nav>
  )
}

export default Nav
