import { FC } from 'react'
import Meta from '~/components/Meta'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Nav />
      {children}
    <Footer />
  </>
)

export default Layout
