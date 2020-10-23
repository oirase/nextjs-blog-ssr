import Link from 'next/link'
import { purple } from '~/styles/variables'

type Props = {
  url?: string
  text?: string
}

const Footer = ({ url='/contact', text='contact us' }) => (
 <footer className="footer">
  <Link href={url}>
    <a className="footer__link">{text}</a>
  </Link>
  <style jsx>{`
    .footer {
      height: 16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${purple};
      height: 8rem;
      border-radius: 0 0 10px 10px;

      &__link{
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}</style>
 </footer>
)

export default Footer
