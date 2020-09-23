import Link from 'next/link'
import { useRouter } from 'next/router'
import Tab from '~/components/Tab'

const Nav = () => {
  const router = useRouter()

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
