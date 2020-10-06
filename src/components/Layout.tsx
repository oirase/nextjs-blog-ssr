import { FC } from 'react'
import Meta from '~/components/Meta'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import styles from '~/components/layout.module.css'

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Nav />
      {children}
    <Footer />
  </>
)

export default Layout
