import { FC } from 'react'
import Link from 'next/link'
import { fontBase,
         white,
         brown,
         md
        } from '~/styles/variables'

type Props = {
  href: string
}

const Tab: FC<Props> = ({ href, children}) => {
  return (
  <div className="tab__wrapper">
    <Link href={href}>
      <a className="tab">
        {children}
      </a>
    </Link>
    <style jsx>{`

        $green: #33CC99;
        $orange: #FF9900;
        $red: #FF3300;
        $blue: #00CCCC;

        .tab {
          padding: 1.8rem 0;
          text-align: center;
          font-size: 1.4rem;
          width: 20rem;
          max-width: 24%;
          margin-right: 0.8%;
          border: 1px solid ${white};
          border-bottom: none;
          background: $blue;
          border-radius: 10px 10px 0 0;
          font-size: 1.4rem;
          font-family: Georgia, 'Open Sans Condensed', ${fontBase};
          //font-weight: bold;
          letter-spacing: 1px;
          color: ${brown};

          @media(${md}) {
            font-size: 2rem;
          }

          &:nth-child(1) {
            background: $green;
            border-color: lighten($green, 40%);
          }

          &:nth-child(2) {
            background: $orange;
            border-color: lighten($orange, 40%);
          }

          &:nth-child(3) {
            background: $red;
            border-color: lighten($red, 40%);
          }

          &:nth-child(4) {
            background: $blue;
            border-color: lighten($blue, 40%);
          }

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            opacity: .7;
          }

          &__wrapper {
            background: ${white};
          }
        }
      `}</style>
  </div>
  )
}

export default Tab
