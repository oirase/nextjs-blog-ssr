import Link from 'next/link'
import { useRouter } from 'next/router'
import Tab from '~/components/Tab'
import {
  useActiveArticleState,
  useActiveArticleDispatch,
} from '~/components/Context'

const Nav = () => {
  const router = useRouter()
  const dispatch = useActiveArticleDispatch()

  console.log(router.query)

  return (
    <nav>
      <Tab href="/">New</Tab>
      <Tab href="/category">Category</Tab>
      <Tab href="/search">Search</Tab>
      {router.pathname.includes('articles') ? (
        <Tab href="/article">Article</Tab>
      ) : null}
    </nav>
  )
}

export default Nav
