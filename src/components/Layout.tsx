import { FC } from 'react'
import path from 'path'
import Meta from '~/components/Meta'
import ScrollButton from '~/components/ScrollButton'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import styles from '~/components/layout.module.css'
import { purple } from '~/styles/variables'

const Layout: FC = ({ children }) => (
  <>
    <Meta />
    <ScrollButton />
    <div className="outbox">
      <div className="top-view">
        <Header />
        <Nav />
      </div>
      <div>
        {children}
      </div>
      <Footer />
      <style jsx>{`
        .outbox {
          background: #333;
          padding: 1rem;
          max-width: 120rem;
          min-height: 100vh;
        }

        .top-view {
          background-image: url('/images/layout/image03.jpg');
          background-color: purple;
          border-radius: 10px 10px 0 0;
        }
      `}</style>
    </div>
  </>
)

export default Layout
