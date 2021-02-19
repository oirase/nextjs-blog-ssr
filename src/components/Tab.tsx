import { FC } from 'react'
import Link from 'next/link'
import { fontBase, brown, sm } from '~/styles/variables'

type Props = {
  href: string
  background: string
  active?: boolean
  activeBackground?: string
  activeColor?: string
}

const Tab: FC<Props> = ({
  href,
  background,
  active = false,
  activeBackground = 'white',
  activeColor = 'black',
  children
}) => {
  return (
    <Link href={href}>
      <a className={`tab ${active ? 'active' : null}`}>
        {children}

        <style jsx>{`
          .tab {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20rem;
            height: 5rem;
            max-width: 24%;
            margin-right: 0.8%;
            border: 1px solid white;
            border-bottom: none;
            background: ${background};
            border-radius: 10px 10px 0 0;
            font-family: Georgia, 'Open Sans Condensed', ${fontBase};
            letter-spacing: 0.5px;
            color: white;
            position: relative;
            text-decoration: none;
            font-size: 1.6rem;
            //padding: 1.6rem 0;

            @media (${sm}) {
              font-size: 2rem;
              padding: 1.8rem 0;
              letter-spacing: 1px;
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
              opacity: 0.5;
            }

            &:last-child {
              margin-right: 0;
            }
          }

          .active {
            background: ${activeBackground};
            color: ${activeColor};

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
