import Link from 'next/link'
import { white, purple } from '~/styles/variables'

type Props = {
  url?: string
  text?: string
}

const Footer = ({ url='/contact', text='contact us' }) => (
 <footer className="footer">
  <Link href={url}>
    <a>{text}</a>
  </Link>
  <style jsx>{`
    .footer {
      height: 16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${white};
      background: ${purple};
      height: 8rem;
      border-radius: 0 0 10px 10px;
    }
  `}</style>
 </footer>
)

export default Footer
