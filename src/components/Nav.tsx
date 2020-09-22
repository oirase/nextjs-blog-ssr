import Link from 'next/link'
import Tab from '~/components/Tab'

const Nav = () => {
  return (
    <nav>
      <Tab href="/">New</Tab>
      <Tab href="/category">Category</Tab>
      <Tab href="/search">Search</Tab>
      <Tab href="/article">Article</Tab>
    </nav>
  )
}

export default Nav
