import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { fontBase, brown, sm } from '~/styles/variables'

type Props = {
  href: string
  background: string
  active?: boolean
  activeBackground?: string
}

const Tab: FC<Props> = ({
  href,
  background,
  active = false,
  activeBackground = 'white',
  children,
}) => {
  return (
    <Link href={href}>
      <a className={`tab ${active ? 'active' : null}`}>
        {children}

        <style jsx>{`
          .tab {
            padding: 1.2rem 0;
            text-align: center;
            font-size: 1.4rem;
            width: 20rem;
            max-width: 24%;
            margin-right: 0.8%;
            border: 1px solid white;
            border-bottom: none;
            background: ${background};
            //border-color: red;
            border-radius: 10px 10px 0 0;
            font-size: 1.4rem;
            font-family: Georgia, 'Open Sans Condensed', ${fontBase};
            //font-weight: bold;
            letter-spacing: 1px;
            //color: ${brown};
            color: white;
            position: relative;
            text-decoration: none;

            @media (${sm}) {
              font-size: 2rem;
              padding: 1.8rem 0;
            }

            &:before {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              background: white;
              opacity: 0;
            }

            &:hover::before {
              opacity: 0.4;
            }

            &:last-child {
              margin-right: 0;
            }
          }

          .active {
            background: ${activeBackground};

            &:hover::before {
              opacity: 0;
            }
          }
        `}</style>
      </a>
    </Link>
  )
}

export default Tab
