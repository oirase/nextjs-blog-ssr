import { FC } from 'react'
import Meta from '~/components/Meta'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import styles from '~/components/layout.module.css'
import { white, purple } from '~/styles/variables'

const Layout: FC = ({ children }) => (
  <div className="outbox">
    <div className="top-view">
      <Header />
      <Nav />
    </div>
      {children}
    <Footer />
    <style jsx>{`
      .outbox {
        background: #333;
        padding: 1rem;
      }

      .top-view {
        background-image: url("");
        background-color: purple;
        border-radius: 10px 10px 0 0;
      }
    `}</style>
  </div>
)

export default Layout
