import { FC } from 'react'
import Meta from '~/components/Meta'
import ScrollButton from '~/components/ScrollButton'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import { yellow } from '~/styles/variables'

type Props = {
  background?: string
  padding?: string
}

const Layout: FC<Props> = ({
  background = yellow,
  padding = '2rem 0',
  children,
}) => (
  <>
    <Meta />
    <ScrollButton />
    <div className="outbox">
      <div className="top-view">
        <Header />
        <Nav />
      </div>
      <div className="contents">{children}</div>
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

        .contents {
          background: ${background};
          padding: ${padding};
          min-height: 100%;
        }
      `}</style>
    </div>
  </>
)

export default Layout
