import { FC } from 'react'
import path from 'path'
import Meta from '~/components/Meta'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import styles from '~/components/layout.module.css'
import { white, purple, yellow } from '~/styles/variables'

const Layout: FC = ({ children }) => (
  <>
    <Meta />
    <div className="outbox">
      <div className="top-view">
        <Header />
        <Nav />
      </div>
      <div className="contents">
        {children}
      </div>
      <Footer />
      <style jsx>{`
        .outbox {
          background: #333;
          padding: 1rem;
          max-width: 120rem;
        }

        .top-view {
          background-image: url('/images/layout/image06.jpg');
          background-color: purple;
          border-radius: 10px 10px 0 0;
        }

        .contents {
          background: ${yellow};
          padding: 2rem 0;
          min-height: 60rem;
        }
      `}</style>
    </div>
  </>
)

export default Layout
