import { FC } from 'react'
import { yellow } from '~/styles/variables'

const Contents: FC = ({ children }) => (
  <div className="contents">
    { console.log('Contents') }
    {children}
    <style jsx>{`
      .contents {
        background: ${yellow};
        padding: 2rem 0;
        min-height: 100%;
      }
    `}</style>
  </div>
)

export default Contents
