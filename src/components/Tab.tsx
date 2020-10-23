import { FC } from 'react'
import Link from 'next/link'
import { lighten } from 'polished'
import { fontBase,
         brown,
         sm
        } from '~/styles/variables'

type Props = {
  href: string
  background: string
}

const Tab: FC<Props> = ({ href, background, children}) => {
  return (

    <Link href={href}>
      <a className="tab">

            {children}

         <style jsx>{`

        $green: #33CC99;
        $orange: #FF9900;
        $red: #FF3300;
        $blue: #00CCCC;

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
          border-color: ${lighten(0.4, background)};
          border-radius: 10px 10px 0 0;
          font-size: 1.4rem;
          font-family: Georgia, 'Open Sans Condensed', ${fontBase};
          //font-weight: bold;
          letter-spacing: 1px;
          color: ${brown};
          position: relative;
          text-decoration: none;

          @media(${sm}) {
            font-size: 2rem;
            padding: 1.8rem 0;
          }

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: white;
            opacity: 0;
          }

          &:hover::before {
            opacity: .3;
          }

          &:last-child {
            margin-right: 0;
          }

          &--hover {

            &:hover {
              background: white;
              opacity: .3;
            }
          }
        }
      `}</style>
      </a>
    </Link>
  )
}

export default Tab
