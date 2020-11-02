import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { purple } from '~/styles/variables'

const Footer: FC = () => {
  const router = useRouter()
  let url, text

  if (router.pathname === '/contact') {
    url = '/'
    text = 'top page'
  } else {
    url = '/contact'
    text = 'contact us'
  }

  return (
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

          &__link {
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
}

export default Footer
