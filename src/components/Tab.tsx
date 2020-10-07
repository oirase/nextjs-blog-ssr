import { FC } from 'react'
import Link from 'next/link'


type Props = {
  href: string
}

const Tab: FC<Props> = ({ href, children}) => {
  return (
  <Link href={href}>
    <button className="tab">
      {children}
          <style jsx>{`

      $white: #FFF;
      $green: #33CC99;
      $orange: #FF9900;
      $red: #FF3300;
      $blue: #00CCCC;

      .tab {
        padding: 2rem 0;
        text-align: center;
        font-size: 1.4rem;
        width: 20rem;
        max-width: 24%;
        margin-right: 0.8%;
        border: 1px solid $white;
        border-bottom: none;
        background: $blue;
        border-radius: 10px 10px 0 0;


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
      }
    `}</style>
    </button>
  </Link>
  )
}

export default Tab
